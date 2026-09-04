import { z } from "zod";
/**
 * How long a voice call took to become a conversation, in milliseconds.
 *
 * Durations, not timestamps, and deliberately split by whose clock measured
 * them. The four `fromButton*` figures all come from ONE clock — the phone's,
 * started at the button press — because the two events that actually define the
 * user-facing number (the tap, and the first word they hear) both happen on the
 * device. Stitching that number out of client and server timestamps instead
 * would be measuring clock skew as much as latency.
 *
 * The remaining fields are each measured wholly inside one process, so they say
 * where the time went without ever being compared across machines.
 */
export declare const callTimingsSchema: z.ZodObject<{
    /** Token request sent. Covers session creation and the doc round-trip. */
    fromButtonToTokenRequestMs: z.ZodOptional<z.ZodNumber>;
    /**
     * The call UI replaced the chat composer.
     *
     * Not a step in the connection chain — the call is coming up regardless of
     * what is painted — but it is the only part of the wait the user can SEE, and
     * it is the part they complain about. Every other figure here is about audio;
     * without this one, "it showed the text view for a second first" is
     * unfalsifiable.
     */
    fromButtonToVoiceUiMs: z.ZodOptional<z.ZodNumber>;
    /**
     * Which mode the composer painted in FIRST.
     *
     * "text" means the chat composer was genuinely on screen before the call UI
     * replaced it. "voice" means it never was, and any perceived delay is the
     * navigation animation or the loading gate — a different problem with a
     * different fix.
     */
    composerFirstMode: z.ZodOptional<z.ZodEnum<["text", "voice"]>>;
    /** Token landed on this device (today: written to Firestore, then synced). */
    fromButtonToTokenReceivedMs: z.ZodOptional<z.ZodNumber>;
    /** LiveKit room connected. */
    fromButtonToRoomConnectedMs: z.ZodOptional<z.ZodNumber>;
    /** THE headline: the first word the user actually hears. */
    fromButtonToFirstAudioMs: z.ZodOptional<z.ZodNumber>;
    /** issueCallToken wall time, server-side (Firestore writes + 3 LiveKit calls). */
    serverTokenMs: z.ZodOptional<z.ZodNumber>;
    /** Agent: building the per-session context and instructions. */
    agentContextBuildMs: z.ZodOptional<z.ZodNumber>;
    /** Agent: opening the OpenAI Realtime session. */
    agentRealtimeStartMs: z.ZodOptional<z.ZodNumber>;
    /** Agent: room join to asking the model for the opening line. */
    agentJoinToReplyMs: z.ZodOptional<z.ZodNumber>;
    /**
     * Which affordance started the call, so a slow path can be told from a slow
     * moment: "default_mode" is the impulse button opening straight into a call,
     * "toggle" is the user switching an existing session over.
     */
    entry: z.ZodOptional<z.ZodEnum<["default_mode", "toggle", "unknown"]>>;
}, "strip", z.ZodTypeAny, {
    fromButtonToTokenRequestMs?: number | undefined;
    fromButtonToVoiceUiMs?: number | undefined;
    composerFirstMode?: "text" | "voice" | undefined;
    fromButtonToTokenReceivedMs?: number | undefined;
    fromButtonToRoomConnectedMs?: number | undefined;
    fromButtonToFirstAudioMs?: number | undefined;
    serverTokenMs?: number | undefined;
    agentContextBuildMs?: number | undefined;
    agentRealtimeStartMs?: number | undefined;
    agentJoinToReplyMs?: number | undefined;
    entry?: "unknown" | "default_mode" | "toggle" | undefined;
}, {
    fromButtonToTokenRequestMs?: number | undefined;
    fromButtonToVoiceUiMs?: number | undefined;
    composerFirstMode?: "text" | "voice" | undefined;
    fromButtonToTokenReceivedMs?: number | undefined;
    fromButtonToRoomConnectedMs?: number | undefined;
    fromButtonToFirstAudioMs?: number | undefined;
    serverTokenMs?: number | undefined;
    agentContextBuildMs?: number | undefined;
    agentRealtimeStartMs?: number | undefined;
    agentJoinToReplyMs?: number | undefined;
    entry?: "unknown" | "default_mode" | "toggle" | undefined;
}>;
export type CallTimings = z.infer<typeof callTimingsSchema>;
export declare const callLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"call">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodOptional<z.ZodObject<{
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
            understanding: z.ZodOptional<z.ZodObject<{
                satisfies: z.ZodOptional<z.ZodArray<z.ZodEnum<["relaxation", "stimulation", "escape", "connection", "control", "pleasure", "achievement", "boredom_relief", "comfort", "focus"]>, "many">>;
                note: z.ZodOptional<z.ZodString>;
                avoidWhen: z.ZodOptional<z.ZodString>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            }, "strip", z.ZodTypeAny, {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            }, {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            }>>;
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
                        lyrics?: string | undefined;
                        lyricsAlignment?: {
                            words: {
                                text: string;
                                startS: number;
                                endS: number;
                            }[];
                            lines: {
                                text: string;
                                startS: number;
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
                        lyrics?: string | undefined;
                        lyricsAlignment?: {
                            words: {
                                text: string;
                                startS: number;
                                endS: number;
                            }[];
                            lines: {
                                text: string;
                                startS: number;
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
                        lyrics?: string | undefined;
                        lyricsAlignment?: {
                            words: {
                                text: string;
                                startS: number;
                                endS: number;
                            }[];
                            lines: {
                                text: string;
                                startS: number;
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
                    weight: number;
                    behaviorTopicId: string;
                }, {
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
                }, {
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
                        lyrics?: string | undefined;
                        lyricsAlignment?: {
                            words: {
                                text: string;
                                startS: number;
                                endS: number;
                            }[];
                            lines: {
                                text: string;
                                startS: number;
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
            understanding?: {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            } | undefined;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
            generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
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
            understanding?: {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            } | undefined;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
            generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        }>>;
        agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        timings: z.ZodOptional<z.ZodObject<{
            /** Token request sent. Covers session creation and the doc round-trip. */
            fromButtonToTokenRequestMs: z.ZodOptional<z.ZodNumber>;
            /**
             * The call UI replaced the chat composer.
             *
             * Not a step in the connection chain — the call is coming up regardless of
             * what is painted — but it is the only part of the wait the user can SEE, and
             * it is the part they complain about. Every other figure here is about audio;
             * without this one, "it showed the text view for a second first" is
             * unfalsifiable.
             */
            fromButtonToVoiceUiMs: z.ZodOptional<z.ZodNumber>;
            /**
             * Which mode the composer painted in FIRST.
             *
             * "text" means the chat composer was genuinely on screen before the call UI
             * replaced it. "voice" means it never was, and any perceived delay is the
             * navigation animation or the loading gate — a different problem with a
             * different fix.
             */
            composerFirstMode: z.ZodOptional<z.ZodEnum<["text", "voice"]>>;
            /** Token landed on this device (today: written to Firestore, then synced). */
            fromButtonToTokenReceivedMs: z.ZodOptional<z.ZodNumber>;
            /** LiveKit room connected. */
            fromButtonToRoomConnectedMs: z.ZodOptional<z.ZodNumber>;
            /** THE headline: the first word the user actually hears. */
            fromButtonToFirstAudioMs: z.ZodOptional<z.ZodNumber>;
            /** issueCallToken wall time, server-side (Firestore writes + 3 LiveKit calls). */
            serverTokenMs: z.ZodOptional<z.ZodNumber>;
            /** Agent: building the per-session context and instructions. */
            agentContextBuildMs: z.ZodOptional<z.ZodNumber>;
            /** Agent: opening the OpenAI Realtime session. */
            agentRealtimeStartMs: z.ZodOptional<z.ZodNumber>;
            /** Agent: room join to asking the model for the opening line. */
            agentJoinToReplyMs: z.ZodOptional<z.ZodNumber>;
            /**
             * Which affordance started the call, so a slow path can be told from a slow
             * moment: "default_mode" is the impulse button opening straight into a call,
             * "toggle" is the user switching an existing session over.
             */
            entry: z.ZodOptional<z.ZodEnum<["default_mode", "toggle", "unknown"]>>;
        }, "strip", z.ZodTypeAny, {
            fromButtonToTokenRequestMs?: number | undefined;
            fromButtonToVoiceUiMs?: number | undefined;
            composerFirstMode?: "text" | "voice" | undefined;
            fromButtonToTokenReceivedMs?: number | undefined;
            fromButtonToRoomConnectedMs?: number | undefined;
            fromButtonToFirstAudioMs?: number | undefined;
            serverTokenMs?: number | undefined;
            agentContextBuildMs?: number | undefined;
            agentRealtimeStartMs?: number | undefined;
            agentJoinToReplyMs?: number | undefined;
            entry?: "unknown" | "default_mode" | "toggle" | undefined;
        }, {
            fromButtonToTokenRequestMs?: number | undefined;
            fromButtonToVoiceUiMs?: number | undefined;
            composerFirstMode?: "text" | "voice" | undefined;
            fromButtonToTokenReceivedMs?: number | undefined;
            fromButtonToRoomConnectedMs?: number | undefined;
            fromButtonToFirstAudioMs?: number | undefined;
            serverTokenMs?: number | undefined;
            agentContextBuildMs?: number | undefined;
            agentRealtimeStartMs?: number | undefined;
            agentJoinToReplyMs?: number | undefined;
            entry?: "unknown" | "default_mode" | "toggle" | undefined;
        }>>;
        endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        livekitSessionId: z.ZodOptional<z.ZodString>;
        livekitRoomName: z.ZodOptional<z.ZodString>;
        elevenlabsAgentId: z.ZodOptional<z.ZodString>;
        elevenlabsConversationId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        transcriptInSession: z.ZodOptional<z.ZodBoolean>;
        transcriptItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<["user", "assistant"]>;
            text: z.ZodString;
            ts: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
            interrupted: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodOptional<z.ZodEnum<["final", "partial"]>>;
        }, "strip", z.ZodTypeAny, {
            ts: import("../../types").Timestamp;
            text: string;
            role: "user" | "assistant";
            type?: "partial" | "final" | undefined;
            interrupted?: boolean | undefined;
        }, {
            ts: import("../../types").Timestamp;
            text: string;
            role: "user" | "assistant";
            type?: "partial" | "final" | undefined;
            interrupted?: boolean | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        endedAt?: import("../../types").Timestamp | undefined;
        tactic?: {
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
                        lyrics?: string | undefined;
                        lyricsAlignment?: {
                            words: {
                                text: string;
                                startS: number;
                                endS: number;
                            }[];
                            lines: {
                                text: string;
                                startS: number;
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
            understanding?: {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            } | undefined;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
            generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        timings?: {
            fromButtonToTokenRequestMs?: number | undefined;
            fromButtonToVoiceUiMs?: number | undefined;
            composerFirstMode?: "text" | "voice" | undefined;
            fromButtonToTokenReceivedMs?: number | undefined;
            fromButtonToRoomConnectedMs?: number | undefined;
            fromButtonToFirstAudioMs?: number | undefined;
            serverTokenMs?: number | undefined;
            agentContextBuildMs?: number | undefined;
            agentRealtimeStartMs?: number | undefined;
            agentJoinToReplyMs?: number | undefined;
            entry?: "unknown" | "default_mode" | "toggle" | undefined;
        } | undefined;
        livekitSessionId?: string | undefined;
        livekitRoomName?: string | undefined;
        elevenlabsAgentId?: string | undefined;
        elevenlabsConversationId?: string | undefined;
        token?: string | undefined;
        summary?: string | undefined;
        transcriptInSession?: boolean | undefined;
        transcriptItems?: {
            ts: import("../../types").Timestamp;
            text: string;
            role: "user" | "assistant";
            type?: "partial" | "final" | undefined;
            interrupted?: boolean | undefined;
        }[] | undefined;
    }, {
        endedAt?: import("../../types").Timestamp | undefined;
        tactic?: {
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
            understanding?: {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            } | undefined;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
            generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        timings?: {
            fromButtonToTokenRequestMs?: number | undefined;
            fromButtonToVoiceUiMs?: number | undefined;
            composerFirstMode?: "text" | "voice" | undefined;
            fromButtonToTokenReceivedMs?: number | undefined;
            fromButtonToRoomConnectedMs?: number | undefined;
            fromButtonToFirstAudioMs?: number | undefined;
            serverTokenMs?: number | undefined;
            agentContextBuildMs?: number | undefined;
            agentRealtimeStartMs?: number | undefined;
            agentJoinToReplyMs?: number | undefined;
            entry?: "unknown" | "default_mode" | "toggle" | undefined;
        } | undefined;
        livekitSessionId?: string | undefined;
        livekitRoomName?: string | undefined;
        elevenlabsAgentId?: string | undefined;
        elevenlabsConversationId?: string | undefined;
        token?: string | undefined;
        summary?: string | undefined;
        transcriptInSession?: boolean | undefined;
        transcriptItems?: {
            ts: import("../../types").Timestamp;
            text: string;
            role: "user" | "assistant";
            type?: "partial" | "final" | undefined;
            interrupted?: boolean | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "call";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        endedAt?: import("../../types").Timestamp | undefined;
        tactic?: {
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
                        lyrics?: string | undefined;
                        lyricsAlignment?: {
                            words: {
                                text: string;
                                startS: number;
                                endS: number;
                            }[];
                            lines: {
                                text: string;
                                startS: number;
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
            understanding?: {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            } | undefined;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
            generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        timings?: {
            fromButtonToTokenRequestMs?: number | undefined;
            fromButtonToVoiceUiMs?: number | undefined;
            composerFirstMode?: "text" | "voice" | undefined;
            fromButtonToTokenReceivedMs?: number | undefined;
            fromButtonToRoomConnectedMs?: number | undefined;
            fromButtonToFirstAudioMs?: number | undefined;
            serverTokenMs?: number | undefined;
            agentContextBuildMs?: number | undefined;
            agentRealtimeStartMs?: number | undefined;
            agentJoinToReplyMs?: number | undefined;
            entry?: "unknown" | "default_mode" | "toggle" | undefined;
        } | undefined;
        livekitSessionId?: string | undefined;
        livekitRoomName?: string | undefined;
        elevenlabsAgentId?: string | undefined;
        elevenlabsConversationId?: string | undefined;
        token?: string | undefined;
        summary?: string | undefined;
        transcriptInSession?: boolean | undefined;
        transcriptItems?: {
            ts: import("../../types").Timestamp;
            text: string;
            role: "user" | "assistant";
            type?: "partial" | "final" | undefined;
            interrupted?: boolean | undefined;
        }[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "call";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        endedAt?: import("../../types").Timestamp | undefined;
        tactic?: {
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
            understanding?: {
                updatedAt?: import("../../types").Timestamp | undefined;
                satisfies?: ("relaxation" | "stimulation" | "escape" | "connection" | "control" | "pleasure" | "achievement" | "boredom_relief" | "comfort" | "focus")[] | undefined;
                note?: string | undefined;
                avoidWhen?: string | undefined;
            } | undefined;
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
                    weight: number;
                    behaviorTopicId: string;
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
                    weight: number;
                    behaviorTopicId: string;
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
            generationStatus?: "pending" | "processing" | "completed" | "failed" | undefined;
            generationError?: string | undefined;
            generationProvider?: string | undefined;
            generationProviderJobId?: string | undefined;
            generationPrompt?: string | undefined;
            generationVoice?: "m" | "f" | null | undefined;
            collectionTemplateIds?: string[] | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        timings?: {
            fromButtonToTokenRequestMs?: number | undefined;
            fromButtonToVoiceUiMs?: number | undefined;
            composerFirstMode?: "text" | "voice" | undefined;
            fromButtonToTokenReceivedMs?: number | undefined;
            fromButtonToRoomConnectedMs?: number | undefined;
            fromButtonToFirstAudioMs?: number | undefined;
            serverTokenMs?: number | undefined;
            agentContextBuildMs?: number | undefined;
            agentRealtimeStartMs?: number | undefined;
            agentJoinToReplyMs?: number | undefined;
            entry?: "unknown" | "default_mode" | "toggle" | undefined;
        } | undefined;
        livekitSessionId?: string | undefined;
        livekitRoomName?: string | undefined;
        elevenlabsAgentId?: string | undefined;
        elevenlabsConversationId?: string | undefined;
        token?: string | undefined;
        summary?: string | undefined;
        transcriptInSession?: boolean | undefined;
        transcriptItems?: {
            ts: import("../../types").Timestamp;
            text: string;
            role: "user" | "assistant";
            type?: "partial" | "final" | undefined;
            interrupted?: boolean | undefined;
        }[] | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}>;
export type CallLog = z.infer<typeof callLogSchema>;
