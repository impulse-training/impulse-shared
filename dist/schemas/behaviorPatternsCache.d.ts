import { z } from "zod";
declare const tagFrequencyRowSchema: z.ZodObject<{
    tag_group_name: z.ZodString;
    option_label: z.ZodString;
    session_count: z.ZodNumber;
    pct_of_sessions: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tag_group_name: string;
    option_label: string;
    session_count: number;
    pct_of_sessions: number;
}, {
    tag_group_name: string;
    option_label: string;
    session_count: number;
    pct_of_sessions: number;
}>;
declare const outcomeByTagRowSchema: z.ZodObject<{
    tag_group_name: z.ZodString;
    option_label: z.ZodString;
    total_sessions: z.ZodNumber;
    acted_sessions: z.ZodNumber;
    resisted_sessions: z.ZodNumber;
    win_rate: z.ZodNumber;
    struggle_rate: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tag_group_name: string;
    option_label: string;
    total_sessions: number;
    acted_sessions: number;
    resisted_sessions: number;
    win_rate: number;
    struggle_rate: number;
}, {
    tag_group_name: string;
    option_label: string;
    total_sessions: number;
    acted_sessions: number;
    resisted_sessions: number;
    win_rate: number;
    struggle_rate: number;
}>;
declare const tagCombinationRowSchema: z.ZodObject<{
    tag_combination: z.ZodString;
    session_count: z.ZodNumber;
    win_rate: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    session_count: number;
    win_rate: number;
    tag_combination: string;
}, {
    session_count: number;
    win_rate: number;
    tag_combination: string;
}>;
declare const tagDrilldownRowSchema: z.ZodObject<{
    tag_group_id: z.ZodString;
    tag_group_name: z.ZodString;
    option_id: z.ZodString;
    option_label: z.ZodString;
    session_count: z.ZodNumber;
    win_rate: z.ZodNumber;
    cross_tags: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tag_group_name: string;
    option_label: string;
    session_count: number;
    win_rate: number;
    tag_group_id: string;
    option_id: string;
    cross_tags: string;
}, {
    tag_group_name: string;
    option_label: string;
    session_count: number;
    win_rate: number;
    tag_group_id: string;
    option_id: string;
    cross_tags: string;
}>;
/**
 * Cached behavior pattern analytics data.
 * Collection: users/{userId}/behaviorPatternsCache/{behaviorId}
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and refreshes from BigQuery when the cache is stale.
 */
export declare const behaviorPatternsCacheSchema: z.ZodObject<{
    tagFrequency: z.ZodArray<z.ZodObject<{
        tag_group_name: z.ZodString;
        option_label: z.ZodString;
        session_count: z.ZodNumber;
        pct_of_sessions: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        pct_of_sessions: number;
    }, {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        pct_of_sessions: number;
    }>, "many">;
    struggles: z.ZodArray<z.ZodObject<{
        tag_group_name: z.ZodString;
        option_label: z.ZodString;
        total_sessions: z.ZodNumber;
        acted_sessions: z.ZodNumber;
        resisted_sessions: z.ZodNumber;
        win_rate: z.ZodNumber;
        struggle_rate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }, {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }>, "many">;
    strengths: z.ZodArray<z.ZodObject<{
        tag_group_name: z.ZodString;
        option_label: z.ZodString;
        total_sessions: z.ZodNumber;
        acted_sessions: z.ZodNumber;
        resisted_sessions: z.ZodNumber;
        win_rate: z.ZodNumber;
        struggle_rate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }, {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }>, "many">;
    combinations: z.ZodArray<z.ZodObject<{
        tag_combination: z.ZodString;
        session_count: z.ZodNumber;
        win_rate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        session_count: number;
        win_rate: number;
        tag_combination: string;
    }, {
        session_count: number;
        win_rate: number;
        tag_combination: string;
    }>, "many">;
    drilldown: z.ZodArray<z.ZodObject<{
        tag_group_id: z.ZodString;
        tag_group_name: z.ZodString;
        option_id: z.ZodString;
        option_label: z.ZodString;
        session_count: z.ZodNumber;
        win_rate: z.ZodNumber;
        cross_tags: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        win_rate: number;
        tag_group_id: string;
        option_id: string;
        cross_tags: string;
    }, {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        win_rate: number;
        tag_group_id: string;
        option_id: string;
        cross_tags: string;
    }>, "many">;
    totalSessions: z.ZodNumber;
    /** Set by the frontend each time the screen is viewed */
    requestedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    /** Set by the backend after a successful BigQuery refresh */
    fetchedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set by the backend if the last refresh attempt failed; cleared on success */
    lastError: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        message: z.ZodString;
        occurredAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        occurredAt: import("../types").Timestamp;
    }, {
        message: string;
        occurredAt: import("../types").Timestamp;
    }>>>;
}, "strip", z.ZodTypeAny, {
    requestedAt: import("../types").Timestamp;
    tagFrequency: {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        pct_of_sessions: number;
    }[];
    struggles: {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }[];
    strengths: {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }[];
    combinations: {
        session_count: number;
        win_rate: number;
        tag_combination: string;
    }[];
    drilldown: {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        win_rate: number;
        tag_group_id: string;
        option_id: string;
        cross_tags: string;
    }[];
    totalSessions: number;
    fetchedAt?: import("../types").Timestamp | undefined;
    lastError?: {
        message: string;
        occurredAt: import("../types").Timestamp;
    } | null | undefined;
}, {
    requestedAt: import("../types").Timestamp;
    tagFrequency: {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        pct_of_sessions: number;
    }[];
    struggles: {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }[];
    strengths: {
        tag_group_name: string;
        option_label: string;
        total_sessions: number;
        acted_sessions: number;
        resisted_sessions: number;
        win_rate: number;
        struggle_rate: number;
    }[];
    combinations: {
        session_count: number;
        win_rate: number;
        tag_combination: string;
    }[];
    drilldown: {
        tag_group_name: string;
        option_label: string;
        session_count: number;
        win_rate: number;
        tag_group_id: string;
        option_id: string;
        cross_tags: string;
    }[];
    totalSessions: number;
    fetchedAt?: import("../types").Timestamp | undefined;
    lastError?: {
        message: string;
        occurredAt: import("../types").Timestamp;
    } | null | undefined;
}>;
export type BehaviorPatternsCache = z.infer<typeof behaviorPatternsCacheSchema>;
export type TagFrequencyRow = z.infer<typeof tagFrequencyRowSchema>;
export type OutcomeByTagRow = z.infer<typeof outcomeByTagRowSchema>;
export type TagCombinationRow = z.infer<typeof tagCombinationRowSchema>;
export type TagDrilldownRow = z.infer<typeof tagDrilldownRowSchema>;
export {};
