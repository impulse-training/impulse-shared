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
export declare const PINNED_TACTIC_BONUS = 3;
export declare function buildTagGroupLookup(tagGroups: Array<{
    id: string;
    data: TagGroup;
}>): TagGroupLookup;
export declare function scoreTactic(tactic: TacticWithMeta, sessionTags: Record<string, string[]>, recentTacticIds: string[], tacticRatings: Map<string, TacticRatings>, lookup: TagGroupLookup, context?: TacticScoringContext): number | null;
export declare function selectBestTacticsPerPhase(allTactics: TacticWithMeta[], sessionTags: Record<string, string[]>, recentTacticIds: string[], tacticRatings: Map<string, TacticRatings>, lookup: TagGroupLookup, context?: TacticScoringContext): TacticWithMeta[];
/**
 * Returns true if the session has any primary tag groups with values set,
 * or has any behavior IDs assigned. Used to gate plan improvisation —
 * non-primary tags alone (location, moment) should not trigger improvisation.
 */
export declare function sessionHasPrimaryTagsOrBehaviors(sessionTags: Record<string, string[]>, tagGroups: Array<{
    id: string;
    isPrimary?: boolean;
}>, behaviorIds?: string[]): boolean;
