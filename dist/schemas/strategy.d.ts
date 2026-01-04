import { z } from "zod";
export declare const strategyPlanItemSchema: z.ZodObject<{
    planId: z.ZodString;
    plan: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"default", z.ZodTypeDef, "default">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    } & {
        behaviorId: z.ZodOptional<z.ZodString>;
        behaviorRef: z.ZodOptional<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>>;
        isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        numberOfUses: z.ZodDefault<z.ZodNumber>;
        numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
        numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
    }, {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"emotion", z.ZodTypeDef, "emotion">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    } & {
        emotionName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emotion";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }, {
        type: "emotion";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    } & {
        behaviorId: z.ZodString;
        behaviorRef: z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>;
        isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        numberOfUses: z.ZodDefault<z.ZodNumber>;
        numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
        numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("..").DocumentReferenceLike<unknown>;
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }, {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("..").DocumentReferenceLike<unknown>;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"time", z.ZodTypeDef, "time">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    }, "strip", z.ZodTypeAny, {
        type: "time";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }, {
        type: "time";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"location", z.ZodTypeDef, "location">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    } & {
        trigger: z.ZodObject<{
            locationName: z.ZodString;
            address: z.ZodString;
            triggerType: z.ZodEnum<["arrival", "departure"]>;
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        }, {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "location";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }, {
        type: "location";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }>]>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    planId: string;
    plan: {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
    } | {
        type: "emotion";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("..").DocumentReferenceLike<unknown>;
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "location";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "time";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    };
}, {
    description: string;
    planId: string;
    plan: {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    } | {
        type: "emotion";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("..").DocumentReferenceLike<unknown>;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    } | {
        type: "location";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "time";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        trigger: {
            hour: number;
            minute: number;
            weekdays: number[];
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    };
}>;
export declare const strategyCoachSchema: z.ZodObject<{
    coachId: z.ZodString;
    coach: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        credentials: z.ZodString;
        bio: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            uri: z.ZodString;
            storagePath: z.ZodString;
            contentType: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            sizeBytes: z.ZodOptional<z.ZodNumber>;
            metadata: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
                durationMs: z.ZodOptional<z.ZodNumber>;
                transcript: z.ZodOptional<z.ZodString>;
                meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    db: z.ZodNumber;
                    timestampMs: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    db: number;
                    timestampMs?: number | undefined;
                }, {
                    db: number;
                    timestampMs?: number | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            }, {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
        focusBehaviors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        deniedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        credentials: string;
        focusBehaviors: string[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        bio?: string | undefined;
        avatar?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        approvedAt?: import("../types").Timestamp | undefined;
        deniedAt?: import("../types").Timestamp | undefined;
    }, {
        name: string;
        credentials: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        bio?: string | undefined;
        avatar?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        focusBehaviors?: string[] | undefined;
        approvedAt?: import("../types").Timestamp | undefined;
        deniedAt?: import("../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    coachId: string;
    coach: {
        name: string;
        credentials: string;
        focusBehaviors: string[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        bio?: string | undefined;
        avatar?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        approvedAt?: import("../types").Timestamp | undefined;
        deniedAt?: import("../types").Timestamp | undefined;
    };
}, {
    coachId: string;
    coach: {
        name: string;
        credentials: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        bio?: string | undefined;
        avatar?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        focusBehaviors?: string[] | undefined;
        approvedAt?: import("../types").Timestamp | undefined;
        deniedAt?: import("../types").Timestamp | undefined;
    };
}>;
export declare const strategySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    shortDescription: z.ZodOptional<z.ZodString>;
    problem: z.ZodOptional<z.ZodString>;
    whenUseful: z.ZodOptional<z.ZodString>;
    isImported: z.ZodOptional<z.ZodBoolean>;
    plans: z.ZodArray<z.ZodObject<{
        planId: z.ZodString;
        plan: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"default", z.ZodTypeDef, "default">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
            tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        } & {
            behaviorId: z.ZodOptional<z.ZodString>;
            behaviorRef: z.ZodOptional<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>>;
            isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfUses: z.ZodDefault<z.ZodNumber>;
            numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
            numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            isActive: boolean;
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            behaviorId?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
        }, {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            behaviorId?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"emotion", z.ZodTypeDef, "emotion">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
            tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        } & {
            emotionName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "emotion";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            emotionName: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }, {
            type: "emotion";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            emotionName: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
            tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        } & {
            behaviorId: z.ZodString;
            behaviorRef: z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>;
            isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfUses: z.ZodDefault<z.ZodNumber>;
            numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
            numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "impulse";
            behaviorId: string;
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            behaviorRef: import("..").DocumentReferenceLike<unknown>;
            isActive: boolean;
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }, {
            type: "impulse";
            behaviorId: string;
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            behaviorRef: import("..").DocumentReferenceLike<unknown>;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"time", z.ZodTypeDef, "time">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
            tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
        }, "strip", z.ZodTypeAny, {
            type: "time";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }, {
            type: "time";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"location", z.ZodTypeDef, "location">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
            tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>>;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                locationName: z.ZodString;
                address: z.ZodString;
                triggerType: z.ZodEnum<["arrival", "departure"]>;
                latitude: z.ZodNumber;
                longitude: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            }, {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "location";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }, {
            type: "location";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }>]>;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        planId: string;
        plan: {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            isActive: boolean;
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            behaviorId?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
        } | {
            type: "emotion";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            emotionName: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "impulse";
            behaviorId: string;
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            behaviorRef: import("..").DocumentReferenceLike<unknown>;
            isActive: boolean;
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "location";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "time";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        };
    }, {
        description: string;
        planId: string;
        plan: {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            behaviorId?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        } | {
            type: "emotion";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            emotionName: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "impulse";
            behaviorId: string;
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            behaviorRef: import("..").DocumentReferenceLike<unknown>;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        } | {
            type: "location";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "time";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        };
    }>, "many">;
    coach: z.ZodObject<{
        coachId: z.ZodString;
        coach: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            credentials: z.ZodString;
            bio: z.ZodOptional<z.ZodString>;
            avatar: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
                uri: z.ZodString;
                storagePath: z.ZodString;
                contentType: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                sizeBytes: z.ZodOptional<z.ZodNumber>;
                metadata: z.ZodOptional<z.ZodObject<{
                    width: z.ZodOptional<z.ZodNumber>;
                    height: z.ZodOptional<z.ZodNumber>;
                    durationMs: z.ZodOptional<z.ZodNumber>;
                    transcript: z.ZodOptional<z.ZodString>;
                    meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        db: z.ZodNumber;
                        timestampMs: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        db: number;
                        timestampMs?: number | undefined;
                    }, {
                        db: number;
                        timestampMs?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                }, {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }, {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            }>>;
            focusBehaviors: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
            approvedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            deniedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            credentials: string;
            focusBehaviors: string[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            bio?: string | undefined;
            avatar?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            approvedAt?: import("../types").Timestamp | undefined;
            deniedAt?: import("../types").Timestamp | undefined;
        }, {
            name: string;
            credentials: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            bio?: string | undefined;
            avatar?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            focusBehaviors?: string[] | undefined;
            approvedAt?: import("../types").Timestamp | undefined;
            deniedAt?: import("../types").Timestamp | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        coachId: string;
        coach: {
            name: string;
            credentials: string;
            focusBehaviors: string[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            bio?: string | undefined;
            avatar?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            approvedAt?: import("../types").Timestamp | undefined;
            deniedAt?: import("../types").Timestamp | undefined;
        };
    }, {
        coachId: string;
        coach: {
            name: string;
            credentials: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            bio?: string | undefined;
            avatar?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            focusBehaviors?: string[] | undefined;
            approvedAt?: import("../types").Timestamp | undefined;
            deniedAt?: import("../types").Timestamp | undefined;
        };
    }>;
    publishedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    plans: {
        description: string;
        planId: string;
        plan: {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            isActive: boolean;
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            behaviorId?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
        } | {
            type: "emotion";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            emotionName: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "impulse";
            behaviorId: string;
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            behaviorRef: import("..").DocumentReferenceLike<unknown>;
            isActive: boolean;
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "location";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "time";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        };
    }[];
    coach: {
        coachId: string;
        coach: {
            name: string;
            credentials: string;
            focusBehaviors: string[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            bio?: string | undefined;
            avatar?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            approvedAt?: import("../types").Timestamp | undefined;
            deniedAt?: import("../types").Timestamp | undefined;
        };
    };
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    shortDescription?: string | undefined;
    problem?: string | undefined;
    whenUseful?: string | undefined;
    isImported?: boolean | undefined;
    publishedAt?: import("../types").Timestamp | undefined;
}, {
    name: string;
    plans: {
        description: string;
        planId: string;
        plan: {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            behaviorId?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            behaviorRef?: import("..").DocumentReferenceLike<unknown> | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        } | {
            type: "emotion";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            emotionName: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "impulse";
            behaviorId: string;
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            behaviorRef: import("..").DocumentReferenceLike<unknown>;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        } | {
            type: "location";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                address: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "time";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        };
    }[];
    coach: {
        coachId: string;
        coach: {
            name: string;
            credentials: string;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            bio?: string | undefined;
            avatar?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../types").Timestamp | undefined;
                updatedAt?: import("../types").Timestamp | undefined;
                title?: string | undefined;
                sizeBytes?: number | undefined;
                metadata?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    durationMs?: number | undefined;
                    transcript?: string | undefined;
                    meterings?: {
                        db: number;
                        timestampMs?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            focusBehaviors?: string[] | undefined;
            approvedAt?: import("../types").Timestamp | undefined;
            deniedAt?: import("../types").Timestamp | undefined;
        };
    };
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    shortDescription?: string | undefined;
    problem?: string | undefined;
    whenUseful?: string | undefined;
    isImported?: boolean | undefined;
    publishedAt?: import("../types").Timestamp | undefined;
}>;
export type StrategyPlanItem = z.infer<typeof strategyPlanItemSchema>;
export type StrategyCoach = z.infer<typeof strategyCoachSchema>;
export type Strategy = z.infer<typeof strategySchema>;
