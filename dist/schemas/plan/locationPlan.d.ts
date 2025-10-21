import { z } from "zod";
export declare const locationPlanSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
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
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    summary?: string | undefined;
    isTemplate?: boolean | undefined;
    questions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
    lastUsedAt?: import("../../types").Timestamp | undefined;
    deletedAt?: import("../../types").Timestamp | undefined;
}>;
export type LocationPlan = z.infer<typeof locationPlanSchema>;
