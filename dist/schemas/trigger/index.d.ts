import { z } from "zod";
export declare const triggerLocationSchema: z.ZodObject<{
    locationName: z.ZodString;
    address: z.ZodString;
    triggerType: z.ZodEnum<["arrival", "departure"]>;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    locationName: string;
    latitude: number;
    longitude: number;
    address: string;
    triggerType: "arrival" | "departure";
}, {
    locationName: string;
    latitude: number;
    longitude: number;
    address: string;
    triggerType: "arrival" | "departure";
}>;
export type TriggerLocation = z.infer<typeof triggerLocationSchema>;
export declare const triggerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    tags: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodOptional<z.ZodString>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    triggerType: z.ZodOptional<z.ZodEnum<["arrival", "departure"]>>;
    /** @deprecated Use triggerType + location tag group option coordinates instead */
    location: z.ZodOptional<z.ZodObject<{
        locationName: z.ZodString;
        address: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    }, {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    }>>;
    lastOccurredAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    tags: Record<string, string>;
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    behaviorIds?: string[] | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    location?: {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    } | undefined;
    triggerType?: "arrival" | "departure" | undefined;
}, {
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    behaviorIds?: string[] | undefined;
    tags?: Record<string, string> | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    location?: {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    } | undefined;
    triggerType?: "arrival" | "departure" | undefined;
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
    /** @deprecated Use triggerType + location tag group option coordinates instead */
    location: z.ZodOptional<z.ZodObject<{
        locationName: z.ZodString;
        address: z.ZodString;
        triggerType: z.ZodEnum<["arrival", "departure"]>;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    }, {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    }>>;
    lastOccurredAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    tags: Record<string, string>;
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    behaviorIds?: string[] | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    location?: {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    } | undefined;
    triggerType?: "arrival" | "departure" | undefined;
}, {
    lastOccurredAt: import("../../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    ordinal?: number | undefined;
    behaviorIds?: string[] | undefined;
    tags?: Record<string, string> | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
    location?: {
        locationName: string;
        latitude: number;
        longitude: number;
        address: string;
        triggerType: "arrival" | "departure";
    } | undefined;
    triggerType?: "arrival" | "departure" | undefined;
}>>;
export type TriggerWithId = z.infer<typeof triggerWithIdSchema>;
export declare const isValidTrigger: (value: unknown) => value is Trigger;
export declare const triggerHasLocation: (trigger: Trigger) => boolean;
