import { z } from "zod";
/**
 * A single tactic question step. The answer model is the shared `answerSpec`
 * (`text | choice | slider1To10`) — the same one debrief questions use. This
 * replaced the legacy `question-text` / `question-slider1To10` modes; see the
 * `preprocess` in `../index.ts` which lifts those legacy shapes on read.
 */
export declare const questionStepSchema: z.ZodObject<{
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
            lyrics: z.ZodOptional<z.ZodString>;
            lyricsAlignment: z.ZodOptional<z.ZodObject<{
                words: z.ZodArray<z.ZodObject<{
                    text: z.ZodString;
                    startS: z.ZodNumber;
                    endS: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    startS: number;
                    endS: number;
                }, {
                    text: string;
                    startS: number;
                    endS: number;
                }>, "many">;
                lines: z.ZodArray<z.ZodObject<{
                    text: z.ZodString;
                    startS: z.ZodNumber;
                    endS: z.ZodNumber;
                    wordStart: z.ZodNumber;
                    wordEnd: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }, {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            }, {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            }>>;
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
            lyrics?: string | undefined;
            lyricsAlignment?: {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            } | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            lyrics?: string | undefined;
            lyricsAlignment?: {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            } | undefined;
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
            lyrics?: string | undefined;
            lyricsAlignment?: {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            } | undefined;
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
            lyrics?: string | undefined;
            lyricsAlignment?: {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            } | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
} & {
    mode: z.ZodLiteral<"question">;
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../../../types").Timestamp, z.ZodTypeDef, import("../../../../types").Timestamp>>;
    text: z.ZodString;
    answerSpec: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"text">;
        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        suggestedResponses?: string[] | undefined;
    }, {
        type: "text";
        suggestedResponses?: string[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"choice">;
        options: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            label: string;
        }, {
            id: string;
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        options: {
            id: string;
            label: string;
        }[];
        type: "choice";
    }, {
        options: {
            id: string;
            label: string;
        }[];
        type: "choice";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"multiChoice">;
        options: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            label: string;
        }, {
            id: string;
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        options: {
            id: string;
            label: string;
        }[];
        type: "multiChoice";
    }, {
        options: {
            id: string;
            label: string;
        }[];
        type: "multiChoice";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"slider1To10">;
        sliderConfig: z.ZodDefault<z.ZodObject<{
            minLabel: z.ZodOptional<z.ZodString>;
            maxLabel: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }, {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "slider1To10";
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        };
    }, {
        type: "slider1To10";
        sliderConfig?: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        } | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    text: string;
    mode: "question";
    answerSpec: {
        type: "text";
        suggestedResponses?: string[] | undefined;
    } | {
        options: {
            id: string;
            label: string;
        }[];
        type: "choice";
    } | {
        options: {
            id: string;
            label: string;
        }[];
        type: "multiChoice";
    } | {
        type: "slider1To10";
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        };
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
            lyrics?: string | undefined;
            lyricsAlignment?: {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            } | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}, {
    text: string;
    mode: "question";
    answerSpec: {
        type: "text";
        suggestedResponses?: string[] | undefined;
    } | {
        options: {
            id: string;
            label: string;
        }[];
        type: "choice";
    } | {
        options: {
            id: string;
            label: string;
        }[];
        type: "multiChoice";
    } | {
        type: "slider1To10";
        sliderConfig?: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        } | undefined;
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
            lyrics?: string | undefined;
            lyricsAlignment?: {
                words: {
                    text: string;
                    startS: number;
                    endS: number;
                }[];
                lines: {
                    text: string;
                    startS: number;
                    endS: number;
                    wordStart: number;
                    wordEnd: number;
                }[];
            } | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    tags?: string[] | undefined;
}>;
export type QuestionStep = z.infer<typeof questionStepSchema>;
export declare const isQuestionStepMode: (mode: string) => boolean;
export declare const questionStepIsTextQuestion: (step: Pick<QuestionStep, "answerSpec">) => boolean;
export declare const questionStepIsSlider1To10Question: (step: Pick<QuestionStep, "answerSpec">) => boolean;
export declare const questionStepIsChoiceQuestion: (step: Pick<QuestionStep, "answerSpec">) => boolean;
export declare const isQuestionStep: (value: unknown) => value is QuestionStep;
