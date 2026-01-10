import z from "zod";
export declare const userTimezoneSchema: z.ZodObject<{
    timezone: z.ZodString;
    timezoneOffset: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    timezone: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    timezoneOffset?: number | undefined;
}, {
    timezone: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    timezoneOffset?: number | undefined;
}>;
export type UserTimezones = z.infer<typeof userTimezoneSchema>;
