/**
 * Matching for masked behavior names.
 *
 * Masking hides a behavior's name until the user passes Face ID. It only works
 * if we can actually *find* the name in free text — and the text we search is
 * mostly LLM-authored prose, which almost never uses the stored name verbatim.
 * A behavior called "Picking nose" gets written as "nose-picking", "picking my
 * nose", "you picked your nose".
 *
 * The original approach was a literal alternation over the name plus a list of
 * synonyms generated at behavior creation. That makes privacy depend on a model
 * having enumerated every surface form up front: a real recap leaked
 * "nose-picking" past a masked "Picking nose" whose synonym list did contain
 * "nose picking" — the hyphen alone was enough.
 *
 * So matching is fuzzy by construction. Each term expands to a pattern that
 * tolerates the three things that actually vary:
 *
 *  - **Separators.** Words may be joined by any run of whitespace, hyphens,
 *    slashes, dots or quotes, or by nothing at all ("nose picking",
 *    "nose-picking", "nosepicking").
 *  - **Filler words.** Up to two possessives/articles/prepositions may sit
 *    between the words ("picking my nose", "picking at his nose").
 *  - **Inflection.** Each word matches its common inflected forms
 *    ("pick", "picks", "picked", "picking").
 *
 * Two-word terms additionally match in either order, which is what turns
 * "Picking nose" into a matcher for "nose-picking" without anyone writing that
 * down.
 *
 * Synonyms are still valuable — they carry the things morphology can't derive
 * ("porn" for "Pornography", "trichotillomania" for "Hair pulling") — but they
 * no longer have to spell out punctuation and grammar variants.
 *
 * Over-matching is the cheap failure here and under-matching is the expensive
 * one: a spurious dot is a cosmetic bug, a leaked name is the disclosure
 * masking exists to prevent. The patterns lean accordingly, but stay anchored
 * on word boundaries so a term never matches inside a longer word.
 */

/**
 * Terms shorter than this are ignored. A one- or two-character term would match
 * inside unrelated words and shred the text.
 */
export const MIN_MASKABLE_TERM_LENGTH = 3;

/**
 * Separator run between words: any stretch of non-alphanumeric characters, or
 * nothing at all. Deliberately every punctuation mark rather than a hand-picked
 * set — the leak that prompted this was a single hyphen, and there is no reason
 * to think the next one won't be a slash, an ellipsis or a curly quote.
 */
const SEPARATOR = "[^\\p{L}\\p{N}]*";

/** Words that may sit between the words of a term without changing its sense. */
const FILLER_WORDS = [
  "my",
  "your",
  "his",
  "her",
  "their",
  "our",
  "its",
  "the",
  "a",
  "an",
  "at",
  "on",
  "of",
  "out",
  "to",
  "some",
  "any",
  "more",
];

/**
 * Gap between two words of a term: separators, then up to two filler words each
 * followed by separators. Bounded repetition — an unbounded `(?:x|y)*` over
 * alternatives backtracks badly on near-misses.
 */
const GAP = `${SEPARATOR}(?:(?:${FILLER_WORDS.join("|")})${SEPARATOR}){0,2}`;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Split a term into its words, discarding punctuation. "nose-picking" and
 * "nose picking" normalise to the same two words, so a synonym list that
 * contains both contributes one pattern.
 */
