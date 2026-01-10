import z from "zod";
export declare const slider1To10QuestionStepSchema: z.ZodObject<{
    backgroundImage: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
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
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
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
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
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
    createdAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
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
    createdAt?: import("../../../../types").Timestamp | undefined;
    updatedAt?: import("../../../../types").Timestamp | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
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
    createdAt?: import("../../../../types").Timestamp | undefined;
    updatedAt?: import("../../../../types").Timestamp | undefined;
    backgroundImage?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
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
}>;
export type Slider1To10QuestionStep = z.infer<typeof slider1To10QuestionStepSchema>;
