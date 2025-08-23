import { z } from "zod";
export declare const tacticLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"tactic">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            aiInstructions: z.ZodOptional<z.ZodString>;
            createdByUid: z.ZodOptional<z.ZodString>;
            steps: z.ZodArray<z.ZodDiscriminatedUnion<"mode", [z.ZodObject<{
                aiInstructions: z.ZodOptional<z.ZodString>;
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
            } & {
                mode: z.ZodOptional<z.ZodLiteral<"default">>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            }, {
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                aiInstructions: z.ZodOptional<z.ZodString>;
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
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            }, {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            }>, z.ZodObject<{
                aiInstructions: z.ZodOptional<z.ZodString>;
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
            } & {
                mode: z.ZodLiteral<"timer">;
                durationSeconds: z.ZodNumber;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            }, {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            }>, z.ZodObject<{
                aiInstructions: z.ZodOptional<z.ZodString>;
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
            } & {
                mode: z.ZodLiteral<"notifySupport">;
                groupId: z.ZodString;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            }, {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            }>, z.ZodObject<{
                aiInstructions: z.ZodOptional<z.ZodString>;
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
            } & {
                mode: z.ZodLiteral<"question">;
                question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    plans: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
                    text: z.ZodOptional<z.ZodString>;
                    question: z.ZodString;
                    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                    isPinned: z.ZodOptional<z.ZodBoolean>;
                    responseType: z.ZodLiteral<"text">;
                    scope: z.ZodOptional<z.ZodEnum<["impulse", "debrief", "plan"]>>;
                } & {
                    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    isTemplate: boolean;
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                }, {
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                }>, z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    plans: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
                    text: z.ZodOptional<z.ZodString>;
                    question: z.ZodString;
                    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                    isPinned: z.ZodOptional<z.ZodBoolean>;
                    responseType: z.ZodLiteral<"slider1To10">;
                    scope: z.ZodOptional<z.ZodEnum<["impulse", "debrief", "plan"]>>;
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
                    isTemplate: boolean;
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                }, {
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                }>, z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    plans: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
                    text: z.ZodOptional<z.ZodString>;
                    question: z.ZodString;
                    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                    isPinned: z.ZodOptional<z.ZodBoolean>;
                    responseType: z.ZodLiteral<"recap">;
                    scope: z.ZodOptional<z.ZodEnum<["impulse", "debrief", "plan"]>>;
                }, "strip", z.ZodTypeAny, {
                    isTemplate: boolean;
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                }, {
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                }>]>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                question: {
                    isTemplate: boolean;
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            }, {
                text: string;
                question: {
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            }>, z.ZodObject<Omit<{
                text: z.ZodOptional<z.ZodString>;
                aiInstructions: z.ZodOptional<z.ZodString>;
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
            }, "backgroundImage"> & {
                mode: z.ZodLiteral<"aiConversation">;
                goal: z.ZodString;
                prompt: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
            }, {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
            }>, z.ZodObject<{
                text: z.ZodOptional<z.ZodString>;
                aiInstructions: z.ZodOptional<z.ZodString>;
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
                aiInstructions?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            }>, z.ZodObject<{
                aiInstructions: z.ZodOptional<z.ZodString>;
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
            } & {
                mode: z.ZodLiteral<"affirmation">;
                text: z.ZodString;
                affirmationText: z.ZodString;
                repeatCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            }, {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            }>]>, "many">;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
            updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        }, "strip", z.ZodTypeAny, {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            title: string;
            steps: ({
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            } | {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                question: {
                    isTemplate: boolean;
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            } | {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            })[];
            id?: string | undefined;
            description?: string | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            tags?: string[] | undefined;
        }, {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            title: string;
            steps: ({
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            } | {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                question: {
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            } | {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            })[];
            id?: string | undefined;
            description?: string | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            tags?: string[] | undefined;
        }>;
        stepCount: z.ZodOptional<z.ZodNumber>;
        completedStepIndexes: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        completed: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            title: string;
            steps: ({
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            } | {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                question: {
                    isTemplate: boolean;
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            } | {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            })[];
            id?: string | undefined;
            description?: string | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            tags?: string[] | undefined;
        };
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    }, {
        tactic: {
            createdAt: import("../../types").Timestamp;
            updatedAt: import("../../types").Timestamp;
            title: string;
            steps: ({
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            } | {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                question: {
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            } | {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            })[];
            id?: string | undefined;
            description?: string | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            tags?: string[] | undefined;
        };
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
            title: string;
            steps: ({
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            } | {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                question: {
                    isTemplate: boolean;
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    isTemplate: boolean;
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            } | {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            })[];
            id?: string | undefined;
            description?: string | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            tags?: string[] | undefined;
        };
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
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
            title: string;
            steps: ({
                text: string;
                aiInstructions?: string | undefined;
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
                mode?: "default" | undefined;
            } | {
                mode: "breathing";
                breathingPattern: {
                    inhale: number;
                    exhale: number;
                    hold?: number | undefined;
                };
                text?: string | undefined;
                aiInstructions?: string | undefined;
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
                cycles?: number | undefined;
            } | {
                text: string;
                mode: "timer";
                durationSeconds: number;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "notifySupport";
                groupId: string;
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                question: {
                    responseType: "recap";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "slider1To10";
                    question: string;
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                } | {
                    responseType: "text";
                    question: string;
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "plan" | "debrief" | undefined;
                    suggestedResponses?: string[] | undefined;
                };
                mode: "question";
                aiInstructions?: string | undefined;
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
            } | {
                goal: string;
                mode: "aiConversation";
                text?: string | undefined;
                aiInstructions?: string | undefined;
                prompt?: string | undefined;
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
                aiInstructions?: string | undefined;
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
            } | {
                text: string;
                mode: "affirmation";
                affirmationText: string;
                repeatCount: number;
                aiInstructions?: string | undefined;
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
            })[];
            id?: string | undefined;
            description?: string | undefined;
            aiInstructions?: string | undefined;
            createdByUid?: string | undefined;
            tags?: string[] | undefined;
        };
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
        completed?: boolean | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
}>;
export type TacticLog = z.infer<typeof tacticLogSchema>;
