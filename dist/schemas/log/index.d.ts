import { z } from "zod";
import { BehaviorLog } from "./behaviorLog";
import { CallLog } from "./callLog";
import { DaySummaryLog } from "./daySummaryLog";
import { ImpulseLog } from "./impulseLog";
import { LinkLog } from "./linkLog";
import { AssistantMessageLog, MessageLog } from "./messageLog";
import { UserMessageLog } from "./messageLog/userMessageLog";
import { NotifySupportGroupLog } from "./notifySupportGroupLog";
import { PlanLog } from "./planLog";
import { QuestionLog } from "./questionLog";
import { ResistedLog } from "./resistedLog";
import { ShowTourLog } from "./showTourLog";
import { SummaryLog } from "./summaryLog";
import { TacticLog } from "./tacticLog";
import { TacticSuggestionLog } from "./tacticSuggestionLog";
import { ToolCallLog } from "./toolCallLog";
import { VideoLog } from "./videoLog";
import { WidgetSetupLog } from "./widgetSetupLog";
import { SharedMomentLog } from "./sharedMomentLog";
import { ReadyToDebriefLog } from "./readyToDebriefLog";
export declare const logSchemas: {
    user: z.ZodObject<{
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
        type: "user_message";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
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
        type: "user_message";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
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
        type: "assistant_message";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
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
        type: "assistant_message";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
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
    call: z.ZodObject<{
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
        type: z.ZodLiteral<"call">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            livekitSessionId: z.ZodString;
            livekitRoomName: z.ZodString;
            summary: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            livekitSessionId: string;
            livekitRoomName: string;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            summary?: string | undefined;
        }, {
            livekitSessionId: string;
            livekitRoomName: string;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            summary?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "call";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            livekitSessionId: string;
            livekitRoomName: string;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            summary?: string | undefined;
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
        type: "call";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            livekitSessionId: string;
            livekitRoomName: string;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            summary?: string | undefined;
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
    tool_call: z.ZodObject<{
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
        type: "tool_call";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "tool_call";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    tactic: z.ZodObject<{
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
                        text: z.ZodOptional<z.ZodString>;
                        question: z.ZodString;
                        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                        isPinned: z.ZodOptional<z.ZodBoolean>;
                        responseType: z.ZodLiteral<"text">;
                        scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
                    } & {
                        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                        suggestedResponses?: string[] | undefined;
                    }, {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                        suggestedResponses?: string[] | undefined;
                    }>, z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        text: z.ZodOptional<z.ZodString>;
                        question: z.ZodString;
                        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                        isPinned: z.ZodOptional<z.ZodBoolean>;
                        responseType: z.ZodLiteral<"slider1To10">;
                        scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
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
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }, {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }>, z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        text: z.ZodOptional<z.ZodString>;
                        question: z.ZodString;
                        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                        isPinned: z.ZodOptional<z.ZodBoolean>;
                        responseType: z.ZodLiteral<"recap">;
                        scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
                    }, "strip", z.ZodTypeAny, {
                        isTemplate: boolean;
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }, {
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }>]>;
                    text: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    question: {
                        isTemplate: boolean;
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                    repeatCount: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    mode: "affirmation";
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
            planId: z.ZodOptional<z.ZodString>;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
            planId?: string | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
    tactic_suggestion: z.ZodObject<{
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
        type: "tactic_suggestion";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            tacticPath: string;
            tactic?: any;
            reason?: string | undefined;
            source?: "userPlan" | "library" | "improvised" | undefined;
            collectionRefPath?: string | undefined;
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
        type: "tactic_suggestion";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            tacticPath: string;
            tactic?: any;
            reason?: string | undefined;
            source?: "userPlan" | "library" | "improvised" | undefined;
            collectionRefPath?: string | undefined;
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
    day_summary: z.ZodObject<{
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
        type: z.ZodLiteral<"day_summary">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            targetDayDateString: z.ZodString;
            behaviorDataTotalByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            targetDayDateString: string;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
        }, {
            targetDayDateString: string;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "day_summary";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            targetDayDateString: string;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
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
        type: "day_summary";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            targetDayDateString: string;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
            trackingLogsById?: Record<string, any> | undefined;
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
    tactic_viewed: z.ZodObject<{
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
                        text: z.ZodOptional<z.ZodString>;
                        question: z.ZodString;
                        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                        isPinned: z.ZodOptional<z.ZodBoolean>;
                        responseType: z.ZodLiteral<"text">;
                        scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
                    } & {
                        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                        suggestedResponses?: string[] | undefined;
                    }, {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                        suggestedResponses?: string[] | undefined;
                    }>, z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        text: z.ZodOptional<z.ZodString>;
                        question: z.ZodString;
                        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                        isPinned: z.ZodOptional<z.ZodBoolean>;
                        responseType: z.ZodLiteral<"slider1To10">;
                        scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
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
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }, {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }>, z.ZodObject<{
                        id: z.ZodOptional<z.ZodString>;
                        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        text: z.ZodOptional<z.ZodString>;
                        question: z.ZodString;
                        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                        isPinned: z.ZodOptional<z.ZodBoolean>;
                        responseType: z.ZodLiteral<"recap">;
                        scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
                    }, "strip", z.ZodTypeAny, {
                        isTemplate: boolean;
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }, {
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    }>]>;
                    text: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    question: {
                        isTemplate: boolean;
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                    repeatCount: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    text: string;
                    mode: "affirmation";
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
            planId: z.ZodOptional<z.ZodString>;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
            planId?: string | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        isTemplate: boolean;
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
                        question: string;
                        responseType: "recap";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "slider1To10";
                        sliderConfig: {
                            minLabel?: string | undefined;
                            maxLabel?: string | undefined;
                        };
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
                    } | {
                        question: string;
                        responseType: "text";
                        createdAt?: import("../../types").Timestamp | undefined;
                        updatedAt?: import("../../types").Timestamp | undefined;
                        id?: string | undefined;
                        text?: string | undefined;
                        isTemplate?: boolean | undefined;
                        lastAskedAt?: import("../../types").Timestamp | undefined;
                        lastAnsweredAt?: import("../../types").Timestamp | undefined;
                        numberOfAnswers?: number | undefined;
                        isPinned?: boolean | undefined;
                        scope?: "impulse" | "debrief" | "recap" | undefined;
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
    impulse_button_pressed: z.ZodObject<{
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
        type: z.ZodLiteral<"impulse_button_pressed">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "impulse_button_pressed";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "impulse_button_pressed";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    behavior: z.ZodObject<{
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
        type: "behavior";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "behavior";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    question: z.ZodObject<{
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
        type: z.ZodLiteral<"question">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            questionId: z.ZodOptional<z.ZodString>;
            question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodOptional<z.ZodString>;
                question: z.ZodString;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"text">;
                scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
            } & {
                suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                isTemplate: boolean;
                question: string;
                responseType: "text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
                suggestedResponses?: string[] | undefined;
            }, {
                question: string;
                responseType: "text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
                suggestedResponses?: string[] | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodOptional<z.ZodString>;
                question: z.ZodString;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"slider1To10">;
                scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
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
                question: string;
                responseType: "slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            }, {
                question: string;
                responseType: "slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodOptional<z.ZodString>;
                question: z.ZodString;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"recap">;
                scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
            }, "strip", z.ZodTypeAny, {
                isTemplate: boolean;
                question: string;
                responseType: "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            }, {
                question: string;
                responseType: "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            }>]>;
            response: z.ZodOptional<z.ZodObject<{
                responseType: z.ZodEnum<["text", "slider1To10", "recap"]>;
                value: z.ZodAny;
                formattedValue: z.ZodString;
                color: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                formattedValue: string;
                responseType: "recap" | "text" | "slider1To10";
                value?: any;
                color?: string | undefined;
            }, {
                formattedValue: string;
                responseType: "recap" | "text" | "slider1To10";
                value?: any;
                color?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            question: {
                isTemplate: boolean;
                question: string;
                responseType: "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                isTemplate: boolean;
                question: string;
                responseType: "slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                isTemplate: boolean;
                question: string;
                responseType: "text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
                suggestedResponses?: string[] | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "recap" | "text" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }, {
            question: {
                question: string;
                responseType: "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                question: string;
                responseType: "slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                question: string;
                responseType: "text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
                suggestedResponses?: string[] | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "recap" | "text" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "question";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            question: {
                isTemplate: boolean;
                question: string;
                responseType: "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                isTemplate: boolean;
                question: string;
                responseType: "slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                isTemplate: boolean;
                question: string;
                responseType: "text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
                suggestedResponses?: string[] | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "recap" | "text" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
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
        type: "question";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            question: {
                question: string;
                responseType: "recap";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                question: string;
                responseType: "slider1To10";
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
            } | {
                question: string;
                responseType: "text";
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                text?: string | undefined;
                isTemplate?: boolean | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                scope?: "impulse" | "debrief" | "recap" | undefined;
                suggestedResponses?: string[] | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "recap" | "text" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
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
    plan: z.ZodObject<{
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
            }, z.UnknownKeysParam, z.ZodTypeAny, {
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
                type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
                ordinal: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodOptional<z.ZodBoolean>;
                summary: z.ZodOptional<z.ZodString>;
                tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                triggerKeywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                type: "impulse";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            }, {
                type: "impulse";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
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
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "impulse";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
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
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "impulse";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "plan";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "impulse";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
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
        type: "plan";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                type: "impulse";
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                id?: string | undefined;
                ordinal?: number | undefined;
                summary?: string | undefined;
                isTemplate?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            planId: string;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
            tacticsByPath?: Record<string, any> | undefined;
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
    summary: z.ZodObject<{
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
        type: "summary";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            summary: string;
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
        type: "summary";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            summary: string;
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
    resisted: z.ZodObject<{
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
        type: z.ZodLiteral<"resisted">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "resisted";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "resisted";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    widget_setup: z.ZodObject<{
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
        type: z.ZodLiteral<"widget_setup">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "widget_setup";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "widget_setup";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    show_tour: z.ZodObject<{
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
        type: "show_tour";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        text: string;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "show_tour";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        text: string;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    link: z.ZodObject<{
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
        type: z.ZodLiteral<"link">;
        isDisplayable: z.ZodLiteral<true>;
        text: z.ZodString;
        link: z.ZodString;
        buttonText: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "link";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        link: string;
        text: string;
        buttonText: string;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "link";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        link: string;
        text: string;
        buttonText: string;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    notify_support_group: z.ZodObject<{
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
        type: "notify_support_group";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "notify_support_group";
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
    video: z.ZodObject<{
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
        type: "video";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            sourceUri: string;
        };
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        title?: string | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
        text?: string | undefined;
    }, {
        type: "video";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            sourceUri: string;
        };
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        title?: string | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
        text?: string | undefined;
    }>;
    shared_moment: z.ZodObject<{
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
        type: z.ZodLiteral<"shared_moment">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            threadRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
            thread: z.ZodAny;
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
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
            thread?: any;
        }, {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
            thread?: any;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "shared_moment";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
            thread?: any;
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
        type: "shared_moment";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            threadRef: import("../..").DocumentReferenceLike<unknown>;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
            thread?: any;
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
    ready_to_debrief: z.ZodObject<{
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
        type: z.ZodLiteral<"ready_to_debrief">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "ready_to_debrief";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }, {
        type: "ready_to_debrief";
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        replyTactic?: {
            currentStepIndex: number;
            tactic?: any;
        } | undefined;
    }>;
};
export declare const logTypes: string[];
export type LogType = (typeof logTypes)[number];
export type Log = TacticLog | TacticSuggestionLog | ImpulseLog | BehaviorLog | QuestionLog | PlanLog | ToolCallLog | MessageLog | SummaryLog | CallLog | WidgetSetupLog | ShowTourLog | LinkLog | NotifySupportGroupLog | SharedMomentLog | VideoLog | ResistedLog | DaySummaryLog | ReadyToDebriefLog;
export * from "./behaviorLog";
export * from "./callLog";
export * from "./daySummaryLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./notifySupportGroupLog";
export * from "./sharedMomentLog";
export * from "./planLog";
export * from "./questionLog";
export * from "./resistedLog";
export * from "./showTourLog";
export * from "./summaryLog";
export * from "./tacticLog";
export * from "./tacticSuggestionLog";
export * from "./toolCallLog";
export * from "./videoLog";
export * from "./widgetSetupLog";
export * from "./readyToDebriefLog";
export declare const logSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    type: "user_message";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
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
    type: "user_message";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
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
    type: "assistant_message";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
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
    type: "assistant_message";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"call">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        agentConnectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        endedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        livekitSessionId: z.ZodString;
        livekitRoomName: z.ZodString;
        summary: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        livekitSessionId: string;
        livekitRoomName: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        summary?: string | undefined;
    }, {
        livekitSessionId: string;
        livekitRoomName: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        summary?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "call";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        livekitSessionId: string;
        livekitRoomName: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        summary?: string | undefined;
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
    type: "call";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        livekitSessionId: string;
        livekitRoomName: string;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
        summary?: string | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: "tool_call";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "tool_call";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
                    text: z.ZodOptional<z.ZodString>;
                    question: z.ZodString;
                    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                    isPinned: z.ZodOptional<z.ZodBoolean>;
                    responseType: z.ZodLiteral<"text">;
                    scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
                } & {
                    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    isTemplate: boolean;
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                    suggestedResponses?: string[] | undefined;
                }, {
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                    suggestedResponses?: string[] | undefined;
                }>, z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    text: z.ZodOptional<z.ZodString>;
                    question: z.ZodString;
                    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                    isPinned: z.ZodOptional<z.ZodBoolean>;
                    responseType: z.ZodLiteral<"slider1To10">;
                    scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
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
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                }, {
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                }>, z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    text: z.ZodOptional<z.ZodString>;
                    question: z.ZodString;
                    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                    isPinned: z.ZodOptional<z.ZodBoolean>;
                    responseType: z.ZodLiteral<"recap">;
                    scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
                }, "strip", z.ZodTypeAny, {
                    isTemplate: boolean;
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                }, {
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                }>]>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                question: {
                    isTemplate: boolean;
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
                repeatCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                text: string;
                mode: "affirmation";
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
        planId: z.ZodOptional<z.ZodString>;
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
        planId?: string | undefined;
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    isTemplate: boolean;
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
                    question: string;
                    responseType: "recap";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "slider1To10";
                    sliderConfig: {
                        minLabel?: string | undefined;
                        maxLabel?: string | undefined;
                    };
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
                } | {
                    question: string;
                    responseType: "text";
                    createdAt?: import("../../types").Timestamp | undefined;
                    updatedAt?: import("../../types").Timestamp | undefined;
                    id?: string | undefined;
                    text?: string | undefined;
                    isTemplate?: boolean | undefined;
                    lastAskedAt?: import("../../types").Timestamp | undefined;
                    lastAnsweredAt?: import("../../types").Timestamp | undefined;
                    numberOfAnswers?: number | undefined;
                    isPinned?: boolean | undefined;
                    scope?: "impulse" | "debrief" | "recap" | undefined;
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
}>, z.ZodObject<{
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
    type: "tactic_suggestion";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
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
    type: "tactic_suggestion";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"day_summary">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        targetDayDateString: z.ZodString;
        behaviorDataTotalByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        targetDayDateString: string;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
    }, {
        targetDayDateString: string;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "day_summary";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        targetDayDateString: string;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
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
    type: "day_summary";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        targetDayDateString: string;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"impulse_button_pressed">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "impulse_button_pressed";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "impulse_button_pressed";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: "behavior";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "behavior";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"question">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        questionId: z.ZodOptional<z.ZodString>;
        question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            question: z.ZodString;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            isTemplate: boolean;
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            question: z.ZodString;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"slider1To10">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
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
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }, {
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            question: z.ZodString;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"recap">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
        }, "strip", z.ZodTypeAny, {
            isTemplate: boolean;
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }, {
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }>]>;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "slider1To10", "recap"]>;
            value: z.ZodAny;
            formattedValue: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }, {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        question: {
            isTemplate: boolean;
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question: {
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "question";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            isTemplate: boolean;
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
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
    type: "question";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
        }, z.UnknownKeysParam, z.ZodTypeAny, {
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
            type: z.ZodType<"impulse", z.ZodTypeDef, "impulse">;
            ordinal: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            triggerKeywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            type: "impulse";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        }, {
            type: "impulse";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
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
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "impulse";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
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
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "impulse";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "plan";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "impulse";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
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
    type: "plan";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            type: "impulse";
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            ordinal?: number | undefined;
            summary?: string | undefined;
            isTemplate?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        planId: string;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        tacticsByPath?: Record<string, any> | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: "summary";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        summary: string;
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
    type: "summary";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        summary: string;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"resisted">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "resisted";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "resisted";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"widget_setup">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "widget_setup";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "widget_setup";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: "show_tour";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    text: string;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "show_tour";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    text: string;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"link">;
    isDisplayable: z.ZodLiteral<true>;
    text: z.ZodString;
    link: z.ZodString;
    buttonText: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "link";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    link: string;
    text: string;
    buttonText: string;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "link";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    link: string;
    text: string;
    buttonText: string;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: "notify_support_group";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "notify_support_group";
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"shared_moment">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        threadRef: z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>;
        thread: z.ZodAny;
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
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
        thread?: any;
    }, {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
        thread?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "shared_moment";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
        thread?: any;
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
    type: "shared_moment";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        threadRef: import("../..").DocumentReferenceLike<unknown>;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
        thread?: any;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>, z.ZodObject<{
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
    type: "video";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    title?: string | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
    text?: string | undefined;
}, {
    type: "video";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    title?: string | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
    text?: string | undefined;
}>, z.ZodObject<{
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
    type: z.ZodLiteral<"ready_to_debrief">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "ready_to_debrief";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "ready_to_debrief";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
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
export declare const logIsResistedLog: (value: Omit<Log, "id">) => value is ResistedLog;
export declare const isValidResistedLog: (value: unknown) => value is ResistedLog;
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
