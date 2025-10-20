import { z } from "zod";
export declare const planLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    replyTactic: z.ZodOptional<z.ZodObject<{
        tactic: z.ZodAny;
        currentStepIndex: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currentStepIndex: number;
        tactic?: any;
    }, {
        currentStepIndex: number;
        tactic?: any;
    }>>;
} & {
    type: z.ZodLiteral<"plan">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        planId: z.ZodString;
        plan: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"time", z.ZodTypeDef, "time">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                weekdays: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                hour: number;
                minute: number;
                weekdays: number[];
            }, {
                hour: number;
                minute: number;
                weekdays: number[];
            }>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }>>, z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"location", z.ZodTypeDef, "location">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                locationName: z.ZodString;
                triggerType: z.ZodEnum<["arrival", "departure"]>;
                latitude: z.ZodNumber;
                longitude: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            }, {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            }>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }>>, z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"recap", z.ZodTypeDef, "recap">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                weekdays: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                hour: number;
                minute: number;
                weekdays: number[];
            }, {
                hour: number;
                minute: number;
                weekdays: number[];
            }>;
            questionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            questionIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            questionIds?: string[] | undefined;
        }>>]>;
        introduction: z.ZodOptional<z.ZodString>;
        acceptedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            questionIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    }, {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            questionIds?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "plan";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            questions: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            questionIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "plan";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            questionIds?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type PlanLog = z.infer<typeof planLogSchema>;
