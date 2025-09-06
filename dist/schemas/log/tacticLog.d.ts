import { z } from "zod";
export declare const tacticLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    replyTactic: z.ZodOptional<z.ZodObject<{
        tactic: z.ZodAny;
        currentStepIndex: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currentStepIndex: number;
        tactic?: any;
    }, {
        currentStepIndex: number;
        tactic?: any;
    }>>;
} & {
    type: z.ZodLiteral<"tactic">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            aiInstructions: z.ZodOptional<z.ZodString>;
            createdByUid: z.ZodOptional<z.ZodString>;
            steps: z.ZodArray<z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodOptional<z.ZodLiteral<"default">>;
                text: z.ZodString;
                durationSeconds: z.ZodOptional<z.ZodNumber>;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                cycles?: number | undefined;
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
                cycles?: number | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                mode: z.ZodLiteral<"notifySupport">;
                groupId: z.ZodString;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            }, {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
            } & {
                suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
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
                text: z.ZodString;
                repeatCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            }, {
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            }>]>, "many">;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            indicated: z.ZodOptional<z.ZodString>;
            contraindicated: z.ZodOptional<z.ZodString>;
            effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
            timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
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
            createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
            updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        }, "strip", z.ZodTypeAny, {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                cycles?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                suggestedResponses?: string[] | undefined;
            })[];
            title?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            indicated?: string | undefined;
            contraindicated?: string | undefined;
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
        }, {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                cycles?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                suggestedResponses?: string[] | undefined;
            })[];
            title?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            indicated?: string | undefined;
            contraindicated?: string | undefined;
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
        }>;
        planId: z.ZodOptional<z.ZodString>;
        stepCount: z.ZodOptional<z.ZodNumber>;
        completedStepIndexes: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        completed: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                cycles?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                suggestedResponses?: string[] | undefined;
            })[];
            title?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            indicated?: string | undefined;
            contraindicated?: string | undefined;
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
        };
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    }, {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                cycles?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                suggestedResponses?: string[] | undefined;
            })[];
            title?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            indicated?: string | undefined;
            contraindicated?: string | undefined;
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
        };
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "tactic";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                cycles?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                suggestedResponses?: string[] | undefined;
            })[];
            title?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            indicated?: string | undefined;
            contraindicated?: string | undefined;
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
        };
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "tactic";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            steps: ({
                text: string;
                mode: "affirmation";
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                cycles?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                mode?: "default" | undefined;
                durationSeconds?: number | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
            } | {
                text: string;
                mode: "question-text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
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
                        meterings?: {
                            db: number;
                            timestampMs?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
                tags?: string[] | undefined;
                suggestedResponses?: string[] | undefined;
            })[];
            title?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            tags?: string[] | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            indicated?: string | undefined;
            contraindicated?: string | undefined;
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                defaultConversationMode?: "text" | "voice" | undefined;
                prompt?: string | undefined;
            } | undefined;
        };
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type TacticLog = z.infer<typeof tacticLogSchema>;
