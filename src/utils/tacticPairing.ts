/**
 * The impulse moment always offers a CHOICE: exactly two tactics, never one
 * and never three.
 *
 * "In the impulse moment, you always have a choice" is a product commitment,
 * so it is enforced here rather than asked for in a prompt. This module is the
 * one place that decides which two, and it is deterministic: the model calls a
 * tool that takes no tactic arguments, so "wrong tactic" and "invented tactic"
 * remain impossible, exactly as they were when the same path offered one.
 *
 * Selection runs downstream of scoring, never beside it. `rankPlansForNextTactic`
 * (planScoring) and `scoreTactic` (tacticScoring) still decide what is eligible
 * and in what order, with contraindications, suppressions, `presumesState` and
 * recency already applied. This module only picks two out of what survived, and
 * its whole job is making sure the second one is genuinely a different kind of
 * thing from the first.
 *
 * WHY CONTRAST HAS ITS OWN AXIS
 *
 * Two options that differ only in degree are not a choice — "box breathing, or
 * 4-7-8 breathing" is one option asked twice. `tactic.modality` says what KIND
 * of act a tactic is (move / still / sense / reflect / connect / environment),
 * which is the axis a person actually chooses along in the moment. `phase` is
 * too coarse to pair on: most regulate-phase tactics are breathing of one sort
 * or another.
 *
 * Coverage will never be complete — user-authored tactics arrive unclassified —
 * so the ladder below degrades through weaker axes rather than failing, and
 * records which axis it landed on. A pair built on `"ranking"` looks like a
 * choice without being one, so that value is the signal that catalog coverage
 * is thin, not a normal outcome to ignore.
 */
import { TacticContrastAxis, TacticModality, TacticPhase } from "../schemas";
import { tacticIsTerminal } from "./tacticOrdering";

/**
 * The minimum a tactic has to carry to be paired. Structurally satisfied by
 * `RecommendedTactic` (the denormalised pool on the session) plus the fit
 * fields, so callers pass what they already hold without a second fetch.
 */
export interface PairCandidate {
  tacticId: string;
  title: string;
  description?: string;
  tacticRefPath?: string;
  firstStepText?: string;
  /** One-line rendering of this tactic's per-user understanding. */
  forUser?: string;
  modality?: TacticModality;
  phase?: TacticPhase;
  effort?: "low" | "medium" | "high";
  worksAnywhere?: boolean;
  completionTrigger?: string | null;
  /** True when this tactic is a step of the user's own assigned plan. */
  isPlanStep?: boolean;
}

/**
 * Which property actually separates the two options, strongest first. Shares
 * its definition with the choice log (`tacticContrastAxisSchema`) so what gets
 * persisted and what gets computed cannot drift apart.
 */
export type ContrastAxis = TacticContrastAxis;

export interface TacticPair {
  /** The option offered first: the plan's next step when there is one. */
  anchor: PairCandidate;
  /** The genuinely different one. */
  alternative: PairCandidate;
  contrastAxis: ContrastAxis;
}

export interface SelectTacticPairParams {
  /**
   * Eligible tactics, ranked best-first. Already filtered by scoring —
   * contraindicated, suppressed and presumptuous tactics must not appear here.
   */
  candidates: PairCandidate[];
  /**
   * The plan's next incomplete step, when the session has an assigned plan.
   * Anchors the pair so "their regular go-to, or an alternative" is what the
   * user sees. Ignored when it is excluded or absent from `candidates`.
   */
  anchorTacticId?: string;
  /**
   * Already offered, already completed, or otherwise spent in this session.
   *
   * This is also how "neither of these" reshuffles: call again with both
   * rejected tactics added, and the next pair is fresh by construction. There
   * is no separate reshuffle path, and nothing can hand back a tactic the user
   * has just turned down.
   */
  excludeTacticIds?: string[];
  /**
   * Classified staples, ranked, used only to fill a slot `candidates` cannot:
   * a thin library, a plan down to its last step, or a pool where nothing
   * contrasts. Ranked after every real candidate, so one is reached for only
   * when it beats what the session already had on the ladder.
   */
  fallbackCandidates?: PairCandidate[];
}

/**
 * Pick the two tactics to offer, or null when two cannot be offered.
 *
 * Null never means "only one was available, have that one" — a pool of one is
 * filled from `fallbackCandidates`, because a lone option is the thing this
 * module exists to prevent. It means one of two things, and the caller knows
 * which from its own situation:
 *
 * - On a FIRST offer: nothing is matched to this moment, so nobody yet knows
 *   what it is about. The caller's corrective sends the model back to
 *   understanding it with the user rather than guessing.
 * - On a RESHUFFLE after "neither of these": the pool is spent. Offering a
 *   third pair is not possible and a conversation is worth more than another
 *   guess, so the caller escalates to voice.
 */
