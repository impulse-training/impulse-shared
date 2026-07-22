import { z } from "zod";
/** Response to a tactic question step, typed off the shared answer-type enum. */
export declare const tacticResponseSchema: z.ZodObject<{
    responseType: z.ZodEnum<["text", "choice", "multiChoice", "slider1To10"]>;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    formattedValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string | number;
    formattedValue: string;
    responseType: "text" | "choice" | "multiChoice" | "slider1To10";
}, {
    value: string | number;
    formattedValue: string;
    responseType: "text" | "choice" | "multiChoice" | "slider1To10";
}>;
export type TacticResponse = z.infer<typeof tacticResponseSchema>;
export declare const tacticLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"tactic">;
    isDisplayable: z.ZodBoolean;
    data: z.ZodObject<{
        tactic: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                imageUrl: z.ZodOptional<z.ZodString>;
                domain: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }, {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }>, "many">>;
            notes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
            }, {
                text: string;
            }>, "many">>;
            aiInstructions: z.ZodOptional<z.ZodString>;
            createdByUid: z.ZodOptional<z.ZodString>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
            steps: z.ZodArray<z.ZodEffects<z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodOptional<z.ZodLiteral<"default">>;
                text: z.ZodString;
                durationSeconds: z.ZodOptional<z.ZodNumber>;
                requiresPhotoVerification: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
                requiresPhotoVerification?: boolean | undefined;
            }, {
                text: string;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
                requiresPhotoVerification?: boolean | undefined;
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"breathing">;
                breathingPattern: z.ZodObject<{
                    inhale: z.ZodNumber;
                    hold: z.ZodOptional<z.ZodNumber>;
                    exhale: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                }, {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                }>;
                cycles: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                cycles?: number | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                cycles?: number | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, z.ZodObject<{
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"capture">;
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                placeholder: z.ZodOptional<z.ZodString>;
                behaviorId: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "capture";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                behaviorId?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                placeholder?: string | undefined;
            }, {
                text: string;
                mode: "capture";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                behaviorId?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                placeholder?: string | undefined;
            }>, z.ZodObject<{
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"notifySupport">;
                groupId: z.ZodString;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                groupId: string;
                mode: "notifySupport";
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                groupId: string;
                mode: "notifySupport";
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, z.ZodObject<{
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"media">;
                media: z.ZodArray<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                mode: "media";
                media: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }[];
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: "media";
                media: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }[];
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"audio">;
                audio: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId: z.ZodOptional<z.ZodString>;
                autoplay: z.ZodOptional<z.ZodBoolean>;
                loopCount: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                mode: "audio";
                audio?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId?: string | undefined;
                autoplay?: boolean | undefined;
                loopCount?: number | undefined;
            }, {
                mode: "audio";
                audio?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId?: string | undefined;
                autoplay?: boolean | undefined;
                loopCount?: number | undefined;
            }>, z.ZodObject<{
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: "affirmation";
                affirmationText: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                repeatCount?: number | undefined;
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"pedometer">;
                targetSteps: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                mode: "pedometer";
                targetSteps: number;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: "pedometer";
                targetSteps: number;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"phoneCall">;
                contactName: z.ZodString;
                phoneNumber: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                mode: "phoneCall";
                contactName: string;
                phoneNumber: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: "phoneCall";
                contactName: string;
                phoneNumber: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                backgroundImage: z.ZodOptional<z.ZodObject<{
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"zara">;
                direction: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mode: "zara";
                text?: string | undefined;
                direction?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: "zara";
                text?: string | undefined;
                direction?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }>]>, {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "audio";
                audio?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId?: string | undefined;
                autoplay?: boolean | undefined;
                loopCount?: number | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                cycles?: number | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                mode: "capture";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                behaviorId?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                placeholder?: string | undefined;
            } | {
                text: string;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
                requiresPhotoVerification?: boolean | undefined;
            } | {
                mode: "media";
                media: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }[];
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "pedometer";
                targetSteps: number;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                groupId: string;
                mode: "notifySupport";
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "phoneCall";
                contactName: string;
                phoneNumber: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "zara";
                text?: string | undefined;
                direction?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            }, unknown>, "many">;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            isMultiStep: z.ZodOptional<z.ZodBoolean>;
            autoplay: z.ZodOptional<z.ZodBoolean>;
            indications: z.ZodOptional<z.ZodObject<{
                behaviors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    behaviorId: z.ZodString;
                    behaviorName: z.ZodString;
                    weight: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }, {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }>, "many">>;
                behaviorTopics: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    behaviorTopicId: z.ZodString;
                    weight: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    behaviorTopicId: string;
                    weight: number;
                }, {
                    behaviorTopicId: string;
                    weight: number;
                }>, "many">>;
                tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    tagGroupName: z.ZodString;
                    optionLabels: z.ZodArray<z.ZodString, "many">;
                    weight: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }, {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            }, {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            }>>;
            contraindications: z.ZodOptional<z.ZodObject<{
                behaviors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    behaviorId: z.ZodString;
                    behaviorName: z.ZodString;
                    weight: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }, {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }>, "many">>;
                behaviorTopics: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    behaviorTopicId: z.ZodString;
                    weight: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    behaviorTopicId: string;
                    weight: number;
                }, {
                    behaviorTopicId: string;
                    weight: number;
                }>, "many">>;
                tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    tagGroupName: z.ZodString;
                    optionLabels: z.ZodArray<z.ZodString, "many">;
                    weight: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }, {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            }, {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            }>>;
            completionTrigger: z.ZodOptional<z.ZodEnum<["device-restart"]>>;
            effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
            timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
            effort: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
            worksAnywhere: z.ZodOptional<z.ZodBoolean>;
            presumesState: z.ZodOptional<z.ZodString>;
            aiConfiguration: z.ZodOptional<z.ZodObject<{
                defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
                goal: z.ZodString;
                prompt: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            }, {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            }>>;
            generationStatus: z.ZodOptional<z.ZodEnum<["pending", "processing", "completed", "failed"]>>;
            generationError: z.ZodOptional<z.ZodString>;
            generationProvider: z.ZodOptional<z.ZodString>;
            generationProviderJobId: z.ZodOptional<z.ZodString>;
            generationPrompt: z.ZodOptional<z.ZodString>;
            generationVoice: z.ZodOptional<z.ZodNullable<z.ZodEnum<["m", "f"]>>>;
            collectionTemplateIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
            updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        }, "strip", z.ZodTypeAny, {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "audio";
                audio?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId?: string | undefined;
                autoplay?: boolean | undefined;
                loopCount?: number | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                cycles?: number | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                mode: "capture";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                behaviorId?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                placeholder?: string | undefined;
            } | {
                text: string;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
                requiresPhotoVerification?: boolean | undefined;
            } | {
                mode: "media";
                media: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }[];
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "pedometer";
                targetSteps: number;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                groupId: string;
                mode: "notifySupport";
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "phoneCall";
                contactName: string;
                phoneNumber: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "zara";
                text?: string | undefined;
                direction?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            })[];
            id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            autoplay?: boolean | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            notes?: {
                text: string;
            }[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            recommended?: boolean | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
            isMultiStep?: boolean | undefined;
            indications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            contraindications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            completionTrigger?: "device-restart" | undefined;
            effectiveness?: "medium" | "low" | "high" | undefined;
            timeToComplete?: "medium" | "long" | "quick" | undefined;
            effort?: "medium" | "low" | "high" | undefined;
            worksAnywhere?: boolean | undefined;
            presumesState?: string | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
            generationStatus?: "completed" | "pending" | "processing" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        }, {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: unknown[];
            id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            autoplay?: boolean | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            notes?: {
                text: string;
            }[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            recommended?: boolean | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
            isMultiStep?: boolean | undefined;
            indications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            contraindications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            completionTrigger?: "device-restart" | undefined;
            effectiveness?: "medium" | "low" | "high" | undefined;
            timeToComplete?: "medium" | "long" | "quick" | undefined;
            effort?: "medium" | "low" | "high" | undefined;
            worksAnywhere?: boolean | undefined;
            presumesState?: string | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
            generationStatus?: "completed" | "pending" | "processing" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        }>;
        tacticRefPath: z.ZodString;
        planId: z.ZodOptional<z.ZodString>;
        planLogId: z.ZodOptional<z.ZodString>;
        stepCount: z.ZodOptional<z.ZodNumber>;
        completedStepIndexes: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        completed: z.ZodOptional<z.ZodBoolean>;
        autoAdvanced: z.ZodOptional<z.ZodBoolean>;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "choice", "multiChoice", "slider1To10"]>;
            value: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
            formattedValue: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string | number;
            formattedValue: string;
            responseType: "text" | "choice" | "multiChoice" | "slider1To10";
        }, {
            value: string | number;
            formattedValue: string;
            responseType: "text" | "choice" | "multiChoice" | "slider1To10";
        }>>;
        conversationSummary: z.ZodOptional<z.ZodString>;
        startedSummarizingConversationAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        finishedSummarizingConversationAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        verificationPhotos: z.ZodOptional<z.ZodRecord<z.ZodNumber, z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
        }>>>;
        rating: z.ZodOptional<z.ZodEnum<["helpful", "not_helpful"]>>;
        ratedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "audio";
                audio?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId?: string | undefined;
                autoplay?: boolean | undefined;
                loopCount?: number | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                cycles?: number | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                mode: "capture";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                behaviorId?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                placeholder?: string | undefined;
            } | {
                text: string;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
                requiresPhotoVerification?: boolean | undefined;
            } | {
                mode: "media";
                media: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }[];
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "pedometer";
                targetSteps: number;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                groupId: string;
                mode: "notifySupport";
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "phoneCall";
                contactName: string;
                phoneNumber: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "zara";
                text?: string | undefined;
                direction?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            })[];
            id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            autoplay?: boolean | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            notes?: {
                text: string;
            }[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            recommended?: boolean | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
            isMultiStep?: boolean | undefined;
            indications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            contraindications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            completionTrigger?: "device-restart" | undefined;
            effectiveness?: "medium" | "low" | "high" | undefined;
            timeToComplete?: "medium" | "long" | "quick" | undefined;
            effort?: "medium" | "low" | "high" | undefined;
            worksAnywhere?: boolean | undefined;
            presumesState?: string | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
            generationStatus?: "completed" | "pending" | "processing" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        };
        tacticRefPath: string;
        completed?: boolean | undefined;
        planId?: string | undefined;
        planLogId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        autoAdvanced?: boolean | undefined;
        response?: {
            value: string | number;
            formattedValue: string;
            responseType: "text" | "choice" | "multiChoice" | "slider1To10";
        } | undefined;
        conversationSummary?: string | undefined;
        startedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        finishedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        verificationPhotos?: Record<number, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
        }> | undefined;
        rating?: "helpful" | "not_helpful" | undefined;
        ratedAt?: import("../../types").Timestamp | undefined;
    }, {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: unknown[];
            id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            autoplay?: boolean | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            notes?: {
                text: string;
            }[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            recommended?: boolean | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
            isMultiStep?: boolean | undefined;
            indications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            contraindications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            completionTrigger?: "device-restart" | undefined;
            effectiveness?: "medium" | "low" | "high" | undefined;
            timeToComplete?: "medium" | "long" | "quick" | undefined;
            effort?: "medium" | "low" | "high" | undefined;
            worksAnywhere?: boolean | undefined;
            presumesState?: string | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
            generationStatus?: "completed" | "pending" | "processing" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        };
        tacticRefPath: string;
        completed?: boolean | undefined;
        planId?: string | undefined;
        planLogId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        autoAdvanced?: boolean | undefined;
        response?: {
            value: string | number;
            formattedValue: string;
            responseType: "text" | "choice" | "multiChoice" | "slider1To10";
        } | undefined;
        conversationSummary?: string | undefined;
        startedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        finishedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        verificationPhotos?: Record<number, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
        }> | undefined;
        rating?: "helpful" | "not_helpful" | undefined;
        ratedAt?: import("../../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: boolean;
    data: {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "audio";
                audio?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                generationJobId?: string | undefined;
                autoplay?: boolean | undefined;
                loopCount?: number | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                cycles?: number | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                mode: "capture";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                behaviorId?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                placeholder?: string | undefined;
            } | {
                text: string;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
                requiresPhotoVerification?: boolean | undefined;
            } | {
                mode: "media";
                media: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                }[];
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "pedometer";
                targetSteps: number;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                text: string;
                groupId: string;
                mode: "notifySupport";
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "phoneCall";
                contactName: string;
                phoneNumber: string;
                text?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            } | {
                mode: "zara";
                text?: string | undefined;
                direction?: string | undefined;
                backgroundImage?: {
                    uri: string;
                    storagePath: string;
                    contentType: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
            })[];
            id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            autoplay?: boolean | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            notes?: {
                text: string;
            }[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            recommended?: boolean | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
            isMultiStep?: boolean | undefined;
            indications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            contraindications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            completionTrigger?: "device-restart" | undefined;
            effectiveness?: "medium" | "low" | "high" | undefined;
            timeToComplete?: "medium" | "long" | "quick" | undefined;
            effort?: "medium" | "low" | "high" | undefined;
            worksAnywhere?: boolean | undefined;
            presumesState?: string | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
            generationStatus?: "completed" | "pending" | "processing" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        };
        tacticRefPath: string;
        completed?: boolean | undefined;
        planId?: string | undefined;
        planLogId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        autoAdvanced?: boolean | undefined;
        response?: {
            value: string | number;
            formattedValue: string;
            responseType: "text" | "choice" | "multiChoice" | "slider1To10";
        } | undefined;
        conversationSummary?: string | undefined;
        startedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        finishedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        verificationPhotos?: Record<number, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
        }> | undefined;
        rating?: "helpful" | "not_helpful" | undefined;
        ratedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: boolean;
    data: {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: unknown[];
            id?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            autoplay?: boolean | undefined;
            links?: {
                url: string;
                title?: string | undefined;
                imageUrl?: string | undefined;
                domain?: string | undefined;
            }[] | undefined;
            notes?: {
                text: string;
            }[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            recommended?: boolean | undefined;
            phase?: "shift" | "regulate" | "reengage" | undefined;
            isMultiStep?: boolean | undefined;
            indications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            contraindications?: {
                tags?: {
                    weight: number;
                    tagGroupName: string;
                    optionLabels: string[];
                }[] | undefined;
                behaviors?: {
                    behaviorId: string;
                    behaviorName: string;
                    weight: number;
                }[] | undefined;
                behaviorTopics?: {
                    behaviorTopicId: string;
                    weight: number;
                }[] | undefined;
            } | undefined;
            completionTrigger?: "device-restart" | undefined;
            effectiveness?: "medium" | "low" | "high" | undefined;
            timeToComplete?: "medium" | "long" | "quick" | undefined;
            effort?: "medium" | "low" | "high" | undefined;
            worksAnywhere?: boolean | undefined;
            presumesState?: string | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
            generationStatus?: "completed" | "pending" | "processing" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        };
        tacticRefPath: string;
        completed?: boolean | undefined;
        planId?: string | undefined;
        planLogId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        autoAdvanced?: boolean | undefined;
        response?: {
            value: string | number;
            formattedValue: string;
            responseType: "text" | "choice" | "multiChoice" | "slider1To10";
        } | undefined;
        conversationSummary?: string | undefined;
        startedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        finishedSummarizingConversationAt?: import("../../types").Timestamp | undefined;
        verificationPhotos?: Record<number, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
        }> | undefined;
        rating?: "helpful" | "not_helpful" | undefined;
        ratedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}>;
export type TacticLog = z.infer<typeof tacticLogSchema>;
