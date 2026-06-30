import { Plan, TagGroup, TacticPhase } from "../schemas";
import { TagGroupLookup, TacticRatings, TacticScoringContext } from "./tacticScoring";
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
    /**
     * Plan tactic paths that survived scoring (not contraindicated/suppressed),
     * ordered best-first. Consumers should surface only these — a tactic excluded
     * by a contraindication or a pin/suppress control must not be shown even if it
     * is listed on the plan.
     */
    eligibleTacticPaths: string[];
    sourceKind: "trigger" | "user" | "shared";
}
export declare function scorePlanAffinity(plan: Plan, sessionTags: Record<string, string[]>, lookup: TagGroupLookup, sessionBehaviorNames: string[]): number;
export declare function rankPlansForNextTactic(params: {
    candidates: Array<{
        plan: PlanWithMeta;
        sourceKind: RankedPlanCandidate["sourceKind"];
    }>;
    sessionTags: Record<string, string[]>;
    recentTacticIds: string[];
    tacticRatings: Map<string, TacticRatings>;
    lookup: TagGroupLookup;
    sessionBehaviorNames: string[];
    /** Behavior/topic fit + pin/suppress controls applied per tactic. */
    scoringContext?: TacticScoringContext;
}): RankedPlanCandidate[];
export declare function buildPlanTagGroupLookup(tagGroups: Array<{
    id: string;
    data: TagGroup;
}>): TagGroupLookup;
export declare function summarizePlanPhase(plan: Plan): TacticPhase | undefined;
