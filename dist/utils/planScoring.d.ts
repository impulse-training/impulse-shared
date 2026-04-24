import { Plan, TagGroup, TacticPhase } from "../schemas";
import { TagGroupLookup, TacticRatings } from "./tacticScoring";
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
}): RankedPlanCandidate[];
export declare function buildPlanTagGroupLookup(tagGroups: Array<{
    id: string;
    data: TagGroup;
}>): TagGroupLookup;
export declare function summarizePlanPhase(plan: Plan): TacticPhase | undefined;
