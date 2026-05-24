import { z } from "zod";
declare const strategyTriggerDraftSchema: z.ZodObject<{
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
declare const strategyPlanDraftSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
    }[] | undefined;
    planType?: "scheduled" | "trigger" | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
    weekdays?: number[] | undefined;
}>;
export declare const createTriggerStrategyOperationSchema: z.ZodObject<{
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
}>;
export declare const createPlanStrategyOperationSchema: z.ZodObject<{
    type: z.ZodLiteral<"create_plan">;
    triggerClientId: z.ZodOptional<z.ZodString>;
    existingTriggerId: z.ZodOptional<z.ZodString>;
    plan: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
}, {
    type: "create_plan";
    plan: {
        name: string;
        id?: string | undefined;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
}>;
export declare const strategyModificationOperationSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    plan: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
}, {
    type: "create_plan";
    plan: {
        name: string;
        id?: string | undefined;
        tacticIds?: string[] | undefined;
        newTactics?: {
            title: string;
            description?: string | undefined;
        }[] | undefined;
        planType?: "scheduled" | "trigger" | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        weekdays?: number[] | undefined;
    };
    triggerClientId?: string | undefined;
    existingTriggerId?: string | undefined;
}>]>;
export declare const proposedStrategyModificationLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"proposed_strategy_modification">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        title: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
        status: z.ZodDefault<z.ZodEnum<["pending", "accepted", "declined"]>>;
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
            plan: z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        }, {
            type: "create_plan";
            plan: {
                name: string;
                id?: string | undefined;
                tacticIds?: string[] | undefined;
                newTactics?: {
                    title: string;
                    description?: string | undefined;
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        }>]>, "many">;
        acceptedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        declinedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdTriggerIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        createdPlanIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        status: "declined" | "pending" | "accepted";
        title: string;
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
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
    }, {
        title: string;
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
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
        status?: "declined" | "pending" | "accepted" | undefined;
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "proposed_strategy_modification";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        status: "declined" | "pending" | "accepted";
        title: string;
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
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "proposed_strategy_modification";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        title: string;
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
                }[] | undefined;
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
        status?: "declined" | "pending" | "accepted" | undefined;
        summary?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        declinedAt?: import("../../types").Timestamp | undefined;
        createdTriggerIds?: string[] | undefined;
        createdPlanIds?: string[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}>;
export type StrategyTriggerDraft = z.infer<typeof strategyTriggerDraftSchema>;
export type StrategyPlanDraft = z.infer<typeof strategyPlanDraftSchema>;
export type CreateTriggerStrategyOperation = z.infer<typeof createTriggerStrategyOperationSchema>;
export type CreatePlanStrategyOperation = z.infer<typeof createPlanStrategyOperationSchema>;
export type StrategyModificationOperation = z.infer<typeof strategyModificationOperationSchema>;
export type ProposedStrategyModificationLog = z.infer<typeof proposedStrategyModificationLogSchema>;
export {};
