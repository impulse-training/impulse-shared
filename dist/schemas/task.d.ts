import { z } from "zod";
export declare const taskStatusSchema: z.ZodEnum<["open", "completed", "dismissed"]>;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"merge_behaviors">;
    sourceBehaviorIds: z.ZodArray<z.ZodString, "many">;
    targetBehavior: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer", "scale"]>>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    }, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | undefined;
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
        trackingType?: "counter" | "timer" | "scale" | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
        trackingType?: "counter" | "timer" | "scale" | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}>;
export declare const proposedMetricSchema: z.ZodObject<{
    name: z.ZodString;
    minLabel: z.ZodOptional<z.ZodString>;
    maxLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
}, {
    name: string;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"propose_experiment">;
    proposedExperiment: z.ZodObject<{
        behaviorId: z.ZodString;
        metrics: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            minLabel: z.ZodOptional<z.ZodString>;
            maxLabel: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }, {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }>, "many">;
        experimentQuestion: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        metrics: {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }[];
        experimentQuestion: string;
    }, {
        behaviorId: string;
        metrics: {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
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
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
                content: string;
                role: "assistant" | "user";
            }, {
                content: string;
                role: "assistant" | "user";
            }>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                content: string;
                role: "assistant" | "user";
            } | undefined;
        }, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                content: string;
                role: "assistant" | "user";
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
                content: string;
                role: "assistant" | "user";
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
                content: string;
                role: "assistant" | "user";
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
                content: string;
                role: "assistant" | "user";
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
                content: string;
                role: "assistant" | "user";
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    userId: string;
    title: string;
    debriefOutcome: "acted" | "resisted";
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"weekly_review">;
    /** The local Sunday this review week is anchored to (YYYY-MM-DD). */
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"merge_behaviors">;
    sourceBehaviorIds: z.ZodArray<z.ZodString, "many">;
    targetBehavior: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer", "scale"]>>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | undefined;
        synonyms?: string[] | undefined;
        description?: string | undefined;
    }, {
        name: string;
        trackingType?: "counter" | "timer" | "scale" | undefined;
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
        trackingType?: "counter" | "timer" | "scale" | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
        trackingType?: "counter" | "timer" | "scale" | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"propose_experiment">;
    proposedExperiment: z.ZodObject<{
        behaviorId: z.ZodString;
        metrics: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            minLabel: z.ZodOptional<z.ZodString>;
            maxLabel: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }, {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }>, "many">;
        experimentQuestion: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        metrics: {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }[];
        experimentQuestion: string;
    }, {
        behaviorId: string;
        metrics: {
            name: string;
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
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
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
                content: string;
                role: "assistant" | "user";
            }, {
                content: string;
                role: "assistant" | "user";
            }>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                content: string;
                role: "assistant" | "user";
            } | undefined;
        }, {
            type: string;
            isDisplayable: true;
            data: Record<string, any>;
            message?: {
                content: string;
                role: "assistant" | "user";
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
                content: string;
                role: "assistant" | "user";
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
                content: string;
                role: "assistant" | "user";
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
                content: string;
                role: "assistant" | "user";
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
                content: string;
                role: "assistant" | "user";
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
    };
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    userId: string;
    title: string;
    debriefOutcome: "acted" | "resisted";
    instructions: string;
    impulseSessionId: string;
    suggestedTrigger: {
        tags: Record<string, string>;
        behaviorIds?: string[] | undefined;
    };
    suggestedPlan: {
        name: string;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId: z.ZodOptional<z.ZodString>;
    claimableSessionTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["recap", "general", "toolkitPlanning"]>, "many">>;
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: z.ZodOptional<z.ZodBoolean>;
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"weekly_review">;
    /** The local Sunday this review week is anchored to (YYYY-MM-DD). */
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    triggerAIAfter?: boolean | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    claimedBySessionId?: string | undefined;
}>]>;
export type TaskCategory = z.infer<typeof taskCategorySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
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
export type SetupShortcutTask = z.infer<typeof setupShortcutTaskSchema>;
export type ResumeRecapRemindersTask = z.infer<typeof resumeRecapRemindersTaskSchema>;
export type WeekLookbackTask = z.infer<typeof weekLookbackTaskSchema>;
export type WeeklyReviewTask = z.infer<typeof weeklyReviewTaskSchema>;
export type Task = z.infer<typeof taskSchema>;
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
