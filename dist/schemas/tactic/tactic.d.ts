import { z } from "zod";
export declare const questionResponseIndicationSchema: z.ZodObject<{
    questionId: z.ZodString;
    questionPrompt: z.ZodString;
    responseSubstrings: z.ZodArray<z.ZodString, "many">;
    weight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    questionId: string;
    questionPrompt: string;
    responseSubstrings: string[];
    weight: number;
}, {
    questionId: string;
    questionPrompt: string;
    responseSubstrings: string[];
    weight: number;
}>;
export declare const behaviorIndicationSchema: z.ZodObject<{
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
}>;
export declare const tagIndicationSchema: z.ZodObject<{
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
}>;
export declare const indicationSchema: z.ZodObject<{
    questionResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        questionId: z.ZodString;
        questionPrompt: z.ZodString;
        responseSubstrings: z.ZodArray<z.ZodString, "many">;
        weight: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        questionId: string;
        questionPrompt: string;
        responseSubstrings: string[];
        weight: number;
    }, {
        questionId: string;
        questionPrompt: string;
        responseSubstrings: string[];
        weight: number;
    }>, "many">>;
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
    questionResponses?: {
        questionId: string;
        questionPrompt: string;
        responseSubstrings: string[];
        weight: number;
    }[] | undefined;
    behaviors?: {
        behaviorId: string;
        behaviorName: string;
        weight: number;
    }[] | undefined;
}, {
    tags?: {
        weight: number;
        tagGroupName: string;
        optionLabels: string[];
    }[] | undefined;
    questionResponses?: {
        questionId: string;
        questionPrompt: string;
        responseSubstrings: string[];
        weight: number;
    }[] | undefined;
    behaviors?: {
        behaviorId: string;
        behaviorName: string;
        weight: number;
    }[] | undefined;
}>;
export declare const tacticPhaseSchema: z.ZodEnum<["regulate", "shift", "reengage"]>;
export type TacticPhase = z.infer<typeof tacticPhaseSchema>;
export declare const tacticSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    aiInstructions: z.ZodOptional<z.ZodString>;
    createdByUid: z.ZodOptional<z.ZodString>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    phase: z.ZodOptional<z.ZodEnum<["regulate", "shift", "reengage"]>>;
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
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        tags?: string[] | undefined;
    }>]>, "many">;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isMultiStep: z.ZodOptional<z.ZodBoolean>;
    autoplay: z.ZodOptional<z.ZodBoolean>;
    indications: z.ZodOptional<z.ZodObject<{
        questionResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            questionId: z.ZodString;
            questionPrompt: z.ZodString;
            responseSubstrings: z.ZodArray<z.ZodString, "many">;
            weight: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }, {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }>, "many">>;
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
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    }, {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    }>>;
    contraindications: z.ZodOptional<z.ZodObject<{
        questionResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            questionId: z.ZodString;
            questionPrompt: z.ZodString;
            responseSubstrings: z.ZodArray<z.ZodString, "many">;
            weight: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }, {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }>, "many">>;
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
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    }, {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    }>>;
    completionTrigger: z.ZodOptional<z.ZodEnum<["device-restart"]>>;
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
    generationStatus: z.ZodOptional<z.ZodEnum<["pending", "processing", "completed", "failed"]>>;
    generationError: z.ZodOptional<z.ZodString>;
    generationProvider: z.ZodOptional<z.ZodString>;
    generationProviderJobId: z.ZodOptional<z.ZodString>;
    generationPrompt: z.ZodOptional<z.ZodString>;
    generationVoice: z.ZodOptional<z.ZodNullable<z.ZodEnum<["m", "f"]>>>;
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
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        tags?: string[] | undefined;
        suggestedResponses?: string[] | undefined;
    })[];
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    tags?: string[] | undefined;
    autoplay?: boolean | undefined;
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
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    } | undefined;
    contraindications?: {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    } | undefined;
    completionTrigger?: "device-restart" | undefined;
    effectiveness?: "medium" | "low" | "high" | undefined;
    timeToComplete?: "medium" | "long" | "quick" | undefined;
    aiConfiguration?: {
        goal: string;
        defaultConversationMode?: "text" | "voice" | undefined;
        prompt?: string | undefined;
    } | undefined;
    generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
    generationError?: string | undefined;
    generationProvider?: string | undefined;
    generationProviderJobId?: string | undefined;
    generationPrompt?: string | undefined;
    generationVoice?: "m" | "f" | null | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    steps: ({
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
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        tags?: string[] | undefined;
        repeatCount?: number | undefined;
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
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        tags?: string[] | undefined;
        suggestedResponses?: string[] | undefined;
    })[];
    id?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    tags?: string[] | undefined;
    autoplay?: boolean | undefined;
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
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    } | undefined;
    contraindications?: {
        tags?: {
            weight: number;
            tagGroupName: string;
            optionLabels: string[];
        }[] | undefined;
        questionResponses?: {
            questionId: string;
            questionPrompt: string;
            responseSubstrings: string[];
            weight: number;
        }[] | undefined;
        behaviors?: {
            behaviorId: string;
            behaviorName: string;
            weight: number;
        }[] | undefined;
    } | undefined;
    completionTrigger?: "device-restart" | undefined;
    effectiveness?: "medium" | "low" | "high" | undefined;
    timeToComplete?: "medium" | "long" | "quick" | undefined;
    aiConfiguration?: {
        goal: string;
        defaultConversationMode?: "text" | "voice" | undefined;
        prompt?: string | undefined;
    } | undefined;
    generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
    generationError?: string | undefined;
    generationProvider?: string | undefined;
    generationProviderJobId?: string | undefined;
    generationPrompt?: string | undefined;
    generationVoice?: "m" | "f" | null | undefined;
}>;
export type Tactic = z.infer<typeof tacticSchema>;
export type QuestionResponseIndication = z.infer<typeof questionResponseIndicationSchema>;
export type BehaviorIndication = z.infer<typeof behaviorIndicationSchema>;
export type TagIndication = z.infer<typeof tagIndicationSchema>;
export type Indication = z.infer<typeof indicationSchema>;