export function splitTermWords(term: string): string[] {
  return term
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

/**
 * Strip a common inflectional suffix to get something close to a stem. Not
 * linguistically correct and doesn't need to be — it only has to land on a
 * prefix shared by the forms we then re-expand.
 */
function stem(word: string): string {
  if (word.length >= 6 && word.endsWith("ing")) return word.slice(0, -3);
  if (word.length >= 5 && word.endsWith("ed")) return word.slice(0, -2);
  if (word.length >= 5 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length >= 5 && /(?:s|sh|ch|x|z)es$/.test(word))
    return word.slice(0, -2);
  if (word.length >= 5 && word.endsWith("s") && !word.endsWith("ss"))
    return word.slice(0, -1);
  return word;
}

/**
 * A pattern matching one word and its common inflections. Words that aren't
 * plain letters, or that are too short for stemming to be safe, match
 * literally — "app" must not also match "apps" via a two-letter stem.
 */
function wordPattern(word: string): string {
  if (!/^[a-z]+$/.test(word) || word.length < 4) return escapeRegExp(word);

  let base = stem(word);
  // "picking" stems to "pick", but "stopping" stems to "stopp" — let the
  // doubled consonant be optional so both "stop" and "stopping" match.
  let doubledConsonant = "";
  if (/([bcdfgklmnprtvz])\1$/.test(base)) {
    doubledConsonant = `${base.slice(-1)}?`;
    base = base.slice(0, -1);
  }
  if (base.length < 3) return escapeRegExp(word);

  return `${escapeRegExp(base)}${doubledConsonant}(?:e?[sd]|ing|in['’]|e|)`;
}

/** A term's words in sequence, separator- and filler-tolerant. */
function sequencePattern(words: string[]): string {
  return words.map(wordPattern).join(GAP);
}

/**
 * Every pattern a term should match by. Two-word terms also match reversed,
 * which is how "Picking nose" covers "nose picking" and "nose-picking".
 * Longer terms are left in order — permuting them produces noise, not variants.
 */
function patternsForTerm(term: string): string[] {
  const words = splitTermWords(term);
  if (words.length === 0) return [];
  if (words.join("").length < MIN_MASKABLE_TERM_LENGTH) return [];

  const patterns = [sequencePattern(words)];
  if (words.length === 2) {
    patterns.push(sequencePattern([words[1], words[0]]));
  }
  return patterns;
}

/**
 * One case-insensitive regex matching any of `terms` in any of the forms above,
 * or `null` when nothing is maskable. Anchored on word boundaries so a term
 * never matches inside a longer word.
 */
export function buildMaskedTermRegex(terms: string[]): RegExp | null {
  const patterns = Array.from(
    new Set(terms.flatMap((term) => patternsForTerm(term ?? ""))),
  );
  if (patterns.length === 0) return null;

  // Longest pattern first so a longer phrase wins over a shorter one that is a
  // prefix of it.
  patterns.sort((a, b) => b.length - a.length);
  return new RegExp(`\\b(?:${patterns.join("|")})\\b`, "giu");
}

/** A set of terms that should all be masked the same way. */
export interface MaskedTermGroup {
  /** Caller's handle for this group — a behavior id, typically. */
  id: string;
  /** The name plus any synonyms. */
  terms: string[];
}

/** Where a group's term was found in the text. */
export interface MaskedTermMatch {
  id: string;
  start: number;
  end: number;
  text: string;
}

/**
 * Every masked-term occurrence in `text`, left to right and non-overlapping.
 * When two groups match at the same place the longer match wins, so a specific
 * behavior beats a generic one that happens to share a word.
 */
export function findMaskedTerms(
  text: string,
  groups: MaskedTermGroup[],
): MaskedTermMatch[] {
  if (!text) return [];

  const found: MaskedTermMatch[] = [];
  for (const group of groups) {
    const regex = buildMaskedTermRegex(group.terms);
    if (!regex) continue;
    for (const match of text.matchAll(regex)) {
      if (match.index === undefined) continue;
      found.push({
        id: group.id,
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
    }
  }

  found.sort((a, b) => a.start - b.start || b.end - a.end);

  const result: MaskedTermMatch[] = [];
  let consumedTo = -1;
  for (const match of found) {
    if (match.start < consumedTo) continue;
    result.push(match);
    consumedTo = match.end;
  }
  return result;
}

/**
 * Split `text` into alternating plain and masked segments, so callers can
 * render each masked span their own way (a coloured dot in the app, a
 * placeholder phrase in push copy) without re-implementing the scan.
 */
export interface MaskedTextSegment {
  text: string;
  /** The group this segment matched, or `null` for untouched text. */
  maskedGroupId: string | null;
}

export function segmentMaskedText(
  text: string,
  groups: MaskedTermGroup[],
): MaskedTextSegment[] {
  const matches = findMaskedTerms(text, groups);
  if (matches.length === 0) return [{ text, maskedGroupId: null }];

  const segments: MaskedTextSegment[] = [];
  let cursor = 0;
  for (const match of matches) {
    if (match.start > cursor) {
      segments.push({
        text: text.slice(cursor, match.start),
        maskedGroupId: null,
      });
    }
    segments.push({ text: match.text, maskedGroupId: match.id });
    cursor = match.end;
  }
  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), maskedGroupId: null });
  }
  return segments;
}
