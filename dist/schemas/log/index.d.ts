import { z } from "zod";
import { BehaviorLog } from "./behaviorLog";
import { BreathingLog } from "./breathingLog";
import { CallLog } from "./callLog";
import { DaySummaryLog } from "./daySummaryLog";
import { ImpulseLog } from "./impulseLog";
import { LinkLog } from "./linkLog";
import { AssistantMessageLog, MessageLog } from "./messageLog";
import { UserMessageLog } from "./messageLog/userMessageLog";
import { NotifySupportGroupLog } from "./notifySupportGroupLog";
import { PlanLog } from "./planLog";
import { QuestionLog } from "./questionLog";
import { ReadyToDebriefLog } from "./readyToDebriefLog";
import { ResistedLog } from "./resistedLog";
import { SharedMomentLog } from "./sharedMomentLog";
import { ShowTourLog } from "./showTourLog";
import { SuggestedTacticsLog } from "./suggestedTacticsLog";
import { SummaryLog } from "./summaryLog";
import { TacticLog } from "./tacticLog";
import { TacticSuggestionLog } from "./tacticSuggestionLog";
import { ToolCallLog } from "./toolCallLog";
import { VideoLog } from "./videoLog";
import { WidgetSetupLog } from "./widgetSetupLog";
export declare const logSchemas: {
    user: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            message: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            message?: any;
        }, {
            message?: any;
        }>;
    } & {
        type: z.ZodLiteral<"user_message">;
        audioAttachment: z.ZodOptional<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "user_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
        audioAttachment?: {
            uri: string;
            storagePath: string;
            contentType: string;
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
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "user_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
        audioAttachment?: {
            uri: string;
            storagePath: string;
            contentType: string;
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
    }>;
    assistant_message: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            message: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            message?: any;
        }, {
            message?: any;
        }>;
    } & {
        type: z.ZodLiteral<"assistant_message">;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "assistant_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "assistant_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    call: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"call">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            tactic: z.ZodOptional<z.ZodObject<{
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
                }, "strip", z.ZodTypeAny, {
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
                }, "strip", z.ZodTypeAny, {
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
                effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
                timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
                aiConfiguration: z.ZodOptional<z.ZodObject<{
                    defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
                    goal: z.ZodString;
                    prompt: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                }, {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            }>>;
            agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            livekitSessionId: z.ZodString;
            livekitRoomName: z.ZodString;
            token: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            livekitSessionId: string;
            livekitRoomName: string;
            tactic?: {
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            } | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            token?: string | undefined;
            summary?: string | undefined;
        }, {
            livekitSessionId: string;
            livekitRoomName: string;
            tactic?: {
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            } | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            token?: string | undefined;
            summary?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "call";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            livekitSessionId: string;
            livekitRoomName: string;
            tactic?: {
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            } | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            token?: string | undefined;
            summary?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "call";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            livekitSessionId: string;
            livekitRoomName: string;
            tactic?: {
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            } | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            token?: string | undefined;
            summary?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    tool_call: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        isDisplayable: z.ZodLiteral<false>;
        type: z.ZodLiteral<"tool_call">;
        data: z.ZodObject<{
            message: z.ZodObject<{
                role: z.ZodEnum<["assistant", "user", "system", "tool"]>;
                content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull, z.ZodArray<z.ZodAny, "many">]>>;
                tool_call_id: z.ZodOptional<z.ZodString>;
                tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodLiteral<"function">;
                    function: z.ZodObject<{
                        name: z.ZodString;
                        arguments: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        arguments: string;
                    }, {
                        name: string;
                        arguments: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }, {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }>, "many">>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                role: "assistant" | "user" | "system" | "tool";
                name?: string | undefined;
                content?: string | any[] | null | undefined;
                tool_call_id?: string | undefined;
                tool_calls?: {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }[] | undefined;
            }, {
                role: "assistant" | "user" | "system" | "tool";
                name?: string | undefined;
                content?: string | any[] | null | undefined;
                tool_call_id?: string | undefined;
                tool_calls?: {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }[] | undefined;
            }>;
            toolCallResults: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            message: {
                role: "assistant" | "user" | "system" | "tool";
                name?: string | undefined;
                content?: string | any[] | null | undefined;
                tool_call_id?: string | undefined;
                tool_calls?: {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }[] | undefined;
            };
            toolCallResults: any[];
        }, {
            message: {
                role: "assistant" | "user" | "system" | "tool";
                name?: string | undefined;
                content?: string | any[] | null | undefined;
                tool_call_id?: string | undefined;
                tool_calls?: {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }[] | undefined;
            };
            toolCallResults: any[];
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tool_call";
        userId: string;
        dateString: string;
        isDisplayable: false;
        data: {
            message: {
                role: "assistant" | "user" | "system" | "tool";
                name?: string | undefined;
                content?: string | any[] | null | undefined;
                tool_call_id?: string | undefined;
                tool_calls?: {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }[] | undefined;
            };
            toolCallResults: any[];
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tool_call";
        userId: string;
        dateString: string;
        isDisplayable: false;
        data: {
            message: {
                role: "assistant" | "user" | "system" | "tool";
                name?: string | undefined;
                content?: string | any[] | null | undefined;
                tool_call_id?: string | undefined;
                tool_calls?: {
                    function: {
                        name: string;
                        arguments: string;
                    };
                    type: "function";
                    id: string;
                }[] | undefined;
            };
            toolCallResults: any[];
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    tactic: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                }, "strip", z.ZodTypeAny, {
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
                }, "strip", z.ZodTypeAny, {
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
                effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
                timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
                aiConfiguration: z.ZodOptional<z.ZodObject<{
                    defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
                    goal: z.ZodString;
                    prompt: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                }, {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tactic";
        userId: string;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tactic";
        userId: string;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    tactic_suggestion: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"tactic_suggestion">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            tactic: z.ZodAny;
            tacticPath: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodEnum<["userPlan", "library", "improvised"]>>;
            collectionRefPath: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tacticPath: string;
            tactic?: any;
            reason?: string | undefined;
            source?: "userPlan" | "library" | "improvised" | undefined;
            collectionRefPath?: string | undefined;
        }, {
            tacticPath: string;
            tactic?: any;
            reason?: string | undefined;
            source?: "userPlan" | "library" | "improvised" | undefined;
            collectionRefPath?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tactic_suggestion";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            tacticPath: string;
            tactic?: any;
            reason?: string | undefined;
            source?: "userPlan" | "library" | "improvised" | undefined;
            collectionRefPath?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tactic_suggestion";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            tacticPath: string;
            tactic?: any;
            reason?: string | undefined;
            source?: "userPlan" | "library" | "improvised" | undefined;
            collectionRefPath?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    day_summary: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"day_summary">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            userId: z.ZodString;
            impulseThreadOutcomesById: z.ZodRecord<z.ZodString, z.ZodEnum<["success", "partial", "setback"]>>;
            outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
            behaviorDataTotalByBehaviorId: z.ZodRecord<z.ZodString, z.ZodObject<{
                behaviorId: z.ZodString;
                behaviorName: z.ZodString;
                behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
                trackingType: z.ZodEnum<["counter", "timer"]>;
                category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
                value: z.ZodNumber;
                formattedValue: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>>;
            behaviorsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodObject<{
                name: z.ZodString;
                category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
                hasQuestions: z.ZodOptional<z.ZodBoolean>;
                trackingType: z.ZodEnum<["counter", "timer"]>;
                trackingUnit: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                id: z.ZodOptional<z.ZodString>;
                description: z.ZodString;
                ordinal: z.ZodDefault<z.ZodNumber>;
                benefits: z.ZodArray<z.ZodString, "many">;
                drawbacks: z.ZodArray<z.ZodString, "many">;
                goal: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    type: z.ZodLiteral<"eliminate">;
                }, "strip", z.ZodTypeAny, {
                    type: "eliminate";
                }, {
                    type: "eliminate";
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"reduceEveryDay">;
                    target: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: "reduceEveryDay";
                    target: number;
                }, {
                    type: "reduceEveryDay";
                    target: number;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"reduceIndividualDays">;
                    dailyTargets: z.ZodObject<{
                        0: z.ZodNumber;
                        1: z.ZodNumber;
                        2: z.ZodNumber;
                        3: z.ZodNumber;
                        4: z.ZodNumber;
                        5: z.ZodNumber;
                        6: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    }, {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                }, {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                }>]>>;
                lastTrackedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
                initialUsage: z.ZodOptional<z.ZodObject<{
                    behaviorId: z.ZodString;
                    behaviorName: z.ZodString;
                    behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
                    trackingType: z.ZodEnum<["counter", "timer"]>;
                    category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
                    value: z.ZodNumber;
                    formattedValue: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                }, {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                }>>;
                hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                ordinal: number;
                benefits: string[];
                drawbacks: string[];
                hidden: boolean;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
            }, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                benefits: string[];
                drawbacks: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                ordinal?: number | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
                hidden?: boolean | undefined;
            }>, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                ordinal: number;
                benefits: string[];
                drawbacks: string[];
                hidden: boolean;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
            }, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                benefits: string[];
                drawbacks: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                ordinal?: number | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
                hidden?: boolean | undefined;
            }>>>;
            trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            tacticsUsed: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            summaryText: z.ZodDefault<z.ZodString>;
            supportGroupPermissionsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            sharedWithUserIds: z.ZodArray<z.ZodString, "many">;
            goalComparisonByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                goalLabel: z.ZodString;
                unit: z.ZodString;
                measured: z.ZodNumber;
                targetValue: z.ZodOptional<z.ZodNumber>;
                status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]>;
            }, "strip", z.ZodTypeAny, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
                goalLabel: string;
                unit: string;
                measured: number;
                targetValue?: number | undefined;
            }, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
                goalLabel: string;
                unit: string;
                measured: number;
                targetValue?: number | undefined;
            }>>>;
            recapCompletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            recapStartedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
            behaviorDataTotalByBehaviorId: Record<string, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>;
            tacticsUsed: any[];
            summaryText: string;
            sharedWithUserIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            outcome?: "setback" | "success" | "partial" | undefined;
            behaviorsById?: Record<string, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                ordinal: number;
                benefits: string[];
                drawbacks: string[];
                hidden: boolean;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
            }> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
            supportGroupPermissionsById?: Record<string, any> | undefined;
            goalComparisonByBehaviorId?: Record<string, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
                goalLabel: string;
                unit: string;
                measured: number;
                targetValue?: number | undefined;
            }> | undefined;
            recapCompletedAt?: import("../../types").Timestamp | undefined;
            recapStartedAt?: import("../../types").Timestamp | undefined;
        }, {
            userId: string;
            impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
            behaviorDataTotalByBehaviorId: Record<string, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>;
            sharedWithUserIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            outcome?: "setback" | "success" | "partial" | undefined;
            behaviorsById?: Record<string, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                benefits: string[];
                drawbacks: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                ordinal?: number | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
                hidden?: boolean | undefined;
            }> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
            tacticsUsed?: any[] | undefined;
            summaryText?: string | undefined;
            supportGroupPermissionsById?: Record<string, any> | undefined;
            goalComparisonByBehaviorId?: Record<string, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
                goalLabel: string;
                unit: string;
                measured: number;
                targetValue?: number | undefined;
            }> | undefined;
            recapCompletedAt?: import("../../types").Timestamp | undefined;
            recapStartedAt?: import("../../types").Timestamp | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "day_summary";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            userId: string;
            impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
            behaviorDataTotalByBehaviorId: Record<string, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>;
            tacticsUsed: any[];
            summaryText: string;
            sharedWithUserIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            outcome?: "setback" | "success" | "partial" | undefined;
            behaviorsById?: Record<string, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                ordinal: number;
                benefits: string[];
                drawbacks: string[];
                hidden: boolean;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
            }> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
            supportGroupPermissionsById?: Record<string, any> | undefined;
            goalComparisonByBehaviorId?: Record<string, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
                goalLabel: string;
                unit: string;
                measured: number;
                targetValue?: number | undefined;
            }> | undefined;
            recapCompletedAt?: import("../../types").Timestamp | undefined;
            recapStartedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "day_summary";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            userId: string;
            impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
            behaviorDataTotalByBehaviorId: Record<string, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>;
            sharedWithUserIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            outcome?: "setback" | "success" | "partial" | undefined;
            behaviorsById?: Record<string, {
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                name: string;
                description: string;
                benefits: string[];
                drawbacks: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                hasQuestions?: boolean | undefined;
                trackingUnit?: string | undefined;
                ordinal?: number | undefined;
                goal?: {
                    type: "eliminate";
                } | {
                    type: "reduceEveryDay";
                    target: number;
                } | {
                    type: "reduceIndividualDays";
                    dailyTargets: {
                        0: number;
                        5: number;
                        1: number;
                        2: number;
                        4: number;
                        3: number;
                        6: number;
                    };
                } | undefined;
                lastTrackedAt?: import("../../types").Timestamp | undefined;
                tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
                initialUsage?: {
                    value: number;
                    behaviorId: string;
                    behaviorName: string;
                    trackingType: "counter" | "timer";
                    category: "helpful" | "mixed" | "unhelpful" | "unsure";
                    formattedValue: string;
                    behaviorTrackingUnit?: string | undefined;
                } | undefined;
                hidden?: boolean | undefined;
            }> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
            tacticsUsed?: any[] | undefined;
            summaryText?: string | undefined;
            supportGroupPermissionsById?: Record<string, any> | undefined;
            goalComparisonByBehaviorId?: Record<string, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
                goalLabel: string;
                unit: string;
                measured: number;
                targetValue?: number | undefined;
            }> | undefined;
            recapCompletedAt?: import("../../types").Timestamp | undefined;
            recapStartedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    tactic_viewed: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
                }, "strip", z.ZodTypeAny, {
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
                }, "strip", z.ZodTypeAny, {
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
                effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
                timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
                aiConfiguration: z.ZodOptional<z.ZodObject<{
                    defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
                    goal: z.ZodString;
                    prompt: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                }, {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tactic";
        userId: string;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "tactic";
        userId: string;
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
                indications?: {
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
                effectiveness?: "low" | "medium" | "high" | undefined;
                timeToComplete?: "medium" | "quick" | "long" | undefined;
                aiConfiguration?: {
                    goal: string;
                    prompt?: string | undefined;
                    defaultConversationMode?: "text" | "voice" | undefined;
                } | undefined;
            };
            completed?: boolean | undefined;
            planId?: string | undefined;
            stepCount?: number | undefined;
            completedStepIndexes?: number[] | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    impulse_button_pressed: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"impulse_button_pressed">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "impulse_button_pressed";
        userId: string;
        dateString: string;
        isDisplayable: true;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "impulse_button_pressed";
        userId: string;
        dateString: string;
        isDisplayable: true;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    behavior: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"behavior">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            behaviorId: z.ZodString;
            behaviorName: z.ZodString;
            behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
            trackingType: z.ZodEnum<["counter", "timer"]>;
            category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
            value: z.ZodNumber;
            formattedValue: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "behavior";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "behavior";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    breathing: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"breathing">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            inhaleSeconds: z.ZodNumber;
            holdSeconds: z.ZodNumber;
            exhaleSeconds: z.ZodNumber;
            cycles: z.ZodNumber;
            completedCycles: z.ZodNumber;
            totalDurationSeconds: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            inhaleSeconds: number;
            holdSeconds: number;
            exhaleSeconds: number;
            cycles: number;
            completedCycles: number;
            totalDurationSeconds: number;
        }, {
            inhaleSeconds: number;
            holdSeconds: number;
            exhaleSeconds: number;
            cycles: number;
            completedCycles: number;
            totalDurationSeconds: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "breathing";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            inhaleSeconds: number;
            holdSeconds: number;
            exhaleSeconds: number;
            cycles: number;
            completedCycles: number;
            totalDurationSeconds: number;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "breathing";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            inhaleSeconds: number;
            holdSeconds: number;
            exhaleSeconds: number;
            cycles: number;
            completedCycles: number;
            totalDurationSeconds: number;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    outcome: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"resisted">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            isSuccess: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            isSuccess: boolean;
        }, {
            isSuccess: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "resisted";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            isSuccess: boolean;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "resisted";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            isSuccess: boolean;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    question: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"question">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            questionId: z.ZodOptional<z.ZodString>;
            question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"text">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }, {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"emotion">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            } & {
                suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }, {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"shortText">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            } & {
                suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }, {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"slider1To10">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
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
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }, {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            }>]>;
            response: z.ZodOptional<z.ZodObject<{
                responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "recap"]>;
                value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
                formattedValue: z.ZodString;
                color: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            }, {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            question: {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }, {
            question: {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "question";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            question: {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "question";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            question: {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            } | {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                isTemplate?: boolean | undefined;
                behaviorIds?: string[] | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    plan: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"plan">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            planId: z.ZodString;
            plan: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
                id: z.ZodString;
                _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            }, {
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                type: z.ZodType<"time", z.ZodTypeDef, "time">;
                ordinal: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodOptional<z.ZodBoolean>;
                summary: z.ZodOptional<z.ZodString>;
                tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                trigger: z.ZodObject<{
                    hour: z.ZodNumber;
                    minute: z.ZodNumber;
                    weekdays: z.ZodArray<z.ZodNumber, "many">;
                }, "strip", z.ZodTypeAny, {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                }, {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                }>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "time";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                type: "time";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }>>, z.ZodIntersection<z.ZodObject<{
                id: z.ZodString;
                _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            }, {
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                type: z.ZodType<"location", z.ZodTypeDef, "location">;
                ordinal: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodOptional<z.ZodBoolean>;
                summary: z.ZodOptional<z.ZodString>;
                tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                trigger: z.ZodObject<{
                    locationName: z.ZodString;
                    triggerType: z.ZodEnum<["arrival", "departure"]>;
                    latitude: z.ZodNumber;
                    longitude: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                }, {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                }>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "location";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                type: "location";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }>>, z.ZodIntersection<z.ZodObject<{
                id: z.ZodString;
                _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            }, {
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                type: z.ZodType<"recap", z.ZodTypeDef, "recap">;
                ordinal: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodOptional<z.ZodBoolean>;
                summary: z.ZodOptional<z.ZodString>;
                tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                trigger: z.ZodObject<{
                    hour: z.ZodNumber;
                    minute: z.ZodNumber;
                    weekdays: z.ZodArray<z.ZodNumber, "many">;
                }, "strip", z.ZodTypeAny, {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                }, {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                }>;
                questionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "recap";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                questionIds: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                type: "recap";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                questionIds?: string[] | undefined;
            }>>]>;
            introduction: z.ZodOptional<z.ZodString>;
            acceptedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "time";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "location";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "recap";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                questionIds: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
        }, {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "time";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "location";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "recap";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                questionIds?: string[] | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "plan";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "time";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "location";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "recap";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                questionIds: string[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "plan";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "time";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "location";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "recap";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                description?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                questionIds?: string[] | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    summary: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"summary">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            summary: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            summary: string;
        }, {
            summary: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "summary";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            summary: string;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "summary";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            summary: string;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    widget_setup: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"widget_setup">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "widget_setup";
        userId: string;
        dateString: string;
        isDisplayable: true;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "widget_setup";
        userId: string;
        dateString: string;
        isDisplayable: true;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    show_tour: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"show_tour">;
        isDisplayable: z.ZodLiteral<true>;
        text: z.ZodString;
        data: z.ZodObject<{
            steps: z.ZodArray<z.ZodObject<{
                elementRefName: z.ZodString;
                title: z.ZodString;
                description: z.ZodString;
                confirmButtonLabel: z.ZodDefault<z.ZodString>;
                nextOnImpulseButtonPress: z.ZodOptional<z.ZodBoolean>;
                borderRadius: z.ZodOptional<z.ZodNumber>;
                innerPadding: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                title: string;
                description: string;
                elementRefName: string;
                confirmButtonLabel: string;
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
            }, {
                title: string;
                description: string;
                elementRefName: string;
                confirmButtonLabel?: string | undefined;
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
            }>, "many">;
            firstNavigateToRoute: z.ZodOptional<z.ZodString>;
            startButtonLabel: z.ZodOptional<z.ZodString>;
            completedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            includeCloseButton: z.ZodDefault<z.ZodBoolean>;
            closeButtonText: z.ZodDefault<z.ZodString>;
            closeButtonHref: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            steps: {
                title: string;
                description: string;
                elementRefName: string;
                confirmButtonLabel: string;
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
            }[];
            includeCloseButton: boolean;
            closeButtonText: string;
            closeButtonHref: string;
            firstNavigateToRoute?: string | undefined;
            startButtonLabel?: string | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        }, {
            steps: {
                title: string;
                description: string;
                elementRefName: string;
                confirmButtonLabel?: string | undefined;
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
            }[];
            firstNavigateToRoute?: string | undefined;
            startButtonLabel?: string | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
            includeCloseButton?: boolean | undefined;
            closeButtonText?: string | undefined;
            closeButtonHref?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "show_tour";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            steps: {
                title: string;
                description: string;
                elementRefName: string;
                confirmButtonLabel: string;
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
            }[];
            includeCloseButton: boolean;
            closeButtonText: string;
            closeButtonHref: string;
            firstNavigateToRoute?: string | undefined;
            startButtonLabel?: string | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        text: string;
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "show_tour";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            steps: {
                title: string;
                description: string;
                elementRefName: string;
                confirmButtonLabel?: string | undefined;
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
            }[];
            firstNavigateToRoute?: string | undefined;
            startButtonLabel?: string | undefined;
            completedAt?: import("../../types").Timestamp | undefined;
            includeCloseButton?: boolean | undefined;
            closeButtonText?: string | undefined;
            closeButtonHref?: string | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    link: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"link">;
        isDisplayable: z.ZodLiteral<true>;
        text: z.ZodString;
        link: z.ZodString;
        buttonText: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "link";
        userId: string;
        link: string;
        dateString: string;
        isDisplayable: true;
        buttonText: string;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        text: string;
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "link";
        userId: string;
        link: string;
        dateString: string;
        isDisplayable: true;
        buttonText: string;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    notify_support_group: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"notify_support_group">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            message: z.ZodAny;
            supportGroupsById: z.ZodRecord<z.ZodString, z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                membersById: z.ZodRecord<z.ZodString, z.ZodObject<{
                    userId: z.ZodString;
                    userProfile: z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        invitationCode: z.ZodString;
                        emojiId: z.ZodOptional<z.ZodObject<{
                            color: z.ZodString;
                            emoji: z.ZodString;
                            name: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        }, {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    }, {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                membersById: Record<string, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>;
            }, {
                id: string;
                name: string;
                membersById: Record<string, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>;
            }>>;
        }, "strip", z.ZodTypeAny, {
            supportGroupsById: Record<string, {
                id: string;
                name: string;
                membersById: Record<string, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>;
            }>;
            message?: any;
        }, {
            supportGroupsById: Record<string, {
                id: string;
                name: string;
                membersById: Record<string, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>;
            }>;
            message?: any;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "notify_support_group";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            supportGroupsById: Record<string, {
                id: string;
                name: string;
                membersById: Record<string, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>;
            }>;
            message?: any;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "notify_support_group";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            supportGroupsById: Record<string, {
                id: string;
                name: string;
                membersById: Record<string, {
                    userId: string;
                    userProfile: {
                        invitationCode: string;
                        id?: string | undefined;
                        emojiId?: {
                            color: string;
                            emoji: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                }>;
            }>;
            message?: any;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    video: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"video">;
        isDisplayable: z.ZodLiteral<true>;
        title: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        data: z.ZodObject<{
            sourceUri: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            sourceUri: string;
        }, {
            sourceUri: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "video";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            sourceUri: string;
        };
        text?: string | undefined;
        title?: string | undefined;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "video";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            sourceUri: string;
        };
        text?: string | undefined;
        title?: string | undefined;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    shared_moment: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"shared_moment">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            threadRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
            threadSummaryData: z.ZodObject<{
                type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
                tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
                behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
                outcomeLogs: z.ZodArray<z.ZodAny, "many">;
                daySummaryLog: z.ZodOptional<z.ZodAny>;
                questionLogs: z.ZodArray<z.ZodAny, "many">;
                firstMessageLog: z.ZodOptional<z.ZodAny>;
                firstCallLog: z.ZodOptional<z.ZodAny>;
                hasContent: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
                tacticsByTitle: Record<string, any[]>;
                behaviorsByName: Record<string, any[]>;
                outcomeLogs: any[];
                questionLogs: any[];
                hasContent: boolean;
                daySummaryLog?: any;
                firstMessageLog?: any;
                firstCallLog?: any;
            }, {
                type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
                tacticsByTitle: Record<string, any[]>;
                behaviorsByName: Record<string, any[]>;
                outcomeLogs: any[];
                questionLogs: any[];
                hasContent: boolean;
                daySummaryLog?: any;
                firstMessageLog?: any;
                firstCallLog?: any;
            }>;
            emojiId: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                emoji: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                color: string;
                emoji: string;
                name?: string | undefined;
            }, {
                color: string;
                emoji: string;
                name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            threadSummaryData: {
                type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
                tacticsByTitle: Record<string, any[]>;
                behaviorsByName: Record<string, any[]>;
                outcomeLogs: any[];
                questionLogs: any[];
                hasContent: boolean;
                daySummaryLog?: any;
                firstMessageLog?: any;
                firstCallLog?: any;
            };
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        }, {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            threadSummaryData: {
                type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
                tacticsByTitle: Record<string, any[]>;
                behaviorsByName: Record<string, any[]>;
                outcomeLogs: any[];
                questionLogs: any[];
                hasContent: boolean;
                daySummaryLog?: any;
                firstMessageLog?: any;
                firstCallLog?: any;
            };
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "shared_moment";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            threadSummaryData: {
                type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
                tacticsByTitle: Record<string, any[]>;
                behaviorsByName: Record<string, any[]>;
                outcomeLogs: any[];
                questionLogs: any[];
                hasContent: boolean;
                daySummaryLog?: any;
                firstMessageLog?: any;
                firstCallLog?: any;
            };
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "shared_moment";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            threadSummaryData: {
                type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
                tacticsByTitle: Record<string, any[]>;
                behaviorsByName: Record<string, any[]>;
                outcomeLogs: any[];
                questionLogs: any[];
                hasContent: boolean;
                daySummaryLog?: any;
                firstMessageLog?: any;
                firstCallLog?: any;
            };
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        };
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    ready_to_debrief: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
        type: z.ZodLiteral<"ready_to_debrief">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "ready_to_debrief";
        userId: string;
        dateString: string;
        isDisplayable: true;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        createdAt: import("../../types").Timestamp;
        updatedAt: import("../../types").Timestamp;
        type: "ready_to_debrief";
        userId: string;
        dateString: string;
        isDisplayable: true;
        id?: string | undefined;
        timestamp?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
};
export declare const logTypes: string[];
export type LogType = (typeof logTypes)[number];
export type Log = TacticLog | TacticSuggestionLog | ImpulseLog | BehaviorLog | BreathingLog | ResistedLog | QuestionLog | PlanLog | ToolCallLog | MessageLog | SummaryLog | CallLog | WidgetSetupLog | ShowTourLog | LinkLog | NotifySupportGroupLog | SharedMomentLog | VideoLog | DaySummaryLog | ReadyToDebriefLog | SuggestedTacticsLog;
export * from "./behaviorLog";
export * from "./breathingLog";
export * from "./callLog";
export * from "./daySummaryLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./notifySupportGroupLog";
export * from "./planLog";
export * from "./questionLog";
export * from "./readyToDebriefLog";
export * from "./resistedLog";
export * from "./sharedMomentLog";
export * from "./showTourLog";
export * from "./suggestedTacticsLog";
export * from "./summaryLog";
export * from "./tacticLog";
export * from "./tacticSuggestionLog";
export * from "./toolCallLog";
export * from "./videoLog";
export * from "./widgetSetupLog";
export declare const logSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        message?: any;
    }, {
        message?: any;
    }>;
} & {
    type: z.ZodLiteral<"user_message">;
    audioAttachment: z.ZodOptional<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "user_message";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
    audioAttachment?: {
        uri: string;
        storagePath: string;
        contentType: string;
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
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "user_message";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
    audioAttachment?: {
        uri: string;
        storagePath: string;
        contentType: string;
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
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        message?: any;
    }, {
        message?: any;
    }>;
} & {
    type: z.ZodLiteral<"assistant_message">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "assistant_message";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "assistant_message";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"call">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodOptional<z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
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
            }, "strip", z.ZodTypeAny, {
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
            effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
            timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
            aiConfiguration: z.ZodOptional<z.ZodObject<{
                defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
                goal: z.ZodString;
                prompt: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            }, {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        }>>;
        agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        livekitSessionId: z.ZodString;
        livekitRoomName: z.ZodString;
        token: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        livekitSessionId: string;
        livekitRoomName: string;
        tactic?: {
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        token?: string | undefined;
        summary?: string | undefined;
    }, {
        livekitSessionId: string;
        livekitRoomName: string;
        tactic?: {
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        token?: string | undefined;
        summary?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "call";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        livekitSessionId: string;
        livekitRoomName: string;
        tactic?: {
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        token?: string | undefined;
        summary?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "call";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        livekitSessionId: string;
        livekitRoomName: string;
        tactic?: {
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        } | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        token?: string | undefined;
        summary?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    isDisplayable: z.ZodLiteral<false>;
    type: z.ZodLiteral<"tool_call">;
    data: z.ZodObject<{
        message: z.ZodObject<{
            role: z.ZodEnum<["assistant", "user", "system", "tool"]>;
            content: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull, z.ZodArray<z.ZodAny, "many">]>>;
            tool_call_id: z.ZodOptional<z.ZodString>;
            tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                type: z.ZodLiteral<"function">;
                function: z.ZodObject<{
                    name: z.ZodString;
                    arguments: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    arguments: string;
                }, {
                    name: string;
                    arguments: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }, {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }>, "many">>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        }, {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        }>;
        toolCallResults: z.ZodArray<z.ZodAny, "many">;
    }, "strip", z.ZodTypeAny, {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    }, {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tool_call";
    userId: string;
    dateString: string;
    isDisplayable: false;
    data: {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tool_call";
    userId: string;
    dateString: string;
    isDisplayable: false;
    data: {
        message: {
            role: "assistant" | "user" | "system" | "tool";
            name?: string | undefined;
            content?: string | any[] | null | undefined;
            tool_call_id?: string | undefined;
            tool_calls?: {
                function: {
                    name: string;
                    arguments: string;
                };
                type: "function";
                id: string;
            }[] | undefined;
        };
        toolCallResults: any[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
            }, "strip", z.ZodTypeAny, {
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
            }, "strip", z.ZodTypeAny, {
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
            effectiveness: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
            timeToComplete: z.ZodOptional<z.ZodEnum<["quick", "medium", "long"]>>;
            aiConfiguration: z.ZodOptional<z.ZodObject<{
                defaultConversationMode: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
                goal: z.ZodString;
                prompt: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            }, {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        };
        completed?: boolean | undefined;
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        };
        completed?: boolean | undefined;
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic";
    userId: string;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        };
        completed?: boolean | undefined;
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic";
    userId: string;
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
            indications?: {
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
            effectiveness?: "low" | "medium" | "high" | undefined;
            timeToComplete?: "medium" | "quick" | "long" | undefined;
            aiConfiguration?: {
                goal: string;
                prompt?: string | undefined;
                defaultConversationMode?: "text" | "voice" | undefined;
            } | undefined;
        };
        completed?: boolean | undefined;
        planId?: string | undefined;
        stepCount?: number | undefined;
        completedStepIndexes?: number[] | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"tactic_suggestion">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodAny;
        tacticPath: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<["userPlan", "library", "improvised"]>>;
        collectionRefPath: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    }, {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic_suggestion";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic_suggestion";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"day_summary">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        userId: z.ZodString;
        impulseThreadOutcomesById: z.ZodRecord<z.ZodString, z.ZodEnum<["success", "partial", "setback"]>>;
        outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
        behaviorDataTotalByBehaviorId: z.ZodRecord<z.ZodString, z.ZodObject<{
            behaviorId: z.ZodString;
            behaviorName: z.ZodString;
            behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
            trackingType: z.ZodEnum<["counter", "timer"]>;
            category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
            value: z.ZodNumber;
            formattedValue: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>>;
        behaviorsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodObject<{
            name: z.ZodString;
            category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
            hasQuestions: z.ZodOptional<z.ZodBoolean>;
            trackingType: z.ZodEnum<["counter", "timer"]>;
            trackingUnit: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            id: z.ZodOptional<z.ZodString>;
            description: z.ZodString;
            ordinal: z.ZodDefault<z.ZodNumber>;
            benefits: z.ZodArray<z.ZodString, "many">;
            drawbacks: z.ZodArray<z.ZodString, "many">;
            goal: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"eliminate">;
            }, "strip", z.ZodTypeAny, {
                type: "eliminate";
            }, {
                type: "eliminate";
            }>, z.ZodObject<{
                type: z.ZodLiteral<"reduceEveryDay">;
                target: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: "reduceEveryDay";
                target: number;
            }, {
                type: "reduceEveryDay";
                target: number;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"reduceIndividualDays">;
                dailyTargets: z.ZodObject<{
                    0: z.ZodNumber;
                    1: z.ZodNumber;
                    2: z.ZodNumber;
                    3: z.ZodNumber;
                    4: z.ZodNumber;
                    5: z.ZodNumber;
                    6: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                }, {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            }, {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            }>]>>;
            lastTrackedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
            initialUsage: z.ZodOptional<z.ZodObject<{
                behaviorId: z.ZodString;
                behaviorName: z.ZodString;
                behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
                trackingType: z.ZodEnum<["counter", "timer"]>;
                category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
                value: z.ZodNumber;
                formattedValue: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>>;
            hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
        }, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
        }>, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
        }, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
        }>>>;
        trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        tacticsUsed: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        summaryText: z.ZodDefault<z.ZodString>;
        supportGroupPermissionsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        sharedWithUserIds: z.ZodArray<z.ZodString, "many">;
        goalComparisonByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            goalLabel: z.ZodString;
            unit: z.ZodString;
            measured: z.ZodNumber;
            targetValue: z.ZodOptional<z.ZodNumber>;
            status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]>;
        }, "strip", z.ZodTypeAny, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }>>>;
        recapCompletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        recapStartedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        tacticsUsed: any[];
        summaryText: string;
        sharedWithUserIds: string[];
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        supportGroupPermissionsById?: Record<string, any> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    }, {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        sharedWithUserIds: string[];
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        tacticsUsed?: any[] | undefined;
        summaryText?: string | undefined;
        supportGroupPermissionsById?: Record<string, any> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "day_summary";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        tacticsUsed: any[];
        summaryText: string;
        sharedWithUserIds: string[];
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        supportGroupPermissionsById?: Record<string, any> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "day_summary";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        sharedWithUserIds: string[];
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
            goal?: {
                type: "eliminate";
            } | {
                type: "reduceEveryDay";
                target: number;
            } | {
                type: "reduceIndividualDays";
                dailyTargets: {
                    0: number;
                    5: number;
                    1: number;
                    2: number;
                    4: number;
                    3: number;
                    6: number;
                };
            } | undefined;
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        tacticsUsed?: any[] | undefined;
        summaryText?: string | undefined;
        supportGroupPermissionsById?: Record<string, any> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"impulse_button_pressed">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "impulse_button_pressed";
    userId: string;
    dateString: string;
    isDisplayable: true;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "impulse_button_pressed";
    userId: string;
    dateString: string;
    isDisplayable: true;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"behavior">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodEnum<["counter", "timer"]>;
        category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
        value: z.ZodNumber;
        formattedValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "behavior";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "behavior";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"breathing">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        inhaleSeconds: z.ZodNumber;
        holdSeconds: z.ZodNumber;
        exhaleSeconds: z.ZodNumber;
        cycles: z.ZodNumber;
        completedCycles: z.ZodNumber;
        totalDurationSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    }, {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "breathing";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "breathing";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        inhaleSeconds: number;
        holdSeconds: number;
        exhaleSeconds: number;
        cycles: number;
        completedCycles: number;
        totalDurationSeconds: number;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"resisted">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        isSuccess: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        isSuccess: boolean;
    }, {
        isSuccess: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "resisted";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        isSuccess: boolean;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "resisted";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        isSuccess: boolean;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"question">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        questionId: z.ZodOptional<z.ZodString>;
        question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"emotion">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"shortText">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"slider1To10">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
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
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }>]>;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "recap"]>;
            value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
            formattedValue: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }, {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        question: {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question: {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "question";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "question";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"plan">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        planId: z.ZodString;
        plan: z.ZodUnion<[z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"time", z.ZodTypeDef, "time">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                weekdays: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                hour: number;
                minute: number;
                weekdays: number[];
            }, {
                hour: number;
                minute: number;
                weekdays: number[];
            }>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }>>, z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"location", z.ZodTypeDef, "location">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                locationName: z.ZodString;
                triggerType: z.ZodEnum<["arrival", "departure"]>;
                latitude: z.ZodNumber;
                longitude: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            }, {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            }>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }>>, z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            _ref: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }, {
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            type: z.ZodType<"recap", z.ZodTypeDef, "recap">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            trigger: z.ZodObject<{
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                weekdays: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                hour: number;
                minute: number;
                weekdays: number[];
            }, {
                hour: number;
                minute: number;
                weekdays: number[];
            }>;
            questionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            questionIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            questionIds?: string[] | undefined;
        }>>]>;
        introduction: z.ZodOptional<z.ZodString>;
        acceptedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        tacticsByPath: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            questionIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    }, {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            questionIds?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "plan";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            questionIds: string[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "plan";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "time";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "location";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "recap";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            description?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            questionIds?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"summary">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        summary: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        summary: string;
    }, {
        summary: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "summary";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        summary: string;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "summary";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        summary: string;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"widget_setup">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "widget_setup";
    userId: string;
    dateString: string;
    isDisplayable: true;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "widget_setup";
    userId: string;
    dateString: string;
    isDisplayable: true;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"show_tour">;
    isDisplayable: z.ZodLiteral<true>;
    text: z.ZodString;
    data: z.ZodObject<{
        steps: z.ZodArray<z.ZodObject<{
            elementRefName: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            confirmButtonLabel: z.ZodDefault<z.ZodString>;
            nextOnImpulseButtonPress: z.ZodOptional<z.ZodBoolean>;
            borderRadius: z.ZodOptional<z.ZodNumber>;
            innerPadding: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel: string;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }, {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel?: string | undefined;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }>, "many">;
        firstNavigateToRoute: z.ZodOptional<z.ZodString>;
        startButtonLabel: z.ZodOptional<z.ZodString>;
        completedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        includeCloseButton: z.ZodDefault<z.ZodBoolean>;
        closeButtonText: z.ZodDefault<z.ZodString>;
        closeButtonHref: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel: string;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        includeCloseButton: boolean;
        closeButtonText: string;
        closeButtonHref: string;
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
    }, {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel?: string | undefined;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
        includeCloseButton?: boolean | undefined;
        closeButtonText?: string | undefined;
        closeButtonHref?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    text: string;
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "show_tour";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel: string;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        includeCloseButton: boolean;
        closeButtonText: string;
        closeButtonHref: string;
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    text: string;
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "show_tour";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel?: string | undefined;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
        includeCloseButton?: boolean | undefined;
        closeButtonText?: string | undefined;
        closeButtonHref?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"link">;
    isDisplayable: z.ZodLiteral<true>;
    text: z.ZodString;
    link: z.ZodString;
    buttonText: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "link";
    userId: string;
    link: string;
    dateString: string;
    isDisplayable: true;
    buttonText: string;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    text: string;
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "link";
    userId: string;
    link: string;
    dateString: string;
    isDisplayable: true;
    buttonText: string;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"notify_support_group">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
        supportGroupsById: z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            membersById: z.ZodRecord<z.ZodString, z.ZodObject<{
                userId: z.ZodString;
                userProfile: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    invitationCode: z.ZodString;
                    emojiId: z.ZodOptional<z.ZodObject<{
                        color: z.ZodString;
                        emoji: z.ZodString;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    }, {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                }, {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>;
        }, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>;
        }>>;
    }, "strip", z.ZodTypeAny, {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    }, {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "notify_support_group";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "notify_support_group";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        color: string;
                        emoji: string;
                        name?: string | undefined;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"shared_moment">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        threadRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        threadSummaryData: z.ZodObject<{
            type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
            tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
            behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
            outcomeLogs: z.ZodArray<z.ZodAny, "many">;
            daySummaryLog: z.ZodOptional<z.ZodAny>;
            questionLogs: z.ZodArray<z.ZodAny, "many">;
            firstMessageLog: z.ZodOptional<z.ZodAny>;
            firstCallLog: z.ZodOptional<z.ZodAny>;
            hasContent: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionLogs: any[];
            hasContent: boolean;
            daySummaryLog?: any;
            firstMessageLog?: any;
            firstCallLog?: any;
        }, {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionLogs: any[];
            hasContent: boolean;
            daySummaryLog?: any;
            firstMessageLog?: any;
            firstCallLog?: any;
        }>;
        emojiId: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            emoji: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            color: string;
            emoji: string;
            name?: string | undefined;
        }, {
            color: string;
            emoji: string;
            name?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionLogs: any[];
            hasContent: boolean;
            daySummaryLog?: any;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    }, {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionLogs: any[];
            hasContent: boolean;
            daySummaryLog?: any;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "shared_moment";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionLogs: any[];
            hasContent: boolean;
            daySummaryLog?: any;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "shared_moment";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionLogs: any[];
            hasContent: boolean;
            daySummaryLog?: any;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"video">;
    isDisplayable: z.ZodLiteral<true>;
    title: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        sourceUri: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sourceUri: string;
    }, {
        sourceUri: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "video";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    text?: string | undefined;
    title?: string | undefined;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "video";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    text?: string | undefined;
    title?: string | undefined;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"ready_to_debrief">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "ready_to_debrief";
    userId: string;
    dateString: string;
    isDisplayable: true;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "ready_to_debrief";
    userId: string;
    dateString: string;
    isDisplayable: true;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"suggested_tactics">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactics: z.ZodArray<z.ZodObject<{
            tacticPath: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tacticPath: string;
            reason?: string | undefined;
        }, {
            tacticPath: string;
            reason?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
    }, {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "suggested_tactics";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "suggested_tactics";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>]>;
export declare const logIsAssistantMessageLog: (value: Omit<Log, "id">) => value is AssistantMessageLog;
export declare const isValidAssistantMessageLog: (value: unknown) => value is AssistantMessageLog;
export declare const logIsShowTourLog: (value: Omit<Log, "id">) => value is ShowTourLog;
export declare const isValidShowTourLog: (value: unknown) => value is ShowTourLog;
export declare const logIsNotifySupportGroupLog: (value: Omit<Log, "id">) => value is NotifySupportGroupLog;
export declare const isValidNotifySupportGroupLog: (value: unknown) => value is NotifySupportGroupLog;
export declare const logIsSharedMomentLog: (value: Omit<Log, "id">) => value is SharedMomentLog;
export declare const isValidSharedMomentLog: (value: unknown) => value is SharedMomentLog;
export declare const logIsDaySummaryLog: (value: Omit<Log, "id">) => value is DaySummaryLog;
export declare const isValidDaySummaryLog: (value: unknown) => value is DaySummaryLog;
export declare const logIsBehaviorLog: (value: Omit<Log, "id">) => value is BehaviorLog;
export declare const isValidBehaviorLog: (value: unknown) => value is BehaviorLog;
export declare const logIsCallLog: (value: Omit<Log, "id">) => value is CallLog;
export declare const isValidCallLog: (value: unknown) => value is CallLog;
export declare const logIsImpulseLog: (value: Omit<Log, "id">) => value is ImpulseLog;
export declare const isValidImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const logIsToolCallLog: (value: Omit<Log, "id">) => value is ToolCallLog;
export declare const isValidToolCallLog: (value: unknown) => value is ToolCallLog;
export declare const logIsWidgetSetupLog: (value: Omit<Log, "id">) => value is WidgetSetupLog;
export declare const isValidWidgetSetupLog: (value: unknown) => value is WidgetSetupLog;
export declare const logIsQuestionLog: (value: Omit<Log, "id">) => value is QuestionLog;
export declare const isValidQuestionLog: (value: unknown) => value is QuestionLog;
export declare const logIsTacticLog: (value: Omit<Log, "id">) => value is TacticLog;
export declare const isValidTacticLog: (value: unknown) => value is TacticLog;
export declare const logIsTacticSuggestionLog: (value: Omit<Log, "id">) => value is TacticSuggestionLog;
export declare const isValidTacticSuggestionLog: (value: unknown) => value is TacticSuggestionLog;
export declare const logIsUserMessageLog: (value: Omit<Log, "id">) => value is UserMessageLog;
export declare const isValidUserMessageLog: (value: unknown) => value is UserMessageLog;
export declare const logIsPlanLog: (value: Omit<Log, "id">) => value is PlanLog;
export declare const isValidPlanLog: (value: unknown) => value is PlanLog;
export declare const logIsSummaryLog: (value: Omit<Log, "id">) => value is SummaryLog;
export declare const isValidSummaryLog: (value: unknown) => value is SummaryLog;
export declare const logIsLinkLog: (value: Omit<Log, "id">) => value is LinkLog;
export declare const isValidLinkLog: (value: unknown) => value is LinkLog;
export declare const logIsReadyToDebriefLog: (value: Omit<Log, "id">) => value is ReadyToDebriefLog;
export declare const isValidReadyToDebriefLog: (value: unknown) => value is ReadyToDebriefLog;
export declare const logIsBreathingLog: (value: Omit<Log, "id">) => value is BreathingLog;
export declare const isValidBreathingLog: (value: unknown) => value is BreathingLog;
export declare const logIsResistedLog: (value: Omit<Log, "id">) => value is ResistedLog;
export declare const isValidResistedLog: (value: unknown) => value is ResistedLog;
export declare const logIsSuggestedTacticsLog: (value: Omit<Log, "id">) => value is SuggestedTacticsLog;
export declare const isValidSuggestedTacticsLog: (value: unknown) => value is SuggestedTacticsLog;
