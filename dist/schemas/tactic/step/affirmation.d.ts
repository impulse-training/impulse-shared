import z from "zod";
export declare const affirmationStepSchema: z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
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
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
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
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
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
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
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
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
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
}>;
export type AffirmationStep = z.infer<typeof affirmationStepSchema>;
