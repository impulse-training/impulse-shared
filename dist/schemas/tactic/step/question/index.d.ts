import { z } from "zod";
import { Slider1To10QuestionStep, slider1To10QuestionStepSchema } from "./slider1To10";
import { TextQuestionStep, textQuestionStepSchema } from "./text";
export * from "./slider1To10";
export * from "./text";
export { slider1To10QuestionStepSchema, textQuestionStepSchema };
export type QuestionStep = TextQuestionStep | Slider1To10QuestionStep;
export declare const isQuestionStepMode: (mode: string) => boolean;
export declare const questionStepSchema: z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
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
    mode: z.ZodLiteral<"question-text">;
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
    text: z.ZodString;
} & {
    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    text: string;
    mode: "question-text";
    createdAt?: import("../../../../types").Timestamp | undefined;
    updatedAt?: import("../../../../types").Timestamp | undefined;
    id?: string | undefined;
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
    suggestedResponses?: string[] | undefined;
}, {
    text: string;
    mode: "question-text";
    createdAt?: import("../../../../types").Timestamp | undefined;
    updatedAt?: import("../../../../types").Timestamp | undefined;
    id?: string | undefined;
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
    suggestedResponses?: string[] | undefined;
}>, z.ZodObject<{
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
    createdAt?: import("../../../../types").Timestamp | undefined;
    updatedAt?: import("../../../../types").Timestamp | undefined;
    id?: string | undefined;
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
    createdAt?: import("../../../../types").Timestamp | undefined;
    updatedAt?: import("../../../../types").Timestamp | undefined;
    id?: string | undefined;
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
}>]>;
export declare const questionStepIsTextQuestion: (value: Omit<QuestionStep, "id">) => value is TextQuestionStep;
export declare const isValidTextQuestionStep: (value: unknown) => value is TextQuestionStep;
export declare const questionStepIsSlider1To10Question: (value: Omit<QuestionStep, "id">) => value is Slider1To10QuestionStep;
export declare const isValidSlider1To10QuestionStep: (value: unknown) => value is Slider1To10QuestionStep;
export type QuestionStepTypes = {
    [K in QuestionStep["mode"]]: z.infer<(typeof QuestionStepSchemas)[K]>;
};
export declare const QuestionStepSchemas: {
    readonly "question-text": z.ZodObject<{
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
        mode: z.ZodLiteral<"question-text">;
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
        text: z.ZodString;
    } & {
        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        mode: "question-text";
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
        id?: string | undefined;
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
        suggestedResponses?: string[] | undefined;
    }, {
        text: string;
        mode: "question-text";
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
        id?: string | undefined;
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
        suggestedResponses?: string[] | undefined;
    }>;
    readonly "question-slider1To10": z.ZodObject<{
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
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
        id?: string | undefined;
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
        createdAt?: import("../../../../types").Timestamp | undefined;
        updatedAt?: import("../../../../types").Timestamp | undefined;
        id?: string | undefined;
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
};
export declare const isQuestionStep: (value: unknown) => value is QuestionStep;
