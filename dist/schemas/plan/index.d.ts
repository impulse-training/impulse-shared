import { z } from "zod";
import { DefaultPlan } from "./defaultPlan";
import { EmotionPlan } from "./emotionPlan";
import { ImpulsePlan } from "./impulsePlan";
import { LocationPlan } from "./locationPlan";
import { TimePlan } from "./timePlan";
export * from "./defaultPlan";
export * from "./emotionPlan";
export * from "./impulsePlan";
export * from "./locationPlan";
export * from "./timePlan";
export declare const planSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}>]>;
export type Plan = z.infer<typeof planSchema>;
export declare const planWithIdSchema: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
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
}>>]>;
export declare const planIsTimePlan: (value: Plan) => value is TimePlan;
export declare const isValidTimePlan: (value: unknown) => value is TimePlan;
export declare const planIsLocationPlan: (value: Plan) => value is LocationPlan;
export declare const isValidLocationPlan: (value: unknown) => value is LocationPlan;
export declare const planIsImpulsePlan: (value: Plan) => value is ImpulsePlan;
export declare const isValidImpulsePlan: (value: unknown) => value is ImpulsePlan;
export declare const planIsEmotionPlan: (value: Plan) => value is EmotionPlan;
export declare const isValidEmotionPlan: (value: unknown) => value is EmotionPlan;
export declare const planIsDefaultPlan: (value: Plan) => value is DefaultPlan;
export declare const isValidDefaultPlan: (value: unknown) => value is DefaultPlan;
