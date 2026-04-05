import { TagGroup, Tactic, TacticPhase } from "../schemas";

// ── Types ────────────────────────────────────────────────────────────────────

export interface TacticWithMeta extends Tactic {
  id: string;
  path: string;
}

export interface TagGroupLookup {
  /** Map from lowercase group name -> { groupId, options: Map<lowercaseLabel, optionId> } */
  byName: Map<
    string,
    { groupId: string; options: Map<string, string> }
  >;
}

export interface TacticRatings {
  helpful: number;
  notHelpful: number;
}

// ── Tag group lookup builder ─────────────────────────────────────────────────

export function buildTagGroupLookup(
  tagGroups: Array<{ id: string; data: TagGroup }>,
): TagGroupLookup {
  const byName = new Map<
    string,
    { groupId: string; options: Map<string, string> }
  >();

  for (const { id, data } of tagGroups) {
    const optionsMap = new Map<string, string>();
    for (const opt of data.options) {
      optionsMap.set(opt.label.toLowerCase(), opt.id);
    }
    byName.set(data.name.toLowerCase(), { groupId: id, options: optionsMap });
  }

  return { byName };
}

// ── Resolve tag indication to session tag keys ───────────────────────────────

function tagIndicationMatchesSession(
  indication: { tagGroupName: string; optionLabels: string[] },
  sessionTags: Record<string, string[]>,
  lookup: TagGroupLookup,
): boolean {
  const groupEntry = lookup.byName.get(indication.tagGroupName.toLowerCase());
  if (!groupEntry) return false;

  const sessionValues = sessionTags[groupEntry.groupId];
  if (!sessionValues || sessionValues.length === 0) return false;

  for (const label of indication.optionLabels) {
    const optionId = groupEntry.options.get(label.toLowerCase());
    if (optionId && sessionValues.includes(optionId)) {
      return true;
    }
  }

  return false;
}

// ── Score a single tactic ────────────────────────────────────────────────────

export function scoreTactic(
  tactic: TacticWithMeta,
  sessionTags: Record<string, string[]>,
  recentTacticIds: string[],
  tacticRatings: Map<string, TacticRatings>,
  lookup: TagGroupLookup,
): number | null {
  // 1. Hard exclude: tag contraindications
  if (tactic.contraindications?.tags) {
    for (const contra of tactic.contraindications.tags) {
      if (tagIndicationMatchesSession(contra, sessionTags, lookup)) {
        return null; // EXCLUDED
      }
    }
  }

  // 2. Base score
  let score = 1;

  // 3. Tag indication boost
  if (tactic.indications?.tags) {
    for (const indication of tactic.indications.tags) {
      if (tagIndicationMatchesSession(indication, sessionTags, lookup)) {
        score += indication.weight;
      }
    }
  }

  // 4. Recency penalty -- most recent 3 completed tactics are penalized
  const recencyIndex = recentTacticIds.indexOf(tactic.id);
  if (recencyIndex !== -1 && recencyIndex < 3) {
    score -= 3 - recencyIndex; // -3, -2, -1
  }

  // 5. User rating boost
  const ratings = tacticRatings.get(tactic.id);
  if (ratings) {
    const total = ratings.helpful + ratings.notHelpful;
    if (total > 0) {
      const helpfulRatio = ratings.helpful / total;
      const confidence = Math.min(total / 5, 1);
      // Range: roughly -2 to +2
      score += (helpfulRatio * 2 - 1) * confidence * 2;
    }
  }

  return score;
}

// ── Select best tactic per phase ─────────────────────────────────────────────

export function selectBestTacticsPerPhase(
  allTactics: TacticWithMeta[],
  sessionTags: Record<string, string[]>,
  recentTacticIds: string[],
  tacticRatings: Map<string, TacticRatings>,
  lookup: TagGroupLookup,
): TacticWithMeta[] {
  const phases: TacticPhase[] = ["regulate", "shift", "reengage"];
  const selected: TacticWithMeta[] = [];

  for (const phase of phases) {
    const phaseTactics = allTactics.filter((t) => t.phase === phase);
    let best: { tactic: TacticWithMeta; score: number } | null = null;

    for (const tactic of phaseTactics) {
      const score = scoreTactic(
        tactic,
        sessionTags,
        recentTacticIds,
        tacticRatings,
        lookup,
      );
      if (score === null) continue;
      if (!best || score > best.score) {
        best = { tactic, score };
      }
    }

    if (best) {
      selected.push(best.tactic);
    }
  }

  return selected;
}

// ── Check if session has primary tags or behaviors ───────────────────────────

/**
 * Returns true if the session has any primary tag groups with values set,
 * or has any behavior IDs assigned. Used to gate plan improvisation —
 * non-primary tags alone (location, moment) should not trigger improvisation.
 */
export function sessionHasPrimaryTagsOrBehaviors(
  sessionTags: Record<string, string[]>,
  tagGroups: Array<{ id: string; isPrimary?: boolean }>,
  behaviorIds?: string[],
): boolean {
  if (behaviorIds && behaviorIds.length > 0) return true;

  for (const group of tagGroups) {
    if (group.isPrimary && sessionTags[group.id]?.length > 0) {
      return true;
    }
  }

  return false;
}
