import { TagGroup, Tactic } from "../schemas";
export interface TacticWithMeta extends Tactic {
    id: string;
    path: string;
}
export interface TagGroupLookup {
    /** Map from lowercase group name -> { groupId, options: Map<lowercaseLabel, optionId> } */
    byName: Map<string, {
        groupId: string;
        options: Map<string, string>;
    }>;
}
export interface TacticRatings {
    helpful: number;
    notHelpful: number;
}
export declare function buildTagGroupLookup(tagGroups: Array<{
    id: string;
    data: TagGroup;
}>): TagGroupLookup;
export declare function scoreTactic(tactic: TacticWithMeta, sessionTags: Record<string, string[]>, recentTacticIds: string[], tacticRatings: Map<string, TacticRatings>, lookup: TagGroupLookup): number | null;
export declare function selectBestTacticsPerPhase(allTactics: TacticWithMeta[], sessionTags: Record<string, string[]>, recentTacticIds: string[], tacticRatings: Map<string, TacticRatings>, lookup: TagGroupLookup): TacticWithMeta[];
/**
 * Returns true if the session has any primary tag groups with values set,
 * or has any behavior IDs assigned. Used to gate plan improvisation —
 * non-primary tags alone (location, moment) should not trigger improvisation.
 */
export declare function sessionHasPrimaryTagsOrBehaviors(sessionTags: Record<string, string[]>, tagGroups: Array<{
    id: string;
    isPrimary?: boolean;
}>, behaviorIds?: string[]): boolean;
