import z from "zod";
export declare function objectOf<T extends z.ZodTypeAny>(schema: T): z.ZodRecord<z.ZodString, T>;
export declare function optionalObjectOf<T extends z.ZodTypeAny>(schema: T): z.ZodOptional<z.ZodRecord<z.ZodString, T>>;
