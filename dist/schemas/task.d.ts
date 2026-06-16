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
    createdBy: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    dismissedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    status: "completed" | "dismissed" | "open";
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    title: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "merge_behaviors";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
                title: z.ZodOptional<z.ZodString>;
                tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
                locationName: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }, {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }, {
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"create_plan">;
            triggerClientId: z.ZodOptional<z.ZodString>;
            existingTriggerId: z.ZodOptional<z.ZodString>;
            plan: z.ZodObject<{
                name: z.ZodString;
                tacticIds: z.ZodArray<z.ZodString, "many">;
                planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
                hour: z.ZodOptional<z.ZodNumber>;
                minute: z.ZodOptional<z.ZodNumber>;
                weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }, {
                name: string;
                tacticIds: string[];
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
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
    }, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    status: "completed" | "dismissed" | "open";
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    title: string;
    userId: string;
    instructions: string;
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_experiment";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_mask_behavior";
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
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
    title: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
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
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    userId: string;
    recapQuestionId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "recap_question";
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    userId: string;
    recapQuestionId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    debriefOutcome: "acted" | "resisted";
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "toolkit_planning";
    title: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    suggestions: {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }[];
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_tactic";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    status: "completed" | "dismissed" | "open";
    title: string;
    behaviorName: string;
    userId: string;
    experimentQuestion: string;
    metricIds: string[];
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    title: string;
    behaviorName: string;
    userId: string;
    experimentQuestion: string;
    metricIds: string[];
    instructions: string;
    metricNames: string[];
    timeWindowDays: number;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "collect_baseline";
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "merge_behaviors";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
                title: z.ZodOptional<z.ZodString>;
                tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
                locationName: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }, {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }, {
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"create_plan">;
            triggerClientId: z.ZodOptional<z.ZodString>;
            existingTriggerId: z.ZodOptional<z.ZodString>;
            plan: z.ZodObject<{
                name: z.ZodString;
                tacticIds: z.ZodArray<z.ZodString, "many">;
                planType: z.ZodOptional<z.ZodEnum<["trigger", "scheduled"]>>;
                hour: z.ZodOptional<z.ZodNumber>;
                minute: z.ZodOptional<z.ZodNumber>;
                weekdays: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            }, {
                name: string;
                tacticIds: string[];
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
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
    }, {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    status: "completed" | "dismissed" | "open";
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_strategy";
    title: string;
    userId: string;
    instructions: string;
    suggestedStrategy: {
        title: string;
        summary: string;
        operations: ({
            type: "create_trigger";
            trigger: {
                behaviorIds?: string[] | undefined;
                title?: string | undefined;
                tags?: Record<string, string> | undefined;
                triggerType?: "arrival" | "departure" | undefined;
                locationName?: string | undefined;
            };
            clientId: string;
        } | {
            type: "create_plan";
            plan: {
                name: string;
                tacticIds: string[];
                planType?: "scheduled" | "trigger" | undefined;
                hour?: number | undefined;
                minute?: number | undefined;
                weekdays?: number[] | undefined;
            };
            triggerClientId?: string | undefined;
            existingTriggerId?: string | undefined;
        })[];
    };
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_experiment";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "propose_mask_behavior";
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
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
    title: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
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
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    userId: string;
    recapQuestionId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
    claimedBySessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "recap_question";
    title: string;
    behaviorId: string;
    behaviorName: string;
    ordinal: number;
    userId: string;
    recapQuestionId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    answerSummary?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    debriefOutcome: "acted" | "resisted";
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "review_trigger";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "toolkit_planning";
    title: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    userId: string;
    suggestions: {
        theme: string;
        tacticId?: string | undefined;
        guidance?: string | undefined;
    }[];
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "suggest_tactic";
    title: string;
    userId: string;
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
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    status: "completed" | "dismissed" | "open";
    title: string;
    behaviorName: string;
    userId: string;
    experimentQuestion: string;
    metricIds: string[];
    instructions: string;
    category: "zara" | "deterministic";
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
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "reflect_on_metrics";
    title: string;
    behaviorName: string;
    userId: string;
    experimentQuestion: string;
    metricIds: string[];
    instructions: string;
    metricNames: string[];
    timeWindowDays: number;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
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
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    category: "zara" | "deterministic";
    id?: string | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "collect_baseline";
    title: string;
    behaviorId: string;
    userId: string;
    instructions: string;
    id?: string | undefined;
    status?: "completed" | "dismissed" | "open" | undefined;
    ordinal?: number | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    minAppVersion?: string | undefined;
    createdBy?: string | undefined;
    category?: "zara" | "deterministic" | undefined;
    context?: string | undefined;
    requiredTools?: string[] | undefined;
    dependsOnTaskId?: string | undefined;
    claimableSessionTypes?: ("general" | "recap" | "toolkitPlanning")[] | undefined;
    dismissedAt?: import("../types").Timestamp | undefined;
}>]>;
export type TaskCategory = z.infer<typeof taskCategorySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type ClaimableSessionType = z.infer<typeof claimableSessionTypeSchema>;
export type MergeBehaviorsTask = z.infer<typeof mergeBehaviorsTaskSchema>;
export type SuggestStrategyTask = z.infer<typeof suggestStrategyTaskSchema>;
export type ProposeExperimentTask = z.infer<typeof proposeExperimentTaskSchema>;
export type ProposeMaskBehaviorTask = z.infer<typeof proposeMaskBehaviorTaskSchema>;
export type CreateSessionTask = z.infer<typeof createSessionTaskSchema>;
export type RecapQuestionTask = z.infer<typeof recapQuestionTaskSchema>;
export type ReviewTriggerTask = z.infer<typeof reviewTriggerTaskSchema>;
export type ToolkitPlanningTask = z.infer<typeof toolkitPlanningTaskSchema>;
export type SuggestTacticTask = z.infer<typeof suggestTacticTaskSchema>;
export type ReflectOnMetricsTask = z.infer<typeof reflectOnMetricsTaskSchema>;
export type CollectBaselineTask = z.infer<typeof collectBaselineTaskSchema>;
export type Task = z.infer<typeof taskSchema>;
export declare const isTask: (value: unknown) => value is Task;
export declare const isMergeBehaviorsTask: (value: unknown) => value is MergeBehaviorsTask;
export declare const isSuggestStrategyTask: (value: unknown) => value is SuggestStrategyTask;
export declare const isProposeExperimentTask: (value: unknown) => value is ProposeExperimentTask;
export declare const isProposeMaskBehaviorTask: (value: unknown) => value is ProposeMaskBehaviorTask;
export declare const isRecapQuestionTask: (value: unknown) => value is RecapQuestionTask;
export declare const isReviewTriggerTask: (value: unknown) => value is ReviewTriggerTask;
export declare const isToolkitPlanningTask: (value: unknown) => value is ToolkitPlanningTask;
export declare const isSuggestTacticTask: (value: unknown) => value is SuggestTacticTask;
export declare const isReflectOnMetricsTask: (value: unknown) => value is ReflectOnMetricsTask;
