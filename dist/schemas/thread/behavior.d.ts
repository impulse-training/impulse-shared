import { z } from "zod";
export declare const behaviorThreadSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    plan: z.ZodOptional<z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
        type: z.ZodType<"default", z.ZodTypeDef, "default">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        behaviorId: z.ZodOptional<z.ZodString>;
        behaviorRef: z.ZodOptional<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>>;
        isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfUses: z.ZodDefault<z.ZodNumber>;
        numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
        numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "default";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        behaviorRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
    }, {
        type: "default";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        behaviorRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
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
        type: z.ZodType<"emotion", z.ZodTypeDef, "emotion">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        emotionName: z.ZodString;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "emotion";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "emotion";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
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
        type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        behaviorId: z.ZodString;
        behaviorRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfUses: z.ZodDefault<z.ZodNumber>;
        numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
        numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("../..").DocumentReferenceLike<unknown>;
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("../..").DocumentReferenceLike<unknown>;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
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
        type: z.ZodType<"time", z.ZodTypeDef, "time">;
        ordinal: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodString>;
        tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
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
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
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
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        questions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>>;
        lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    }, z.UnknownKeysParam, z.ZodTypeAny, {
        type: "location";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "location";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        trigger: {
            locationName: string;
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }>>]>>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    date: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    userId: z.ZodString;
    mode: z.ZodDefault<z.ZodEnum<["text", "voice"]>>;
    currentTactic: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        aiInstructions: z.ZodOptional<z.ZodString>;
        createdByUid: z.ZodOptional<z.ZodString>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        steps: z.ZodArray<z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodOptional<z.ZodLiteral<"default">>;
            text: z.ZodString;
            durationSeconds: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            mode?: "default" | undefined;
            durationSeconds?: number | undefined;
        }, {
            text: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            mode?: "default" | undefined;
            durationSeconds?: number | undefined;
        }>, z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"breathing">;
            breathingPattern: z.ZodObject<{
                inhale: z.ZodNumber;
                hold: z.ZodOptional<z.ZodNumber>;
                exhale: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            }, {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            }>;
            cycles: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            mode: "breathing";
            breathingPattern: {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            };
            text?: string | undefined;
            cycles?: number | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }, {
            mode: "breathing";
            breathingPattern: {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            };
            text?: string | undefined;
            cycles?: number | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }>, z.ZodObject<{
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"notifySupport">;
            groupId: z.ZodString;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            mode: "notifySupport";
            groupId: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }, {
            text: string;
            mode: "notifySupport";
            groupId: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }>, z.ZodObject<{
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"question-text">;
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            mode: "question-text";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            text: string;
            mode: "question-text";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"question-slider1To10">;
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
        } & {
            sliderConfig: z.ZodObject<{
                minLabel: z.ZodOptional<z.ZodString>;
                maxLabel: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            }, {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            mode: "question-slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }, {
            text: string;
            mode: "question-slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }>, z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"media">;
            media: z.ZodArray<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            mode: "media";
            media: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }[];
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }, {
            mode: "media";
            media: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }[];
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }>, z.ZodObject<{
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"affirmation">;
            text: z.ZodDefault<z.ZodString>;
            affirmationText: z.ZodString;
            repeatCount: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            mode: "affirmation";
            affirmationText: string;
            repeatCount: number;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }, {
            mode: "affirmation";
            affirmationText: string;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            repeatCount?: number | undefined;
        }>, z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            backgroundImage: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        } & {
            mode: z.ZodLiteral<"pedometer">;
            targetSteps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            mode: "pedometer";
            targetSteps: number;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }, {
            mode: "pedometer";
            targetSteps: number;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        }>]>, "many">;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        isMultiStep: z.ZodOptional<z.ZodBoolean>;
        autoplay: z.ZodOptional<z.ZodBoolean>;
        indications: z.ZodOptional<z.ZodObject<{
            questionResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
                questionId: z.ZodString;
                questionPrompt: z.ZodString;
                responseSubstrings: z.ZodArray<z.ZodString, "many">;
                weight: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }, {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }>, "many">>;
            behaviors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                behaviorId: z.ZodString;
                behaviorName: z.ZodString;
                weight: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }, {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        }, {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        }>>;
        contraindications: z.ZodOptional<z.ZodObject<{
            questionResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
                questionId: z.ZodString;
                questionPrompt: z.ZodString;
                responseSubstrings: z.ZodArray<z.ZodString, "many">;
                weight: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }, {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }>, "many">>;
            behaviors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                behaviorId: z.ZodString;
                behaviorName: z.ZodString;
                weight: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }, {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        }, {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        }>>;
        effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
        timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
        aiConfiguration: z.ZodOptional<z.ZodObject<{
            defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
            goal: z.ZodString;
            prompt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            goal: string;
            prompt?: string | undefined;
            defaultConversationMode?: "text" | "voice" | undefined;
        }, {
            goal: string;
            prompt?: string | undefined;
            defaultConversationMode?: "text" | "voice" | undefined;
        }>>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        steps: ({
            text: string;
            mode: "affirmation";
            affirmationText: string;
            repeatCount: number;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            mode: "breathing";
            breathingPattern: {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            };
            text?: string | undefined;
            cycles?: number | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            mode?: "default" | undefined;
            durationSeconds?: number | undefined;
        } | {
            mode: "media";
            media: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }[];
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            mode: "pedometer";
            targetSteps: number;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "notifySupport";
            groupId: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-text";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            suggestedResponses?: string[] | undefined;
        })[];
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        tags?: string[] | undefined;
        aiInstructions?: string | undefined;
        createdByUid?: string | undefined;
        recommended?: boolean | undefined;
        isMultiStep?: boolean | undefined;
        autoplay?: boolean | undefined;
        indications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        contraindications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        effectiveness?: "medium" | "low" | "high" | undefined;
        timeToComplete?: "medium" | "long" | "quick" | undefined;
        aiConfiguration?: {
            goal: string;
            prompt?: string | undefined;
            defaultConversationMode?: "text" | "voice" | undefined;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        steps: ({
            mode: "affirmation";
            affirmationText: string;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            repeatCount?: number | undefined;
        } | {
            mode: "breathing";
            breathingPattern: {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            };
            text?: string | undefined;
            cycles?: number | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            mode?: "default" | undefined;
            durationSeconds?: number | undefined;
        } | {
            mode: "media";
            media: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }[];
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            mode: "pedometer";
            targetSteps: number;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "notifySupport";
            groupId: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-text";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            suggestedResponses?: string[] | undefined;
        })[];
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        tags?: string[] | undefined;
        aiInstructions?: string | undefined;
        createdByUid?: string | undefined;
        recommended?: boolean | undefined;
        isMultiStep?: boolean | undefined;
        autoplay?: boolean | undefined;
        indications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        contraindications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        effectiveness?: "medium" | "low" | "high" | undefined;
        timeToComplete?: "medium" | "long" | "quick" | undefined;
        aiConfiguration?: {
            goal: string;
            prompt?: string | undefined;
            defaultConversationMode?: "text" | "voice" | undefined;
        } | undefined;
    }>>;
    currentTacticStepIndex: z.ZodOptional<z.ZodNumber>;
    isDraft: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    emojiId: z.ZodNullable<z.ZodObject<{
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        emoji: string;
    }, {
        emoji: string;
    }>>;
    summaryData: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
        tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
        behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
        outcomeLogs: z.ZodArray<z.ZodAny, "many">;
        questionsLogs: z.ZodArray<z.ZodAny, "many">;
        firstMessageLog: z.ZodOptional<z.ZodAny>;
        firstCallLog: z.ZodOptional<z.ZodAny>;
        hasContent: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: "behavior" | "impulse" | "recap" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionsLogs: any[];
        hasContent: boolean;
        firstMessageLog?: any;
        firstCallLog?: any;
    }, {
        type: "behavior" | "impulse" | "recap" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionsLogs: any[];
        hasContent: boolean;
        firstMessageLog?: any;
        firstCallLog?: any;
    }>>;
    defaultSystemPrompt: z.ZodOptional<z.ZodString>;
    debriefSystemPrompt: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    summaryRequestedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    summarizedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    strategyDoc: z.ZodOptional<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>>;
    agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    allQuestionsAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    archiveAfter: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    sharingLevels: z.ZodOptional<z.ZodObject<{
        impulseMoment: z.ZodBoolean;
        plansUsed: z.ZodBoolean;
        outcome: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    }, {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    }>>;
    sharingMessage: z.ZodOptional<z.ZodString>;
    sharedWithUserIds: z.ZodArray<z.ZodString, "many">;
    sharedWithSupportGroups: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    openAfter: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    firstOpenedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    responseStartedProcessingAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    assistantId: z.ZodOptional<z.ZodString>;
    assistantThreadId: z.ZodOptional<z.ZodString>;
    currentCall: z.ZodOptional<z.ZodObject<{
        logId: z.ZodString;
        token: z.ZodString;
        livekitRoomName: z.ZodString;
        livekitSessionId: z.ZodString;
        startedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        status: z.ZodEnum<["connecting", "connected", "ended"]>;
    }, "strip", z.ZodTypeAny, {
        status: "connecting" | "connected" | "ended";
        livekitRoomName: string;
        livekitSessionId: string;
        token: string;
        startedAt: import("../../types").Timestamp;
        logId: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    }, {
        status: "connecting" | "connected" | "ended";
        livekitRoomName: string;
        livekitSessionId: string;
        token: string;
        startedAt: import("../../types").Timestamp;
        logId: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"behavior">;
}, "strip", z.ZodTypeAny, {
    type: "behavior";
    date: import("../../types").Timestamp;
    userId: string;
    dateString: string;
    mode: "text" | "voice";
    emojiId: {
        emoji: string;
    } | null;
    sharedWithUserIds: string[];
    isDraft: boolean;
    archiveAfter: import("../../types").Timestamp;
    sharedWithSupportGroups: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    title?: string | undefined;
    behaviorIds?: string[] | undefined;
    agentConnectedAt?: import("../../types").Timestamp | undefined;
    summary?: string | undefined;
    plan?: ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "default";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        behaviorRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "emotion";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        questions: import("../..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("../..").DocumentReferenceLike<unknown>;
        isActive: boolean;
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
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
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
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
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | undefined;
    summarizedAt?: import("../../types").Timestamp | undefined;
    currentTactic?: {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        steps: ({
            text: string;
            mode: "affirmation";
            affirmationText: string;
            repeatCount: number;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            mode: "breathing";
            breathingPattern: {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            };
            text?: string | undefined;
            cycles?: number | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            mode?: "default" | undefined;
            durationSeconds?: number | undefined;
        } | {
            mode: "media";
            media: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }[];
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            mode: "pedometer";
            targetSteps: number;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "notifySupport";
            groupId: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-text";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            suggestedResponses?: string[] | undefined;
        })[];
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        tags?: string[] | undefined;
        aiInstructions?: string | undefined;
        createdByUid?: string | undefined;
        recommended?: boolean | undefined;
        isMultiStep?: boolean | undefined;
        autoplay?: boolean | undefined;
        indications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        contraindications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        effectiveness?: "medium" | "low" | "high" | undefined;
        timeToComplete?: "medium" | "long" | "quick" | undefined;
        aiConfiguration?: {
            goal: string;
            prompt?: string | undefined;
            defaultConversationMode?: "text" | "voice" | undefined;
        } | undefined;
    } | undefined;
    currentTacticStepIndex?: number | undefined;
    summaryData?: {
        type: "behavior" | "impulse" | "recap" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionsLogs: any[];
        hasContent: boolean;
        firstMessageLog?: any;
        firstCallLog?: any;
    } | undefined;
    defaultSystemPrompt?: string | undefined;
    debriefSystemPrompt?: string | undefined;
    summaryRequestedAt?: import("../../types").Timestamp | undefined;
    strategyDoc?: import("../..").DocumentReferenceLike<unknown> | undefined;
    allQuestionsAnsweredAt?: import("../../types").Timestamp | undefined;
    sharingLevels?: {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    } | undefined;
    sharingMessage?: string | undefined;
    openAfter?: import("../../types").Timestamp | undefined;
    firstOpenedAt?: import("../../types").Timestamp | undefined;
    responseStartedProcessingAt?: import("../../types").Timestamp | undefined;
    assistantId?: string | undefined;
    assistantThreadId?: string | undefined;
    currentCall?: {
        status: "connecting" | "connected" | "ended";
        livekitRoomName: string;
        livekitSessionId: string;
        token: string;
        startedAt: import("../../types").Timestamp;
        logId: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    } | undefined;
}, {
    type: "behavior";
    date: import("../../types").Timestamp;
    userId: string;
    dateString: string;
    emojiId: {
        emoji: string;
    } | null;
    sharedWithUserIds: string[];
    archiveAfter: import("../../types").Timestamp;
    sharedWithSupportGroups: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    title?: string | undefined;
    behaviorIds?: string[] | undefined;
    mode?: "text" | "voice" | undefined;
    agentConnectedAt?: import("../../types").Timestamp | undefined;
    summary?: string | undefined;
    plan?: ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "default";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        behaviorId?: string | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        behaviorRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "emotion";
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        emotionName: string;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | ({
        id: string;
        _ref: import("../..").DocumentReferenceLike<unknown>;
    } & {
        type: "impulse";
        behaviorId: string;
        name: string;
        tactics: import("../..").DocumentReferenceLike<unknown>[];
        behaviorRef: import("../..").DocumentReferenceLike<unknown>;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    }) | ({
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
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
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
            address: string;
            triggerType: "arrival" | "departure";
            latitude: number;
            longitude: number;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        isTemplate?: boolean | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../../types").Timestamp | undefined;
        deletedAt?: import("../../types").Timestamp | undefined;
    }) | undefined;
    summarizedAt?: import("../../types").Timestamp | undefined;
    currentTactic?: {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        steps: ({
            mode: "affirmation";
            affirmationText: string;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            repeatCount?: number | undefined;
        } | {
            mode: "breathing";
            breathingPattern: {
                inhale: number;
                exhale: number;
                hold?: number | undefined;
            };
            text?: string | undefined;
            cycles?: number | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            mode?: "default" | undefined;
            durationSeconds?: number | undefined;
        } | {
            mode: "media";
            media: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            }[];
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            mode: "pedometer";
            targetSteps: number;
            text?: string | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "notifySupport";
            groupId: string;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
        } | {
            text: string;
            mode: "question-text";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            backgroundImage?: {
                uri: string;
                storagePath: string;
                contentType: string;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
            tags?: string[] | undefined;
            suggestedResponses?: string[] | undefined;
        })[];
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        tags?: string[] | undefined;
        aiInstructions?: string | undefined;
        createdByUid?: string | undefined;
        recommended?: boolean | undefined;
        isMultiStep?: boolean | undefined;
        autoplay?: boolean | undefined;
        indications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        contraindications?: {
            questionResponses?: {
                questionId: string;
                questionPrompt: string;
                responseSubstrings: string[];
                weight: number;
            }[] | undefined;
            behaviors?: {
                behaviorId: string;
                behaviorName: string;
                weight: number;
            }[] | undefined;
        } | undefined;
        effectiveness?: "medium" | "low" | "high" | undefined;
        timeToComplete?: "medium" | "long" | "quick" | undefined;
        aiConfiguration?: {
            goal: string;
            prompt?: string | undefined;
            defaultConversationMode?: "text" | "voice" | undefined;
        } | undefined;
    } | undefined;
    currentTacticStepIndex?: number | undefined;
    isDraft?: boolean | undefined;
    summaryData?: {
        type: "behavior" | "impulse" | "recap" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        questionsLogs: any[];
        hasContent: boolean;
        firstMessageLog?: any;
        firstCallLog?: any;
    } | undefined;
    defaultSystemPrompt?: string | undefined;
    debriefSystemPrompt?: string | undefined;
    summaryRequestedAt?: import("../../types").Timestamp | undefined;
    strategyDoc?: import("../..").DocumentReferenceLike<unknown> | undefined;
    allQuestionsAnsweredAt?: import("../../types").Timestamp | undefined;
    sharingLevels?: {
        outcome: boolean;
        impulseMoment: boolean;
        plansUsed: boolean;
    } | undefined;
    sharingMessage?: string | undefined;
    openAfter?: import("../../types").Timestamp | undefined;
    firstOpenedAt?: import("../../types").Timestamp | undefined;
    responseStartedProcessingAt?: import("../../types").Timestamp | undefined;
    assistantId?: string | undefined;
    assistantThreadId?: string | undefined;
    currentCall?: {
        status: "connecting" | "connected" | "ended";
        livekitRoomName: string;
        livekitSessionId: string;
        token: string;
        startedAt: import("../../types").Timestamp;
        logId: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    } | undefined;
}>;
export type BehaviorThread = z.infer<typeof behaviorThreadSchema>;
