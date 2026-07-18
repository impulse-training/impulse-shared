import { z } from "zod";
export declare const triggerLocationSchema: z.ZodObject<{
    locationName: z.ZodString;
    triggerType: z.ZodEnum<["arrival", "departure"]>;
    localLocationRef: z.ZodString;
}, "strip", z.ZodTypeAny, {
    triggerType: "arrival" | "departure";
    locationName: string;
    localLocationRef: string;
}, {
    triggerType: "arrival" | "departure";
    locationName: string;
    localLocationRef: string;
}>;
export type TriggerLocation = z.infer<typeof triggerLocationSchema>;
export declare const triggerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
    /** @deprecated Use triggerType + location tag group option localLocationRef instead */
    location: z.ZodOptional<z.ZodObject<{
        locationName: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        localLocationRef: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }>>;
    lastOccurredAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>>;
}, "strip", z.ZodTypeAny, {
    tags: Record<string, string>;
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}, {
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    tags?: Record<string, string> | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}>;
export type Trigger = z.infer<typeof triggerSchema>;
export declare const triggerWithIdSchema: z.ZodIntersection<z.ZodObject<{
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
    tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
    /** @deprecated Use triggerType + location tag group option localLocationRef instead */
    location: z.ZodOptional<z.ZodObject<{
        locationName: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        localLocationRef: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }, {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    }>>;
    lastOccurredAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    tags: Record<string, string>;
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}, {
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    tags?: Record<string, string> | undefined;
    triggerType?: "arrival" | "departure" | undefined;
    deletedAt?: import("../../types").Timestamp | null | undefined;
    location?: {
        triggerType: "arrival" | "departure";
        locationName: string;
        localLocationRef: string;
    } | undefined;
}>>;
export type TriggerWithId = z.infer<typeof triggerWithIdSchema>;
export declare const isValidTrigger: (value: unknown) => value is Trigger;
export declare const triggerHasLocation: (trigger: Trigger) => boolean;
