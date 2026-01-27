import { z } from "zod";
export declare const strategyPlanItemSchema: z.ZodObject<{
    planId: z.ZodString;
    plan: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"trigger", z.ZodTypeDef, "trigger">;
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
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "trigger";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
    }, {
        type: "trigger";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodType<"scheduled", z.ZodTypeDef, "scheduled">;
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
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        weekdays: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "scheduled";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        hour: number;
        minute: number;
        weekdays: number[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }, {
        type: "scheduled";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        hour: number;
        minute: number;
        weekdays: number[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    }>, z.ZodObject<{
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
        lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        numberOfUses: z.ZodDefault<z.ZodNumber>;
        numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
        numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
    }, {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
    }>]>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    planId: string;
    plan: {
        type: "trigger";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
    } | {
        type: "scheduled";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        hour: number;
        minute: number;
        weekdays: number[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        questions: import("..").DocumentReferenceLike<unknown>[];
        numberOfUses: number;
        numberOfSuccesses: number;
        numberOfSetbacks: number;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
    };
}, {
    description: string;
    planId: string;
    plan: {
        type: "trigger";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
    } | {
        type: "scheduled";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        hour: number;
        minute: number;
        weekdays: number[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
    } | {
        type: "default";
        name: string;
        tactics: import("..").DocumentReferenceLike<unknown>[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        description?: string | undefined;
        ordinal?: number | undefined;
        summary?: string | undefined;
        tacticsByPath?: Record<string, any> | undefined;
        questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        lastUsedAt?: import("../types").Timestamp | undefined;
        deletedAt?: import("../types").Timestamp | undefined;
        isActive?: boolean | undefined;
        numberOfUses?: number | undefined;
        numberOfSuccesses?: number | undefined;
        numberOfSetbacks?: number | undefined;
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
            type: z.ZodType<"trigger", z.ZodTypeDef, "trigger">;
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
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "trigger";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        }, {
            type: "trigger";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"scheduled", z.ZodTypeDef, "scheduled">;
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
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            weekdays: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "scheduled";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            hour: number;
            minute: number;
            weekdays: number[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }, {
            type: "scheduled";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            hour: number;
            minute: number;
            weekdays: number[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        }>, z.ZodObject<{
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
            lastUsedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfUses: z.ZodDefault<z.ZodNumber>;
            numberOfSuccesses: z.ZodDefault<z.ZodNumber>;
            numberOfSetbacks: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        }, {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
        }>]>;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        planId: string;
        plan: {
            type: "trigger";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        } | {
            type: "scheduled";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            hour: number;
            minute: number;
            weekdays: number[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        };
    }, {
        description: string;
        planId: string;
        plan: {
            type: "trigger";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        } | {
            type: "scheduled";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            hour: number;
            minute: number;
            weekdays: number[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
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
            type: "trigger";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        } | {
            type: "scheduled";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            hour: number;
            minute: number;
            weekdays: number[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            questions: import("..").DocumentReferenceLike<unknown>[];
            numberOfUses: number;
            numberOfSuccesses: number;
            numberOfSetbacks: number;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
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
            type: "trigger";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
        } | {
            type: "scheduled";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            hour: number;
            minute: number;
            weekdays: number[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
        } | {
            type: "default";
            name: string;
            tactics: import("..").DocumentReferenceLike<unknown>[];
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            tacticsByPath?: Record<string, any> | undefined;
            questions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            lastUsedAt?: import("../types").Timestamp | undefined;
            deletedAt?: import("../types").Timestamp | undefined;
            isActive?: boolean | undefined;
            numberOfUses?: number | undefined;
            numberOfSuccesses?: number | undefined;
            numberOfSetbacks?: number | undefined;
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
