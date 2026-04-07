import { Plan, TagGroup, Tactic, TacticPhase } from "../schemas";
import {
  TagGroupLookup,
  TacticRatings,
  TacticWithMeta,
  scoreTactic,
} from "./tacticScoring";

export type PlanWithMeta = Plan & {
  id: string;
  path: string;
};

export interface RankedPlanCandidate {
  plan: PlanWithMeta;
  planAffinityScore: number;
  nextTacticScore: number | null;
  totalScore: number;
  nextTacticId?: string;
  nextTacticPath?: string;
  sourceKind: "trigger" | "user" | "shared";
}

type UnknownRecord = Record<string, unknown>;

function normalizeText(value: string): string {
  return value.trim().toLowerCase();
}

function getDocPath(value: unknown): string | null {
  if (!value || typeof value !== "object") return null;
  const record = value as UnknownRecord;
  return typeof record.path === "string" ? record.path : null;
}

function getLegacyTagWeightScore(
  plan: Plan,
  sessionTags: Record<string, string[]>,
): number {
  if (!plan.tags) return 0;

  let score = 0;
  for (const [groupId, optionIds] of Object.entries(sessionTags)) {
    const groupWeights = plan.tags[groupId];
    if (!groupWeights) continue;

    for (const optionId of optionIds) {
      if (typeof groupWeights[optionId] === "number") {
        score += groupWeights[optionId];
      }
    }
  }

  return score;
}

function indicationMatchesSession(
  indication: { tagGroupName: string; optionLabels: string[]; weight: number },
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

export function scorePlanAffinity(
  plan: Plan,
  sessionTags: Record<string, string[]>,
  lookup: TagGroupLookup,
  sessionBehaviorNames: string[],
): number {
  let score = getLegacyTagWeightScore(plan, sessionTags);

  if (plan.indications?.tags) {
    for (const indication of plan.indications.tags) {
      if (indicationMatchesSession(indication, sessionTags, lookup)) {
        score += indication.weight;
      }
    }
  }

  if (
    Array.isArray(plan.indications?.behaviorTemplateNames) &&
    plan.indications.behaviorTemplateNames.length > 0 &&
    sessionBehaviorNames.length > 0
  ) {
    const sessionNames = new Set(sessionBehaviorNames.map(normalizeText));
    for (const behaviorName of plan.indications.behaviorTemplateNames) {
      if (sessionNames.has(normalizeText(behaviorName))) {
        score += 3;
      }
    }
  }

  return score;
}

function getTacticWithMetaFromPlan(
  plan: PlanWithMeta,
  path: string | null,
): TacticWithMeta | null {
  if (!path || !plan.tacticsByPath) return null;

  const tactic = plan.tacticsByPath[path];
  if (!tactic || typeof tactic !== "object") return null;

  const data = tactic as UnknownRecord;
  const id = typeof data.id === "string" ? data.id : null;
  if (!id) return null;

  return {
    ...(tactic as Tactic),
    id,
    path,
  };
}

function sourceBonus(sourceKind: RankedPlanCandidate["sourceKind"]): number {
  if (sourceKind === "trigger") return 10;
  if (sourceKind === "user") return 4;
  return 0;
}

/**
 * Bonus for shared plans based on cross-user effectiveness evidence.
 * Returns 0–6 points, gated by sample size (confidence) and resist rate.
 * At 20+ uses with 80% resist rate → 4.8 (competitive with user plan bonus of 4).
 */
function crossUserEvidenceBonus(plan: Plan): number {
  const uses = plan.numberOfUses ?? 0;
  const successes = plan.numberOfSuccesses ?? 0;
  if (uses === 0) return 0;

  const resistRate = successes / uses;
  const confidence = Math.min(uses / 20, 1);
  return resistRate * confidence * 6;
}

export function rankPlansForNextTactic(params: {
  candidates: Array<{ plan: PlanWithMeta; sourceKind: RankedPlanCandidate["sourceKind"] }>;
  sessionTags: Record<string, string[]>;
  recentTacticIds: string[];
  tacticRatings: Map<string, TacticRatings>;
  lookup: TagGroupLookup;
  sessionBehaviorNames: string[];
}): RankedPlanCandidate[] {
  const {
    candidates,
    sessionTags,
    recentTacticIds,
    tacticRatings,
    lookup,
    sessionBehaviorNames,
  } = params;

  const ranked: RankedPlanCandidate[] = [];

  for (const candidate of candidates) {
    const plan = candidate.plan;
    const affinityScore = scorePlanAffinity(
      plan,
      sessionTags,
      lookup,
      sessionBehaviorNames,
    );

    const tacticRefs = Array.isArray(plan.tactics) ? plan.tactics : [];
    let bestTactic: { score: number; tactic: TacticWithMeta } | null = null;

    for (const tacticRef of tacticRefs) {
      const tacticPath = getDocPath(tacticRef);
      const tactic = getTacticWithMetaFromPlan(plan, tacticPath);
      if (!tactic) continue;

      const tacticScore = scoreTactic(
        tactic,
        sessionTags,
        recentTacticIds,
        tacticRatings,
        lookup,
      );
      if (tacticScore === null) continue;

      // Earlier tactics get a small premium so we respect plan order while still
      // allowing reviews/recency to demote a poor fit.
      const orderedScore =
        tacticScore + Math.max(0, 1 - tacticRefs.indexOf(tacticRef) * 0.35);

      if (!bestTactic || orderedScore > bestTactic.score) {
        bestTactic = { score: orderedScore, tactic };
      }
    }

    const nextTacticScore = bestTactic?.score ?? null;
    const evidenceBonus =
      candidate.sourceKind === "shared" ? crossUserEvidenceBonus(plan) : 0;
    const totalScore =
      affinityScore * 2 +
      (nextTacticScore ?? -1) +
      sourceBonus(candidate.sourceKind) +
      evidenceBonus;

    ranked.push({
      plan,
      planAffinityScore: affinityScore,
      nextTacticScore,
      totalScore,
      nextTacticId: bestTactic?.tactic.id,
      nextTacticPath: bestTactic?.tactic.path,
      sourceKind: candidate.sourceKind,
    });
  }

  ranked.sort((a, b) => {
    if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
    if (b.planAffinityScore !== a.planAffinityScore) {
      return b.planAffinityScore - a.planAffinityScore;
    }
    const aOrdinal = typeof a.plan.ordinal === "number" ? a.plan.ordinal : 999;
    const bOrdinal = typeof b.plan.ordinal === "number" ? b.plan.ordinal : 999;
    return aOrdinal - bOrdinal;
  });

  return ranked;
}

export function buildPlanTagGroupLookup(
  tagGroups: Array<{ id: string; data: TagGroup }>,
): TagGroupLookup {
  const byName = new Map<
    string,
    { groupId: string; options: Map<string, string> }
  >();

  for (const { id, data } of tagGroups) {
    const optionsMap = new Map<string, string>();
    for (const option of data.options) {
      optionsMap.set(option.label.toLowerCase(), option.id);
    }
    byName.set(data.name.toLowerCase(), { groupId: id, options: optionsMap });
  }

  return { byName };
}

export function summarizePlanPhase(plan: Plan): TacticPhase | undefined {
  const tacticsByPath = plan.tacticsByPath ?? {};
  for (const tactic of Object.values(tacticsByPath)) {
    if (
      tactic &&
      typeof tactic === "object" &&
      typeof (tactic as { phase?: unknown }).phase === "string"
    ) {
      return (tactic as { phase: TacticPhase }).phase;
    }
  }

  return undefined;
}
