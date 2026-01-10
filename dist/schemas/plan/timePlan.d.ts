import { z } from "zod";
export declare const timePlanSchema: z.ZodObject<{
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
}>;
export type TimePlan = z.infer<typeof timePlanSchema>;
