import { z } from "zod";
export declare const taskStatusSchema: z.ZodEnum<["open", "completed", "dismissed"]>;
/**
 * Why a task reached the terminal `dismissed` status, when the distinction
 * matters (currently the reclaimable weekly-review bundle):
 * - `declined` — the user actively said no (tapped "Not this time" on the card).
 * - `ignored`  — auto-closed after being re-presented across the cap (3) recaps
 *   without ever being engaged/resolved. Not the same as a deliberate no; a
 *   coach reading the dashboard should be able to tell "he passed on it" from
 *   "he never actually saw/acted on it".
 */
export declare const dismissedReasonSchema: z.ZodEnum<["ignored", "declined"]>;
export declare const taskCategorySchema: z.ZodEnum<["zara", "deterministic"]>;
export declare const claimableSessionTypeSchema: z.ZodEnum<["recap", "general", "toolkitPlanning"]>;
export declare const taskBaseSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const mergeBehaviorsTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"merge_behaviors">;
    sourceBehaviorIds: z.ZodArray<z.ZodString, "many">;
    targetBehavior: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer", "scale", "occurrence"]>>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    }, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "merge_behaviors";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    sourceBehaviorIds: string[];
    targetBehavior: {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "merge_behaviors";
    userId: string;
    title: string;
    instructions: string;
    sourceBehaviorIds: string[];
    targetBehavior: {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const suggestStrategyTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"suggest_strategy">;
    suggestedStrategy: z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodString;
        operations: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"create_trigger">;
            clientId: z.ZodString;
            trigger: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
                triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
                locationName: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }, {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }, {
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"create_plan">;
            triggerClientId: z.ZodOptional<z.ZodString>;
            existingTriggerId: z.ZodOptional<z.ZodString>;
            existingBehaviorId: z.ZodOptional<z.ZodString>;
            plan: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        url: z.ZodString;
                        title: z.ZodOptional<z.ZodString>;
                        imageUrl: z.ZodOptional<z.ZodString>;
                        domain: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }, {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }, {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }>, "many">>;
                planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
                hour: z.ZodOptional<z.ZodNumber>;
                minute: z.ZodOptional<z.ZodNumber>;
                weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }, {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        }, {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"set_behavior_goal">;
            behaviorId: z.ZodString;
            goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"eliminate">;
            }, "strip", z.ZodTypeAny, {
                type: "eliminate";
            }, {
                type: "eliminate";
            }>, z.ZodObject<{
                type: z.ZodLiteral<"reduceEveryDay">;
                target: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: "reduceEveryDay";
                target: number;
            }, {
                type: "reduceEveryDay";
                target: number;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"reduceIndividualDays">;
                dailyTargets: z.ZodObject<{
                    0: z.ZodNumber;
                    1: z.ZodNumber;
                    2: z.ZodNumber;
                    3: z.ZodNumber;
                    4: z.ZodNumber;
                    5: z.ZodNumber;
                    6: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                }, {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            }, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            }>, z.ZodObject<{
                type: z.ZodLiteral<"contain">;
                allowedWindows: z.ZodArray<z.ZodObject<{
                    dayOfWeek: z.ZodNumber;
                    startTime: z.ZodString;
                    endTime: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }, {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            }, {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            }>]>;
        }, "strip", z.ZodTypeAny, {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        }, {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    }, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    userId: string;
    title: string;
    instructions: string;
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * A coach-prepared proposal to change one behavior's goal (e.g. switch to a
 * contain goal with afternoon-only windows). Lighter than suggest_strategy —
 * no triggers or plans, just the goal. In the weekly review it is claimed and
 * surfaced BEFORE any suggest_strategy tasks, so the goal lands first and the
 * strategy suggestions can build on it. The AI presents it by calling
 * proposeGoalChange, which renders an accept/decline card; accepting sets the
 * goal on the behavior (applied server-side).
 */
