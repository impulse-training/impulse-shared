import { z } from "zod";
export declare const demoSessionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    date: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    userId: z.ZodString;
    mode: z.ZodDefault<z.ZodEnum<["text", "voice"]>>;
    voiceEnabled: z.ZodOptional<z.ZodBoolean>;
    currentTactic: z.ZodOptional<z.ZodObject<{
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
    }>>;
    currentTacticStepIndex: z.ZodOptional<z.ZodNumber>;
    isDraft: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    showTactics: z.ZodOptional<z.ZodBoolean>;
    summaryData: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>>;
        tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
        behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
        outcomeLogs: z.ZodArray<z.ZodAny, "many">;
        plansLogs: z.ZodArray<z.ZodAny, "many">;
        metricLogs: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
        firstMessageLog: z.ZodOptional<z.ZodAny>;
        firstCallLog: z.ZodOptional<z.ZodAny>;
        hasContent: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        plansLogs: any[];
        hasContent: boolean;
        type?: "behavior" | "impulse" | "general" | "onboarding" | "recap" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment" | undefined;
        metricLogs?: any[] | undefined;
        firstMessageLog?: any;
        firstCallLog?: any;
    }, {
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        plansLogs: any[];
        hasContent: boolean;
        type?: "behavior" | "impulse" | "general" | "onboarding" | "recap" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment" | undefined;
        metricLogs?: any[] | undefined;
        firstMessageLog?: any;
        firstCallLog?: any;
    }>>;
    behaviorDataTotals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        behaviorId: z.ZodOptional<z.ZodString>;
        behaviorName: z.ZodOptional<z.ZodString>;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer", "scale"]>>;
        value: z.ZodOptional<z.ZodNumber>;
        formattedValue: z.ZodOptional<z.ZodString>;
        period: z.ZodOptional<z.ZodEnum<["daily", "weekly"]>>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | "scale" | undefined;
        formattedValue?: string | undefined;
        period?: "daily" | "weekly" | undefined;
    }, {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | "scale" | undefined;
        formattedValue?: string | undefined;
        period?: "daily" | "weekly" | undefined;
    }>, "many">>;
    defaultSystemPrompt: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    aiSummary: z.ZodOptional<z.ZodString>;
    summaryRequestedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    summarizedAt: z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    reflectRequestedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    origin: z.ZodOptional<z.ZodEnum<["native", "mac"]>>;
    source: z.ZodOptional<z.ZodEnum<["adjustment"]>>;
    timeUnspecified: z.ZodOptional<z.ZodBoolean>;
    triggerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    sharingMessage: z.ZodOptional<z.ZodString>;
    sharedWithUserIds: z.ZodArray<z.ZodString, "many">;
    sharedWithSupportGroups: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
    openAfter: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    firstOpenedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastReadAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    unreadSince: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    responseStartedProcessingAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    responseRequestId: z.ZodOptional<z.ZodString>;
    responseError: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    planStartedProcessingAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    startedPlanIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    completedPlanIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    activeCallLogId: z.ZodOptional<z.ZodString>;
    coachGuidanceItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
        sentAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        text: string;
        sentAt: import("../../types").Timestamp;
    }, {
        id: string;
        text: string;
        sentAt: import("../../types").Timestamp;
    }>, "many">>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    aiFinalizedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    startedDeletingAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    deletingError: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"demo">;
    demoVisitorIp: z.ZodOptional<z.ZodString>;
    demoVisitorFingerprint: z.ZodOptional<z.ZodString>;
    demoMaxDurationMs: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "demo";
    date: import("../../types").Timestamp;
    userId: string;
    dateString: string;
    title: string;
    mode: "text" | "voice";
    sharedWithUserIds: string[];
    isDraft: boolean;
    summarizedAt: import("../../types").Timestamp | null;
    sharedWithSupportGroups: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    source?: "adjustment" | undefined;
    tags?: Record<string, string[]> | undefined;
    agentConnectedAt?: import("../../types").Timestamp | undefined;
    summary?: string | undefined;
    triggerId?: string | null | undefined;
    voiceEnabled?: boolean | undefined;
    currentTactic?: {
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
    } | undefined;
    currentTacticStepIndex?: number | undefined;
    showTactics?: boolean | undefined;
    summaryData?: {
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        plansLogs: any[];
        hasContent: boolean;
        type?: "behavior" | "impulse" | "general" | "onboarding" | "recap" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment" | undefined;
        metricLogs?: any[] | undefined;
        firstMessageLog?: any;
        firstCallLog?: any;
    } | undefined;
    behaviorDataTotals?: {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | "scale" | undefined;
        formattedValue?: string | undefined;
        period?: "daily" | "weekly" | undefined;
    }[] | undefined;
    defaultSystemPrompt?: string | undefined;
    aiSummary?: string | undefined;
    summaryRequestedAt?: import("../../types").Timestamp | undefined;
    reflectRequestedAt?: import("../../types").Timestamp | undefined;
    origin?: "native" | "mac" | undefined;
    timeUnspecified?: boolean | undefined;
    sharingMessage?: string | undefined;
    openAfter?: import("../../types").Timestamp | undefined;
    firstOpenedAt?: import("../../types").Timestamp | undefined;
    lastReadAt?: import("../../types").Timestamp | undefined;
    unreadSince?: import("../../types").Timestamp | undefined;
    responseStartedProcessingAt?: import("../../types").Timestamp | undefined;
    responseRequestId?: string | undefined;
    responseError?: string | null | undefined;
    planStartedProcessingAt?: import("../../types").Timestamp | undefined;
    startedPlanIds?: string[] | undefined;
    completedPlanIds?: string[] | undefined;
    activeCallLogId?: string | undefined;
    coachGuidanceItems?: {
        id: string;
        text: string;
        sentAt: import("../../types").Timestamp;
    }[] | undefined;
    aiFinalizedAt?: import("../../types").Timestamp | undefined;
    startedDeletingAt?: import("../../types").Timestamp | undefined;
    deletingError?: string | undefined;
    demoVisitorIp?: string | undefined;
    demoVisitorFingerprint?: string | undefined;
    demoMaxDurationMs?: number | undefined;
}, {
    type: "demo";
    date: import("../../types").Timestamp;
    userId: string;
    dateString: string;
    title: string;
    sharedWithUserIds: string[];
    summarizedAt: import("../../types").Timestamp | null;
    sharedWithSupportGroups: import("../..").DocumentReferenceLike<unknown>[];
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    behaviorIds?: string[] | undefined;
    source?: "adjustment" | undefined;
    tags?: Record<string, string[]> | undefined;
    mode?: "text" | "voice" | undefined;
    agentConnectedAt?: import("../../types").Timestamp | undefined;
    summary?: string | undefined;
    triggerId?: string | null | undefined;
    voiceEnabled?: boolean | undefined;
    currentTactic?: {
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
    } | undefined;
    currentTacticStepIndex?: number | undefined;
    isDraft?: boolean | undefined;
    showTactics?: boolean | undefined;
    summaryData?: {
        tacticsByTitle: Record<string, any[]>;
        behaviorsByName: Record<string, any[]>;
        outcomeLogs: any[];
        plansLogs: any[];
        hasContent: boolean;
        type?: "behavior" | "impulse" | "general" | "onboarding" | "recap" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment" | undefined;
        metricLogs?: any[] | undefined;
        firstMessageLog?: any;
        firstCallLog?: any;
    } | undefined;
    behaviorDataTotals?: {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | "scale" | undefined;
        formattedValue?: string | undefined;
        period?: "daily" | "weekly" | undefined;
    }[] | undefined;
    defaultSystemPrompt?: string | undefined;
    aiSummary?: string | undefined;
    summaryRequestedAt?: import("../../types").Timestamp | undefined;
    reflectRequestedAt?: import("../../types").Timestamp | undefined;
    origin?: "native" | "mac" | undefined;
    timeUnspecified?: boolean | undefined;
    sharingMessage?: string | undefined;
    openAfter?: import("../../types").Timestamp | undefined;
    firstOpenedAt?: import("../../types").Timestamp | undefined;
    lastReadAt?: import("../../types").Timestamp | undefined;
    unreadSince?: import("../../types").Timestamp | undefined;
    responseStartedProcessingAt?: import("../../types").Timestamp | undefined;
    responseRequestId?: string | undefined;
    responseError?: string | null | undefined;
    planStartedProcessingAt?: import("../../types").Timestamp | undefined;
    startedPlanIds?: string[] | undefined;
    completedPlanIds?: string[] | undefined;
    activeCallLogId?: string | undefined;
    coachGuidanceItems?: {
        id: string;
        text: string;
        sentAt: import("../../types").Timestamp;
    }[] | undefined;
    aiFinalizedAt?: import("../../types").Timestamp | undefined;
    startedDeletingAt?: import("../../types").Timestamp | undefined;
    deletingError?: string | undefined;
    demoVisitorIp?: string | undefined;
    demoVisitorFingerprint?: string | undefined;
    demoMaxDurationMs?: number | undefined;
}>;
export type DemoSession = z.infer<typeof demoSessionSchema>;