export function selectTacticPair(
  params: SelectTacticPairParams,
): TacticPair | null {
  const excluded = new Set(params.excludeTacticIds ?? []);

  // Real candidates first, staples after: within a contrast tier the session's
  // own matched tactics always win, and a staple is reached for only when it
  // clears a tier the session's pool could not.
  const pool = dedupeById(
    [...params.candidates, ...(params.fallbackCandidates ?? [])].filter(
      (candidate) =>
        candidate &&
        typeof candidate.tacticId === "string" &&
        candidate.tacticId.length > 0 &&
        !excluded.has(candidate.tacticId),
    ),
  );

  if (pool.length === 0) return null;

  const anchor = pickAnchor(pool, params.anchorTacticId);
  const remaining = pool.filter((c) => c.tacticId !== anchor.tacticId);

  // A pool of exactly one, with no staple able to fill the second slot. The
  // contract cannot be met, and a single-option "choice" is worse than the
  // corrective, so the caller is told there is nothing to offer.
  if (remaining.length === 0) return null;

  const alternative = pickAlternative(anchor, remaining);

  return {
    anchor,
    alternative: alternative.candidate,
    contrastAxis: alternative.axis,
  };
}

/**
 * The plan's next step anchors the pair when it is still on offer. Otherwise
 * the best-ranked tactic does.
 *
 * One override: a terminal tactic (turn the phone off, which ends the guided
 * session on the next cold start) never anchors while anything else is
 * available. Ending the session is a thing the user should CHOOSE, not the
 * default they have to opt out of.
 */
function pickAnchor(
  pool: PairCandidate[],
  anchorTacticId: string | undefined,
): PairCandidate {
  const requested = anchorTacticId
    ? pool.find((c) => c.tacticId === anchorTacticId)
    : undefined;
  const preferred = requested ?? pool[0];
  if (!tacticIsTerminal(preferred)) return preferred;

  const nonTerminal = pool.find((c) => !tacticIsTerminal(c));
  return nonTerminal ?? preferred;
}

/**
 * The contrast ladder. Each rung is tried across the whole remaining pool
 * before the next is considered, so a genuinely different tactic ranked fifth
 * beats a near-identical one ranked second.
 */
function pickAlternative(
  anchor: PairCandidate,
  remaining: PairCandidate[],
): { candidate: PairCandidate; axis: ContrastAxis } {
  // Two session-ending options are not a choice between two ways through the
  // moment; at most one terminal tactic is ever on offer.
  const eligible = tacticIsTerminal(anchor)
    ? remaining.filter((c) => !tacticIsTerminal(c))
    : remaining;
  const searchable = eligible.length > 0 ? eligible : remaining;

  const byModality =
    anchor.modality &&
    searchable.find((c) => c.modality && c.modality !== anchor.modality);
  if (byModality) return { candidate: byModality, axis: "modality" };

  const byPhase =
    anchor.phase && searchable.find((c) => c.phase && c.phase !== anchor.phase);
  if (byPhase) return { candidate: byPhase, axis: "phase" };

  // Effort and portability are the weakest real differences: "something small
  // you can do right here, or something bigger" is still a choice, just a
  // quieter one than move-versus-reflect.
  const byEffort = searchable.find(
    (c) =>
      (anchor.effort && c.effort && c.effort !== anchor.effort) ||
      (typeof anchor.worksAnywhere === "boolean" &&
        typeof c.worksAnywhere === "boolean" &&
        c.worksAnywhere !== anchor.worksAnywhere),
  );
  if (byEffort) return { candidate: byEffort, axis: "effort" };

  return { candidate: searchable[0], axis: "ranking" };
}

function dedupeById(candidates: PairCandidate[]): PairCandidate[] {
  const seen = new Set<string>();
  const out: PairCandidate[] = [];
  for (const candidate of candidates) {
    if (seen.has(candidate.tacticId)) continue;
    seen.add(candidate.tacticId);
    out.push(candidate);
  }
  return out;
}

/**
 * True when the pair rests on a real difference in kind. A pair that does not
 * is still offered — two options beat one even when they rhyme — but callers
 * that report on choice quality (and the modality backfill that closes the gap)
 * key off this.
 */
export function pairHasRealContrast(pair: TacticPair): boolean {
  return pair.contrastAxis === "modality" || pair.contrastAxis === "phase";
}