export declare const proposeGoalTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"propose_goal">;
    behaviorId: z.ZodString;
    proposedGoal: z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodString;
        goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"eliminate">;
        }, "strip", z.ZodTypeAny, {
            type: "eliminate";
        }, {
            type: "eliminate";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"reduceEveryDay">;
            target: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "reduceEveryDay";
            target: number;
        }, {
            type: "reduceEveryDay";
            target: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"reduceIndividualDays">;
            dailyTargets: z.ZodObject<{
                0: z.ZodNumber;
                1: z.ZodNumber;
                2: z.ZodNumber;
                3: z.ZodNumber;
                4: z.ZodNumber;
                5: z.ZodNumber;
                6: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            }, {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        }, {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"contain">;
            allowedWindows: z.ZodArray<z.ZodObject<{
                dayOfWeek: z.ZodNumber;
                startTime: z.ZodString;
                endTime: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }, {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        }, {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        }>]>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    }, {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_goal";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    proposedGoal: {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_goal";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    proposedGoal: {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const proposedMetricSchema: z.ZodObject<{
    name: z.ZodString;
    /** The three scale labels the metric should use, ordered low → high */
    scaleLabels: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    scaleLabels?: [string, string, string] | undefined;
}, {
    name: string;
    scaleLabels?: [string, string, string] | undefined;
}>;
export declare const proposeExperimentTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"propose_experiment">;
    proposedExperiment: z.ZodObject<{
        behaviorId: z.ZodString;
        metrics: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            /** The three scale labels the metric should use, ordered low → high */
            scaleLabels: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }, {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }>, "many">;
        experimentQuestion: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    }, {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_experiment";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    proposedExperiment: {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_experiment";
    userId: string;
    title: string;
    instructions: string;
    proposedExperiment: {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const proposeMaskBehaviorTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"propose_mask_behavior">;
    behaviorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_mask_behavior";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_mask_behavior";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const createSessionTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"create_session">;
    lazy: z.ZodDefault<z.ZodBoolean>;
    taskIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notification: z.ZodOptional<z.ZodObject<{
        title: z.ZodString;
        body: z.ZodString;
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    }, {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    }>>;
    sessionTemplate: z.ZodOptional<z.ZodObject<{
        title: z.ZodString;
        logs: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            isDisplayable: z.ZodLiteral<true>;
            data: z.ZodRecord<z.ZodString, z.ZodAny>;
            message: z.ZodOptional<z.ZodObject<{
                role: z.ZodEnum<["assistant", "user"]>;
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                role: "user" | "assistant";
                content: string;
            }, {
                role: "user" | "assistant";
                content: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }>, "many">;
        notification: z.ZodOptional<z.ZodObject<{
            title: z.ZodString;
            body: z.ZodString;
            data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        }, {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    }, {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "create_session";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    lazy: boolean;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    sessionTemplate?: {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    } | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    taskIds?: string[] | undefined;
    notification?: {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    } | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "create_session";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    sessionTemplate?: {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    } | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    lazy?: boolean | undefined;
    taskIds?: string[] | undefined;
    notification?: {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    } | undefined;
}>;
export declare const recapQuestionTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    approvalReason: z.ZodOptional<z.ZodString>;
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    homeSubtitle: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"recap_question">;
    recapQuestionId: z.ZodString;
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    ordinal: z.ZodNumber;
    answerSummary: z.ZodOptional<z.ZodString>;
    claimedBySessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "recap_question";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    category: "zara" | "deterministic";
    recapQuestionId: string;
    instructions: string;
    id?: string | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "recap_question";
    userId: string;
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    recapQuestionId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const reviewTriggerTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"review_trigger">;
    impulseSessionId: z.ZodString;
    debriefOutcome: z.ZodEnum<["acted", "resisted"]>;
    suggestedTrigger: z.ZodObject<{
        tags: z.ZodRecord<z.ZodString, z.ZodString>;
        behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    }, {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    }>;
    suggestedPlan: z.ZodObject<{
        name: z.ZodString;
        tacticIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description?: string | undefined;
        }, {
            title: string;
            description?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    }, {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    debriefOutcome: "acted" | "resisted";
    category: "zara" | "deterministic";
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    };
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    userId: string;
    title: string;
    debriefOutcome: "acted" | "resisted";
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    };
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const toolkitPlanningTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"toolkit_planning">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "toolkit_planning";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "toolkit_planning";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const suggestTacticTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"suggest_tactic">;
    suggestions: z.ZodArray<z.ZodObject<{
        theme: z.ZodString;
        guidance: z.ZodOptional<z.ZodString>;
        tacticId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }, {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_tactic";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    suggestions: {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }[];
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_tactic";
    userId: string;
    title: string;
    suggestions: {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }[];
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const reflectOnMetricsTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"reflect_on_metrics">;
    behaviorName: z.ZodString;
    metricIds: z.ZodArray<z.ZodString, "many">;
    metricNames: z.ZodArray<z.ZodString, "many">;
    experimentQuestion: z.ZodString;
    timeWindowDays: z.ZodNumber;
    /**
     * Set when this check-in was triggered by a behavior milestone (e.g. 7 = the
     * 1-week rung). Drives before/after framing in getTaskContext ("you just hit a
     * week — how's X compared to when you started?"). Absent for the baseline
     * check-in created at experiment start.
     */
    milestoneRungDays: z.ZodOptional<z.ZodNumber>;
    /** Human label for the milestone rung (e.g. "1 week"), for prompt wording. */
    milestoneRungLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorName: string;
    experimentQuestion: string;
    metricIds: string[];
    category: "zara" | "deterministic";
    instructions: string;
    metricNames: string[];
    timeWindowDays: number;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    milestoneRungDays?: number | undefined;
    milestoneRungLabel?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    userId: string;
    title: string;
    behaviorName: string;
    experimentQuestion: string;
    metricIds: string[];
    instructions: string;
    metricNames: string[];
    timeWindowDays: number;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    milestoneRungDays?: number | undefined;
    milestoneRungLabel?: string | undefined;
}>;
export declare const collectBaselineTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"collect_baseline">;
    behaviorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "collect_baseline";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "collect_baseline";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * Get to know a behavior created OUTSIDE onboarding (a general chat where the
 * user mentioned something new and agreed to track it). Onboarding earns this
 * understanding in the flow itself; a mid-program createBehavior skips all of
 * that, so this task queues the conversation — when it happens, what it costs
 * them, what it gives them — for a later session. Completed when the AI saves
 * what it learned onto the behavior doc via updateBehaviorUnderstanding (its
 * requiredTool, behaviorId-scoped like other per-behavior task credits).
 */
export declare const understandBehaviorTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"understand_behavior">;
    behaviorId: z.ZodString;
    behaviorName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "understand_behavior";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "understand_behavior";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * Post-lapse containment: created on the impulse session at the moment the
 * user reports they acted on the urge (the session's phase moves to
 * "contain"). The task shifts the session objective from debriefing a closed
 * moment to limiting the blast radius — is it still going, what's left of
 * the day, protect the next vulnerable window. The computed containment
 * brief (Nth lapse today, broken streak, related behaviors, local hour) goes
 * in the base `context` field; completion is credited when the protective
 * check-in is scheduled (requiredTools: ["scheduleCheckIn"]).
 */
export declare const containLapseTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"contain_lapse">;
    behaviorId: z.ZodString;
    behaviorName: z.ZodOptional<z.ZodString>;
    /**
     * first — full flow: assess, protect the window, offer the check-in.
     * standing_plan — a containment plan already exists today: reference it,
     *   ask what broke, adjust; no fresh assessment ceremony.
     * pattern — day ≥2 of a multi-day slip: name the pattern gently, smaller
     *   ask, lean toward the recap/coach surfaces that own multi-day work.
     */
    variant: z.ZodEnum<["first", "standing_plan", "pattern"]>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "contain_lapse";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    variant: "first" | "standing_plan" | "pattern";
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "contain_lapse";
    userId: string;
    title: string;
    behaviorId: string;
    variant: "first" | "standing_plan" | "pattern";
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * The durable user-scoped "set up in-the-moment access" task — the parent of
 * the concrete install steps (setup_back_tap_shortcut / setup_widget). It is
 * generated up front for a new user, claimed into their onboarding session,
 * and — if never completed there — re-claimed by later recaps. Completed only
 * on real proof (an impulse_started log) or superseded by an explicit skip.
 * Rendering is handled by the `setup_shortcut` deterministic handler in
 * impulse-functions. (Renamed from `show_impulse_mode_intro` 2026-07.)
 */
export declare const setupShortcutTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"setup_shortcut">;
    /** Which setup card to show; if absent it is recomputed from behaviors. */
    shortcutType: z.ZodOptional<z.ZodEnum<["back_tap", "lock_screen_widget"]>>;
    /** Marks this as a returning nudge so the card copy can be tailored. */
    returning: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "setup_shortcut";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    shortcutType?: "back_tap" | "lock_screen_widget" | undefined;
    returning?: boolean | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "setup_shortcut";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    shortcutType?: "back_tap" | "lock_screen_widget" | undefined;
    returning?: boolean | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * Durable user-scoped task for a returning user whose scheduled recap
 * reminders are paused (userData recap.paused). Claimed into their next
 * opened recap; the deterministic handler renders a resume_recap_reminders_cta
 * card and hands off to the AI (triggerAIAfter) to introduce it. Responding
 * "resume" clears recap.paused and completes the task; declining completes it
 * too (they can re-enable any time in settings).
 */
export declare const resumeRecapRemindersTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"resume_recap_reminders">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "resume_recap_reminders";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "resume_recap_reminders";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * The weekly review's first beat: reflect on the week just passed as one shape.
 * Injected as a session task on a weekly-mode recap (never user-level), it
 * completes when the AI calls reconcileStrategyProposals (its requiredTool),
 * which is the Phase-1 → Phase-2 (plan review) transition. The week-shape prose
 * is rendered live in getTaskContext, so no data is snapshotted onto the task.
 */
export declare const weekLookbackTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"week_lookback">;
    /** The Sunday review this beat belongs to (the recap dateString). */
    weekOfDateString: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "week_lookback";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    weekOfDateString?: string | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "week_lookback";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    weekOfDateString?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * The weekly review as a claimable token, one per week. Created on the local
 * Sunday (by any recap path that runs that day); the FIRST recap session the
 * user actually engages with on or after that Sunday claims it, and claiming
 * is what makes that session run in weekly mode — so reviewing Saturday on
 * Sunday morning hosts the weekly review, and the 9pm Sunday session then runs
 * as a plain daily. Unclaimed tasks roll forward within the week (a skipped
 * Sunday means Monday's first recap picks it up); a new Sunday retires any
 * older still-open token. Never becomes a session task: claiming stamps
 * claimedBySessionId + completed in one transaction.
 */
export declare const weeklyReviewTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    approvalReason: z.ZodOptional<z.ZodString>;
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    homeSubtitle: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"weekly_review">;
    weekAnchorDateString: z.ZodString;
    claimedBySessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "weekly_review";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    weekAnchorDateString: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "weekly_review";
    userId: string;
    title: string;
    instructions: string;
    weekAnchorDateString: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * The user-authored beat that closes a recap (see userData
 * recap.closingReflection). Injected as a SESSION task, never user-level, and
 * — unlike every other session task — written LAZILY rather than at session
 * creation.
 *
 * The lazy write is load-bearing. getTaskContext renders the lowest-ordinal
 * open `zara` task as an Active Task Override that supersedes the session
 * objective, and a daily recap normally has no open zara task at all. Written
 * up front this beat would be the only one, so it would take over the recap
 * from turn one no matter how high its ordinal. Instead judgeRecapClose writes
 * it at the moment it would otherwise have surfaced "Done for now" — i.e. once
 * the night's real reflection has actually run its course.
 *
 * Completed by the `logClosingReflection` tool, which also records what the
 * user said as a closing_reflection log.
 */
export declare const closingReflectionTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"closing_reflection">;
    /** The user's own question text, handed to the assistant verbatim. */
    prompt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "closing_reflection";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    prompt: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "closing_reflection";
    userId: string;
    title: string;
    prompt: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
/**
 * Which time-shaped variant of the protect_next_window arc runs. Time alters
 * the arc rather than suppressing it — containment is immediate risk
 * management and coexists with the (retrospective) recap:
 * - daytime   — full arc: what they're moving into, resolve the obstacle,
 *               settle a next action.
 * - evening   — the window is the rest of the evening: shape it lightly and
 *               transition toward winding down/sleep.
 * - pre_recap — the nightly recap is imminent: keep it to ONE short exchange
 *               about the next hour; the recap revisits the commitment.
 */
export declare const protectNextWindowVariantSchema: z.ZodEnum<["daytime", "evening", "pre_recap"]>;
/**
 * Resisted-path CONTAINMENT, on impulse sessions. Containment is the support
 * that begins once an urge is acknowledged and continues until the user has
 * safely transitioned into the next part of their day:
 *
 *   Containment
 *   ├── resisted path → protect_next_window (this task)
 *   └── acted path    → contain_lapse
 *
 * Separate task types for now (different entry logic and completion
 * contracts) sharing the same principles: near-term protection, vetted tactic
 * access, check-in scheduling, appetite/fatigue controls, structured outcome
 * logging. The arc: understand what the user is moving into, resolve any
 * immediate obstacle, settle on a manageable next action, optionally protect
 * the window (check-in / break tactic).
 *
 * One task carries the whole arc (the contain_lapse pattern), with the full
 * frame written into `instructions` at injection. Injected lazily by the
 * showCloseButton gate at the moment the model first tries to close a settled
 * resisted debrief — never at session creation, where it would hijack the
 * urge conversation as the Active Task Override from turn one. To the user
 * this is ONE continuous conversation: the debrief is a transition inside
 * containment, never an announced phase change. Completed by the same gate on
 * the NEXT close attempt once the user has engaged (no model-called outcome
 * tool — the outcome/commitment log is extracted from the transcript in the
 * background, see afterSessionTaskWrite); dismissed = the user passed, never
 * re-offered that day.
 */
export declare const protectNextWindowTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"protect_next_window">;
    variant: z.ZodEnum<["daytime", "evening", "pre_recap"]>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "protect_next_window";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    variant: "daytime" | "evening" | "pre_recap";
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "protect_next_window";
    userId: string;
    title: string;
    variant: "daytime" | "evening" | "pre_recap";
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>;
export declare const taskSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"merge_behaviors">;
    sourceBehaviorIds: z.ZodArray<z.ZodString, "many">;
    targetBehavior: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer", "scale", "occurrence"]>>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    }, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "merge_behaviors";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    sourceBehaviorIds: string[];
    targetBehavior: {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "merge_behaviors";
    userId: string;
    title: string;
    instructions: string;
    sourceBehaviorIds: string[];
    targetBehavior: {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | "occurrence" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"suggest_strategy">;
    suggestedStrategy: z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodString;
        operations: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"create_trigger">;
            clientId: z.ZodString;
            trigger: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>>;
                triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
                locationName: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }, {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }, {
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"create_plan">;
            triggerClientId: z.ZodOptional<z.ZodString>;
            existingTriggerId: z.ZodOptional<z.ZodString>;
            existingBehaviorId: z.ZodOptional<z.ZodString>;
            plan: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    title: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        url: z.ZodString;
                        title: z.ZodOptional<z.ZodString>;
                        imageUrl: z.ZodOptional<z.ZodString>;
                        domain: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }, {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }, {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }>, "many">>;
                planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
                hour: z.ZodOptional<z.ZodNumber>;
                minute: z.ZodOptional<z.ZodNumber>;
                weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }, {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        }, {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"set_behavior_goal">;
            behaviorId: z.ZodString;
            goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"eliminate">;
            }, "strip", z.ZodTypeAny, {
                type: "eliminate";
            }, {
                type: "eliminate";
            }>, z.ZodObject<{
                type: z.ZodLiteral<"reduceEveryDay">;
                target: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: "reduceEveryDay";
                target: number;
            }, {
                type: "reduceEveryDay";
                target: number;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"reduceIndividualDays">;
                dailyTargets: z.ZodObject<{
                    0: z.ZodNumber;
                    1: z.ZodNumber;
                    2: z.ZodNumber;
                    3: z.ZodNumber;
                    4: z.ZodNumber;
                    5: z.ZodNumber;
                    6: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                }, {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            }, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            }>, z.ZodObject<{
                type: z.ZodLiteral<"contain">;
                allowedWindows: z.ZodArray<z.ZodObject<{
                    dayOfWeek: z.ZodNumber;
                    startTime: z.ZodString;
                    endTime: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }, {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            }, {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            }>]>;
        }, "strip", z.ZodTypeAny, {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        }, {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    }, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                tags: Record<string, string | string[]>;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                id?: string | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    userId: string;
    title: string;
    instructions: string;
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string | string[]> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                    links?: {
                        url: string;
                        title?: string | undefined;
                        imageUrl?: string | undefined;
                        domain?: string | undefined;
                    }[] | undefined;
                    phase?: "shift" | "regulate" | "reengage" | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
            existingBehaviorId?: string | undefined;
        } | {
            type: "set_behavior_goal";
            behaviorId: string;
            goal: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    1: number;
                    2: number;
                    3: number;
                    5: number;
                    6: number;
                    4: number;
                };
            } | {
                type: "contain";
                allowedWindows: {
                    dayOfWeek: number;
                    startTime: string;
                    endTime: string;
                }[];
            };
        })[];
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"propose_goal">;
    behaviorId: z.ZodString;
    proposedGoal: z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodString;
        goal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"eliminate">;
        }, "strip", z.ZodTypeAny, {
            type: "eliminate";
        }, {
            type: "eliminate";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"reduceEveryDay">;
            target: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "reduceEveryDay";
            target: number;
        }, {
            type: "reduceEveryDay";
            target: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"reduceIndividualDays">;
            dailyTargets: z.ZodObject<{
                0: z.ZodNumber;
                1: z.ZodNumber;
                2: z.ZodNumber;
                3: z.ZodNumber;
                4: z.ZodNumber;
                5: z.ZodNumber;
                6: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            }, {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        }, {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"contain">;
            allowedWindows: z.ZodArray<z.ZodObject<{
                dayOfWeek: z.ZodNumber;
                startTime: z.ZodString;
                endTime: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }, {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        }, {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        }>]>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    }, {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_goal";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    proposedGoal: {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_goal";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    proposedGoal: {
        title: string;
        goal: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                1: number;
                2: number;
                3: number;
                5: number;
                6: number;
                4: number;
            };
        } | {
            type: "contain";
            allowedWindows: {
                dayOfWeek: number;
                startTime: string;
                endTime: string;
            }[];
        };
        summary: string;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"propose_experiment">;
    proposedExperiment: z.ZodObject<{
        behaviorId: z.ZodString;
        metrics: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            /** The three scale labels the metric should use, ordered low → high */
            scaleLabels: z.ZodOptional<z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }, {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }>, "many">;
        experimentQuestion: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    }, {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_experiment";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    proposedExperiment: {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_experiment";
    userId: string;
    title: string;
    instructions: string;
    proposedExperiment: {
        behaviorId: string;
        metrics: {
            name: string;
            scaleLabels?: [string, string, string] | undefined;
        }[];
        experimentQuestion: string;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"propose_mask_behavior">;
    behaviorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_mask_behavior";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_mask_behavior";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"create_session">;
    lazy: z.ZodDefault<z.ZodBoolean>;
    taskIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notification: z.ZodOptional<z.ZodObject<{
        title: z.ZodString;
        body: z.ZodString;
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    }, {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    }>>;
    sessionTemplate: z.ZodOptional<z.ZodObject<{
        title: z.ZodString;
        logs: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            isDisplayable: z.ZodLiteral<true>;
            data: z.ZodRecord<z.ZodString, z.ZodAny>;
            message: z.ZodOptional<z.ZodObject<{
                role: z.ZodEnum<["assistant", "user"]>;
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                role: "user" | "assistant";
                content: string;
            }, {
                role: "user" | "assistant";
                content: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }>, "many">;
        notification: z.ZodOptional<z.ZodObject<{
            title: z.ZodString;
            body: z.ZodString;
            data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        }, {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    }, {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "create_session";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    lazy: boolean;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    sessionTemplate?: {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    } | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    taskIds?: string[] | undefined;
    notification?: {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    } | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "create_session";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    sessionTemplate?: {
        title: string;
        logs: {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                role: "user" | "assistant";
                content: string;
            } | undefined;
        }[];
        notification?: {
            title: string;
            body: string;
            data?: Record<string, any> | undefined;
        } | undefined;
    } | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    lazy?: boolean | undefined;
    taskIds?: string[] | undefined;
    notification?: {
        title: string;
        body: string;
        data?: Record<string, any> | undefined;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    approvalReason: z.ZodOptional<z.ZodString>;
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    homeSubtitle: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"recap_question">;
    recapQuestionId: z.ZodString;
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    ordinal: z.ZodNumber;
    answerSummary: z.ZodOptional<z.ZodString>;
    claimedBySessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "recap_question";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    category: "zara" | "deterministic";
    recapQuestionId: string;
    instructions: string;
    id?: string | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "recap_question";
    userId: string;
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    recapQuestionId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"review_trigger">;
    impulseSessionId: z.ZodString;
    debriefOutcome: z.ZodEnum<["acted", "resisted"]>;
    suggestedTrigger: z.ZodObject<{
        tags: z.ZodRecord<z.ZodString, z.ZodString>;
        behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    }, {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    }>;
    suggestedPlan: z.ZodObject<{
        name: z.ZodString;
        tacticIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        newTactics: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description?: string | undefined;
        }, {
            title: string;
            description?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    }, {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    debriefOutcome: "acted" | "resisted";
    category: "zara" | "deterministic";
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    };
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    userId: string;
    title: string;
    debriefOutcome: "acted" | "resisted";
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    };
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"toolkit_planning">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "toolkit_planning";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "toolkit_planning";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"suggest_tactic">;
    suggestions: z.ZodArray<z.ZodObject<{
        theme: z.ZodString;
        guidance: z.ZodOptional<z.ZodString>;
        tacticId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }, {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_tactic";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    suggestions: {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }[];
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_tactic";
    userId: string;
    title: string;
    suggestions: {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }[];
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"reflect_on_metrics">;
    behaviorName: z.ZodString;
    metricIds: z.ZodArray<z.ZodString, "many">;
    metricNames: z.ZodArray<z.ZodString, "many">;
    experimentQuestion: z.ZodString;
    timeWindowDays: z.ZodNumber;
    /**
     * Set when this check-in was triggered by a behavior milestone (e.g. 7 = the
     * 1-week rung). Drives before/after framing in getTaskContext ("you just hit a
     * week — how's X compared to when you started?"). Absent for the baseline
     * check-in created at experiment start.
     */
    milestoneRungDays: z.ZodOptional<z.ZodNumber>;
    /** Human label for the milestone rung (e.g. "1 week"), for prompt wording. */
    milestoneRungLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorName: string;
    experimentQuestion: string;
    metricIds: string[];
    category: "zara" | "deterministic";
    instructions: string;
    metricNames: string[];
    timeWindowDays: number;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    milestoneRungDays?: number | undefined;
    milestoneRungLabel?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    userId: string;
    title: string;
    behaviorName: string;
    experimentQuestion: string;
    metricIds: string[];
    instructions: string;
    metricNames: string[];
    timeWindowDays: number;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
    milestoneRungDays?: number | undefined;
    milestoneRungLabel?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"collect_baseline">;
    behaviorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "collect_baseline";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "collect_baseline";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"understand_behavior">;
    behaviorId: z.ZodString;
    behaviorName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "understand_behavior";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "understand_behavior";
    userId: string;
    title: string;
    behaviorId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"contain_lapse">;
    behaviorId: z.ZodString;
    behaviorName: z.ZodOptional<z.ZodString>;
    /**
     * first — full flow: assess, protect the window, offer the check-in.
     * standing_plan — a containment plan already exists today: reference it,
     *   ask what broke, adjust; no fresh assessment ceremony.
     * pattern — day ≥2 of a multi-day slip: name the pattern gently, smaller
     *   ask, lean toward the recap/coach surfaces that own multi-day work.
     */
    variant: z.ZodEnum<["first", "standing_plan", "pattern"]>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "contain_lapse";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    behaviorId: string;
    variant: "first" | "standing_plan" | "pattern";
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "contain_lapse";
    userId: string;
    title: string;
    behaviorId: string;
    variant: "first" | "standing_plan" | "pattern";
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    behaviorName?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"setup_shortcut">;
    /** Which setup card to show; if absent it is recomputed from behaviors. */
    shortcutType: z.ZodOptional<z.ZodEnum<["back_tap", "lock_screen_widget"]>>;
    /** Marks this as a returning nudge so the card copy can be tailored. */
    returning: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "setup_shortcut";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    shortcutType?: "back_tap" | "lock_screen_widget" | undefined;
    returning?: boolean | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "setup_shortcut";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    shortcutType?: "back_tap" | "lock_screen_widget" | undefined;
    returning?: boolean | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"resume_recap_reminders">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "resume_recap_reminders";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "resume_recap_reminders";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"week_lookback">;
    /** The Sunday review this beat belongs to (the recap dateString). */
    weekOfDateString: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "week_lookback";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    weekOfDateString?: string | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "week_lookback";
    userId: string;
    title: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    weekOfDateString?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    approvalReason: z.ZodOptional<z.ZodString>;
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    homeSubtitle: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"weekly_review">;
    weekAnchorDateString: z.ZodString;
    claimedBySessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "weekly_review";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    category: "zara" | "deterministic";
    instructions: string;
    weekAnchorDateString: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "weekly_review";
    userId: string;
    title: string;
    instructions: string;
    weekAnchorDateString: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"closing_reflection">;
    /** The user's own question text, handed to the assistant verbatim. */
    prompt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "closing_reflection";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    prompt: string;
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "closing_reflection";
    userId: string;
    title: string;
    prompt: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    category: z.ZodDefault<z.ZodEnum<["zara", "deterministic"]>>;
    status: z.ZodDefault<z.ZodEnum<["open", "completed", "dismissed"]>>;
    title: z.ZodString;
    instructions: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    minAppVersion: z.ZodOptional<z.ZodString>;
    requiredTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Tools to inject for this task WITHOUT a completion contract: getTaskTools
     * exposes them alongside requiredTools, but creditCalledTools never counts
     * them, so calling every one of them does not complete the task. For arcs
     * whose completion is decided elsewhere (e.g. protect_next_window completes
     * via the showCloseButton gate) but that still need optional in-arc tools.
     */
    optionalTools: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    /**
     * How many recap sessions have surfaced this task. Set to 1 on first claim
     * and incremented each time a fresh recap reclaims it off an earlier,
     * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
     * after being presented across the cap number of recaps without resolution,
     * the task is auto-closed (dismissed / `ignored`) instead of following the
     * user forever. Absent on older tasks — treat missing as 1.
     */
    presentationCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
    dismissedReason: z.ZodOptional<z.ZodEnum<["ignored", "declined"]>>;
    /**
     * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
     * means "awaiting coach review" and no claim path may present the task to
     * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
     * Other task types are auto-approved by not being in that set, so they
     * never carry these fields.
     */
    approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Why the coach approved it — recorded alongside `approvedAt`. */
    approvalReason: z.ZodOptional<z.ZodString>;
    /**
     * Opt-in: surface this open user-level task as a card on the native home
     * screen (below the experiment card). Tapping the card calls
     * POST app/sessions/ensureTask, which claims the task into a dedicated
     * `task_<taskId>` session. Set per task at creation — most task types stay
     * recap/session-claimed only.
     */
    showOnHome: z.ZodOptional<z.ZodBoolean>;
    /** Card subtitle when shown on home; the card falls back to generic copy. */
    homeSubtitle: z.ZodOptional<z.ZodString>;
    /**
     * Session currently working this task. Recap claiming and the ensureTask
     * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
     * id), on any claimable task type — base-level, though a couple of
     * variants re-declare it from before it lived here.
     */
    claimedBySessionId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"protect_next_window">;
    variant: z.ZodEnum<["daytime", "evening", "pre_recap"]>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "protect_next_window";
    status: "completed" | "dismissed" | "open";
    userId: string;
    title: string;
    variant: "daytime" | "evening" | "pre_recap";
    category: "zara" | "deterministic";
    instructions: string;
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "protect_next_window";
    userId: string;
    title: string;
    variant: "daytime" | "evening" | "pre_recap";
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    category?: "zara" | "deterministic" | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    optionalTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    presentationCount?: number | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    dismissedReason?: "declined" | "ignored" | undefined;
    approvedAt?: import("../types").Timestamp | undefined;
    approvalReason?: string | undefined;
    showOnHome?: boolean | undefined;
    homeSubtitle?: string | undefined;
    claimedBySessionId?: string | undefined;
}>]>;
export type TaskCategory = z.infer<typeof taskCategorySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type DismissedReason = z.infer<typeof dismissedReasonSchema>;
export type ClaimableSessionType = z.infer<typeof claimableSessionTypeSchema>;
export type MergeBehaviorsTask = z.infer<typeof mergeBehaviorsTaskSchema>;
export type SuggestStrategyTask = z.infer<typeof suggestStrategyTaskSchema>;
export type ProposeGoalTask = z.infer<typeof proposeGoalTaskSchema>;
export type ProposeExperimentTask = z.infer<typeof proposeExperimentTaskSchema>;
export type ProposeMaskBehaviorTask = z.infer<typeof proposeMaskBehaviorTaskSchema>;
export type CreateSessionTask = z.infer<typeof createSessionTaskSchema>;
export type RecapQuestionTask = z.infer<typeof recapQuestionTaskSchema>;
export type ReviewTriggerTask = z.infer<typeof reviewTriggerTaskSchema>;
export type ToolkitPlanningTask = z.infer<typeof toolkitPlanningTaskSchema>;
export type SuggestTacticTask = z.infer<typeof suggestTacticTaskSchema>;
export type ReflectOnMetricsTask = z.infer<typeof reflectOnMetricsTaskSchema>;
export type CollectBaselineTask = z.infer<typeof collectBaselineTaskSchema>;
export type UnderstandBehaviorTask = z.infer<typeof understandBehaviorTaskSchema>;
export type ContainLapseTask = z.infer<typeof containLapseTaskSchema>;
export type SetupShortcutTask = z.infer<typeof setupShortcutTaskSchema>;
export type ResumeRecapRemindersTask = z.infer<typeof resumeRecapRemindersTaskSchema>;
export type WeekLookbackTask = z.infer<typeof weekLookbackTaskSchema>;
export type WeeklyReviewTask = z.infer<typeof weeklyReviewTaskSchema>;
export type ClosingReflectionTask = z.infer<typeof closingReflectionTaskSchema>;
export type ProtectNextWindowVariant = z.infer<typeof protectNextWindowVariantSchema>;
export type ProtectNextWindowTask = z.infer<typeof protectNextWindowTaskSchema>;
export type Task = z.infer<typeof taskSchema>;
/**
 * Task types that must NEVER reach the user without a human (coach) sign-off.
 * System code may still create these tasks, but every claim path skips them
 * until a coach sets `approvedAt` (from the dashboard). review_trigger is here
 * because auto-raised "common trigger" patterns (e.g. tagging "Walking" as a
 * trigger) need a human sanity check before the AI proposes formalizing them.
 */
export declare const TASK_TYPES_REQUIRING_APPROVAL: ReadonlySet<string>;
/**
 * True when a task must be held back from claiming because it still needs
 * coach approval. Takes raw doc data (claim paths work with untyped
 * snapshots); tasks of types outside TASK_TYPES_REQUIRING_APPROVAL are
 * implicitly auto-approved. Legacy docs of a gated type predate `approvedAt`
 * and are treated as awaiting approval — they were never human-reviewed.
 */
export declare const isTaskAwaitingApproval: (task: {
    type?: unknown;
    approvedAt?: unknown;
}) => boolean;
export declare const isTask: (value: unknown) => value is Task;
export declare const isMergeBehaviorsTask: (value: unknown) => value is MergeBehaviorsTask;
export declare const isSuggestStrategyTask: (value: unknown) => value is SuggestStrategyTask;
export declare const isProposeGoalTask: (value: unknown) => value is ProposeGoalTask;
export declare const isProposeExperimentTask: (value: unknown) => value is ProposeExperimentTask;
export declare const isProposeMaskBehaviorTask: (value: unknown) => value is ProposeMaskBehaviorTask;
export declare const isRecapQuestionTask: (value: unknown) => value is RecapQuestionTask;
export declare const isReviewTriggerTask: (value: unknown) => value is ReviewTriggerTask;
export declare const isToolkitPlanningTask: (value: unknown) => value is ToolkitPlanningTask;
export declare const isSuggestTacticTask: (value: unknown) => value is SuggestTacticTask;
export declare const isReflectOnMetricsTask: (value: unknown) => value is ReflectOnMetricsTask;
export declare const isSetupShortcutTask: (value: unknown) => value is SetupShortcutTask;
