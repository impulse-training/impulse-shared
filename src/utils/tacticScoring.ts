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

/**
 * Per-session controls layered on top of tag/rating scoring. Carries the
 * human-oversight and behavior-fit signals: which behaviors/topics the session
 * is about, plus pinned (boost) and suppressed (hard-exclude) tactic IDs
 * gathered from behavior- and user-level preferences.
 */
export interface TacticScoringContext {
  behaviorIds?: string[];
  behaviorTopicIds?: string[];
  pinnedTacticIds?: string[];
  suppressedTacticIds?: string[];
}

/** Ranking boost applied to a pinned tactic. Large enough to clear a tactic's
 * recency penalty, small enough that a strong tag/topic match still competes. */
export const PINNED_TACTIC_BONUS = 3;

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
  context: TacticScoringContext = {},
): number | null {
  const {
    behaviorIds,
    behaviorTopicIds,
    pinnedTacticIds,
    suppressedTacticIds,
  } = context;

  // 1. Hard exclude: user/behavior suppression (human oversight)
  if (suppressedTacticIds?.includes(tactic.id)) {
    return null; // EXCLUDED
  }

  // 2. Hard exclude: tag contraindications
  if (tactic.contraindications?.tags) {
    for (const contra of tactic.contraindications.tags) {
      if (tagIndicationMatchesSession(contra, sessionTags, lookup)) {
        return null; // EXCLUDED
      }
    }
  }

  // 3. Hard exclude: behavior-topic contraindications (e.g. anxiety
  //    down-regulators are a poor fit for arousal-driven sexual urges)
  if (tactic.contraindications?.behaviorTopics && behaviorTopicIds?.length) {
    for (const contra of tactic.contraindications.behaviorTopics) {
      if (behaviorTopicIds.includes(contra.behaviorTopicId)) {
        return null; // EXCLUDED
      }
    }
  }

  // 4. Base score
  let score = 1;

  // 5. Behavior indication boost
  if (tactic.indications?.behaviors && behaviorIds?.length) {
    for (const indication of tactic.indications.behaviors) {
      if (behaviorIds.includes(indication.behaviorId)) {
        score += indication.weight;
      }
    }
  }

  // 6. Behavior-topic indication boost
  if (tactic.indications?.behaviorTopics && behaviorTopicIds?.length) {
    for (const indication of tactic.indications.behaviorTopics) {
      if (behaviorTopicIds.includes(indication.behaviorTopicId)) {
        score += indication.weight;
      }
    }
  }

  // 7. Tag indication boost
  if (tactic.indications?.tags) {
    for (const indication of tactic.indications.tags) {
      if (tagIndicationMatchesSession(indication, sessionTags, lookup)) {
        score += indication.weight;
      }
    }
  }

  // 8. Pinned-tactic boost (human oversight)
  if (pinnedTacticIds?.includes(tactic.id)) {
    score += PINNED_TACTIC_BONUS;
  }

  // 9. Recency penalty -- most recent 3 completed tactics are penalized
  const recencyIndex = recentTacticIds.indexOf(tactic.id);
  if (recencyIndex !== -1 && recencyIndex < 3) {
    score -= 3 - recencyIndex; // -3, -2, -1
  }

  // 10. User rating boost
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
  context: TacticScoringContext = {},
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
        context,
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
