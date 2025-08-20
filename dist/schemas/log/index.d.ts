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
import { ToolCallLog } from "./toolCallLog";
import { VideoLog } from "./videoLog";
import { WidgetSetupLog } from "./widgetSetupLog";
import { TacticSuggestionLog } from "./tacticSuggestionLog";
export declare const logSchemas: {
    user: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
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
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
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
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "assistant_message";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    call: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
            summary?: string | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
        }, {
            livekitSessionId: string;
            livekitRoomName: string;
            summary?: string | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "call";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            livekitSessionId: string;
            livekitRoomName: string;
            summary?: string | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "call";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            livekitSessionId: string;
            livekitRoomName: string;
            summary?: string | undefined;
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    tool_call: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        isDisplayable: z.ZodLiteral<false>;
        type: z.ZodLiteral<"tool_call">;
        data: z.ZodObject<{
            message: z.ZodAny;
            toolCallResults: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            toolCallResults: any[];
            message?: any;
        }, {
            toolCallResults: any[];
            message?: any;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "tool_call";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: false;
        data: {
            toolCallResults: any[];
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "tool_call";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: false;
        data: {
            toolCallResults: any[];
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    tactic_completed: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"tactic_completed">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            tactic: z.ZodAny;
            stepCount: z.ZodOptional<z.ZodNumber>;
            completedStepIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            completed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        }, {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "tactic_completed";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "tactic_completed";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    tactic_suggestion: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
            source?: "userPlan" | "library" | "improvised" | undefined;
            reason?: string | undefined;
            collectionRefPath?: string | undefined;
            tactic?: any;
        }, {
            tacticPath: string;
            source?: "userPlan" | "library" | "improvised" | undefined;
            reason?: string | undefined;
            collectionRefPath?: string | undefined;
            tactic?: any;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "tactic_suggestion";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            tacticPath: string;
            source?: "userPlan" | "library" | "improvised" | undefined;
            reason?: string | undefined;
            collectionRefPath?: string | undefined;
            tactic?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "tactic_suggestion";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            tacticPath: string;
            source?: "userPlan" | "library" | "improvised" | undefined;
            reason?: string | undefined;
            collectionRefPath?: string | undefined;
            tactic?: any;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    day_summary: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"day_summary">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            targetDayDateString: z.ZodString;
            behaviorDataTotalByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            targetDayDateString: string;
            trackingLogsById?: Record<string, any> | undefined;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        }, {
            targetDayDateString: string;
            trackingLogsById?: Record<string, any> | undefined;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "day_summary";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            targetDayDateString: string;
            trackingLogsById?: Record<string, any> | undefined;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "day_summary";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            targetDayDateString: string;
            trackingLogsById?: Record<string, any> | undefined;
            behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    tactic_viewed: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"tactic_completed">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            tactic: z.ZodAny;
            stepCount: z.ZodOptional<z.ZodNumber>;
            completedStepIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            completed: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        }, {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "tactic_completed";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "tactic_completed";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            tactic?: any;
            stepCount?: number | undefined;
            completedStepIds?: string[] | undefined;
            completed?: boolean | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    impulse_button_pressed: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"impulse_button_pressed">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "impulse_button_pressed";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "impulse_button_pressed";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    behavior: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }, {
            value: number;
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "behavior";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            value: number;
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "behavior";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            value: number;
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    question: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"question">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            questionId: z.ZodOptional<z.ZodString>;
            question: z.ZodAny;
            response: z.ZodOptional<z.ZodObject<{
                responseType: z.ZodEnum<["text", "slider1To10", "recap"]>;
                value: z.ZodAny;
                formattedValue: z.ZodString;
                color: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                responseType: "recap" | "text" | "slider1To10";
                formattedValue: string;
                value?: any;
                color?: string | undefined;
            }, {
                responseType: "recap" | "text" | "slider1To10";
                formattedValue: string;
                value?: any;
                color?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            question?: any;
            questionId?: string | undefined;
            response?: {
                responseType: "recap" | "text" | "slider1To10";
                formattedValue: string;
                value?: any;
                color?: string | undefined;
            } | undefined;
        }, {
            question?: any;
            questionId?: string | undefined;
            response?: {
                responseType: "recap" | "text" | "slider1To10";
                formattedValue: string;
                value?: any;
                color?: string | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "question";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            question?: any;
            questionId?: string | undefined;
            response?: {
                responseType: "recap" | "text" | "slider1To10";
                formattedValue: string;
                value?: any;
                color?: string | undefined;
            } | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "question";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            question?: any;
            questionId?: string | undefined;
            response?: {
                responseType: "recap" | "text" | "slider1To10";
                formattedValue: string;
                value?: any;
                color?: string | undefined;
            } | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    plan: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"plan">;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
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
                summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
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
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "time";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "time";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
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
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "location";
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "location";
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
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
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "recap";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }, {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "recap";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
                tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
                lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            } & {
                triggerKeywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.UnknownKeysParam, z.ZodTypeAny, {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "impulse";
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            }, {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "impulse";
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
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
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "time";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "location";
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "recap";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "impulse";
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            tacticsByPath?: Record<string, any> | undefined;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
        }, {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "time";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "location";
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "recap";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "impulse";
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            tacticsByPath?: Record<string, any> | undefined;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "plan";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "time";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "location";
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "recap";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "impulse";
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            tacticsByPath?: Record<string, any> | undefined;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "plan";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            plan: ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "time";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "location";
                trigger: {
                    locationName: string;
                    triggerType: "arrival" | "departure";
                    latitude: number;
                    longitude: number;
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "recap";
                trigger: {
                    hour: number;
                    minute: number;
                    weekdays: number[];
                };
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
            }) | ({
                id: string;
                _ref: import("../..").DocumentReferenceLike<unknown>;
            } & {
                name: string;
                tactics: import("../..").DocumentReferenceLike<unknown>[];
                type: "impulse";
                id?: string | undefined;
                ordinal?: number | undefined;
                isTemplate?: boolean | undefined;
                summary?: string | undefined;
                summaryRefreshRequired?: boolean | undefined;
                lastUsedAt?: import("../../types").Timestamp | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                deletedAt?: import("../../types").Timestamp | undefined;
                triggerKeywords?: string[] | undefined;
            });
            tacticsByPath?: Record<string, any> | undefined;
            introduction?: string | undefined;
            acceptedAt?: import("../../types").Timestamp | undefined;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    summary: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            summary: string;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "summary";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            summary: string;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    resisted: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"resisted">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "resisted";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "resisted";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    widget_setup: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"widget_setup">;
        isDisplayable: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        type: "widget_setup";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "widget_setup";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    show_tour: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
        text: string;
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "show_tour";
        text: string;
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    link: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"link">;
        isDisplayable: z.ZodLiteral<true>;
        text: z.ZodString;
        link: z.ZodString;
        buttonText: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "link";
        text: string;
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        link: string;
        buttonText: string;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "link";
        text: string;
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        link: string;
        buttonText: string;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    notify_support_group: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "notify_support_group";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
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
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
    }>;
    video: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
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
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            sourceUri: string;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        text?: string | undefined;
        title?: string | undefined;
        callLogDocPath?: string | undefined;
    }, {
        type: "video";
        dateString: string;
        userId: string;
        timestamp: import("../../types").Timestamp;
        isDisplayable: true;
        data: {
            sourceUri: string;
        };
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        text?: string | undefined;
        title?: string | undefined;
        callLogDocPath?: string | undefined;
    }>;
};
export declare const logTypes: string[];
export type LogType = (typeof logTypes)[number];
export type Log = TacticLog | TacticSuggestionLog | ImpulseLog | BehaviorLog | QuestionLog | PlanLog | ToolCallLog | MessageLog | SummaryLog | CallLog | WidgetSetupLog | ShowTourLog | LinkLog | NotifySupportGroupLog | VideoLog | ResistedLog | DaySummaryLog;
export * from "./behaviorLog";
export * from "./callLog";
export * from "./daySummaryLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./notifySupportGroupLog";
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
export declare const logSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
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
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
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
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "assistant_message";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
        summary?: string | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    }, {
        livekitSessionId: string;
        livekitRoomName: string;
        summary?: string | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "call";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        livekitSessionId: string;
        livekitRoomName: string;
        summary?: string | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "call";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        livekitSessionId: string;
        livekitRoomName: string;
        summary?: string | undefined;
        agentConnectedAt?: import("../../types").Timestamp | undefined;
        endedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    isDisplayable: z.ZodLiteral<false>;
    type: z.ZodLiteral<"tool_call">;
    data: z.ZodObject<{
        message: z.ZodAny;
        toolCallResults: z.ZodArray<z.ZodAny, "many">;
    }, "strip", z.ZodTypeAny, {
        toolCallResults: any[];
        message?: any;
    }, {
        toolCallResults: any[];
        message?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "tool_call";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: false;
    data: {
        toolCallResults: any[];
        message?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "tool_call";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: false;
    data: {
        toolCallResults: any[];
        message?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"tactic_completed">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodAny;
        stepCount: z.ZodOptional<z.ZodNumber>;
        completedStepIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        completed: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    }, {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "tactic_completed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "tactic_completed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
        source?: "userPlan" | "library" | "improvised" | undefined;
        reason?: string | undefined;
        collectionRefPath?: string | undefined;
        tactic?: any;
    }, {
        tacticPath: string;
        source?: "userPlan" | "library" | "improvised" | undefined;
        reason?: string | undefined;
        collectionRefPath?: string | undefined;
        tactic?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "tactic_suggestion";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tacticPath: string;
        source?: "userPlan" | "library" | "improvised" | undefined;
        reason?: string | undefined;
        collectionRefPath?: string | undefined;
        tactic?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "tactic_suggestion";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tacticPath: string;
        source?: "userPlan" | "library" | "improvised" | undefined;
        reason?: string | undefined;
        collectionRefPath?: string | undefined;
        tactic?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"day_summary">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        targetDayDateString: z.ZodString;
        behaviorDataTotalByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        targetDayDateString: string;
        trackingLogsById?: Record<string, any> | undefined;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
    }, {
        targetDayDateString: string;
        trackingLogsById?: Record<string, any> | undefined;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "day_summary";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        targetDayDateString: string;
        trackingLogsById?: Record<string, any> | undefined;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "day_summary";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        targetDayDateString: string;
        trackingLogsById?: Record<string, any> | undefined;
        behaviorDataTotalByBehaviorId?: Record<string, any> | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"impulse_button_pressed">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "impulse_button_pressed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "impulse_button_pressed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }, {
        value: number;
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "behavior";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        value: number;
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "behavior";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        value: number;
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"question">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        questionId: z.ZodOptional<z.ZodString>;
        question: z.ZodAny;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "slider1To10", "recap"]>;
            value: z.ZodAny;
            formattedValue: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            responseType: "recap" | "text" | "slider1To10";
            formattedValue: string;
            value?: any;
            color?: string | undefined;
        }, {
            responseType: "recap" | "text" | "slider1To10";
            formattedValue: string;
            value?: any;
            color?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        question?: any;
        questionId?: string | undefined;
        response?: {
            responseType: "recap" | "text" | "slider1To10";
            formattedValue: string;
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question?: any;
        questionId?: string | undefined;
        response?: {
            responseType: "recap" | "text" | "slider1To10";
            formattedValue: string;
            value?: any;
            color?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "question";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        question?: any;
        questionId?: string | undefined;
        response?: {
            responseType: "recap" | "text" | "slider1To10";
            formattedValue: string;
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "question";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        question?: any;
        questionId?: string | undefined;
        response?: {
            responseType: "recap" | "text" | "slider1To10";
            formattedValue: string;
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"plan">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
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
            summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
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
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "time";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "time";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
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
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "location";
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "location";
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
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
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "recap";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }, {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "recap";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            summaryRefreshRequired: z.ZodOptional<z.ZodBoolean>;
            tactics: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            lastUsedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            deletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        } & {
            triggerKeywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.UnknownKeysParam, z.ZodTypeAny, {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "impulse";
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        }, {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "impulse";
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "time";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "location";
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "recap";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "impulse";
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        tacticsByPath?: Record<string, any> | undefined;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
    }, {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "time";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "location";
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "recap";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "impulse";
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        tacticsByPath?: Record<string, any> | undefined;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "plan";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "time";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "location";
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "recap";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "impulse";
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        tacticsByPath?: Record<string, any> | undefined;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "plan";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        plan: ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "time";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "location";
            trigger: {
                locationName: string;
                triggerType: "arrival" | "departure";
                latitude: number;
                longitude: number;
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "recap";
            trigger: {
                hour: number;
                minute: number;
                weekdays: number[];
            };
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
        }) | ({
            id: string;
            _ref: import("../..").DocumentReferenceLike<unknown>;
        } & {
            name: string;
            tactics: import("../..").DocumentReferenceLike<unknown>[];
            type: "impulse";
            id?: string | undefined;
            ordinal?: number | undefined;
            isTemplate?: boolean | undefined;
            summary?: string | undefined;
            summaryRefreshRequired?: boolean | undefined;
            lastUsedAt?: import("../../types").Timestamp | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            deletedAt?: import("../../types").Timestamp | undefined;
            triggerKeywords?: string[] | undefined;
        });
        tacticsByPath?: Record<string, any> | undefined;
        introduction?: string | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        summary: string;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "summary";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        summary: string;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"resisted">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "resisted";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "resisted";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"widget_setup">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "widget_setup";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "widget_setup";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
    text: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "show_tour";
    text: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"link">;
    isDisplayable: z.ZodLiteral<true>;
    text: z.ZodString;
    link: z.ZodString;
    buttonText: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "link";
    text: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    link: string;
    buttonText: string;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "link";
    text: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    link: string;
    buttonText: string;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "notify_support_group";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
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
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    title?: string | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "video";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    title?: string | undefined;
    callLogDocPath?: string | undefined;
}>]>;
export declare const logIsAssistantMessageLog: (value: Omit<Log, "id">) => value is AssistantMessageLog;
export declare const isValidAssistantMessageLog: (value: unknown) => value is AssistantMessageLog;
export declare const logIsShowTourLog: (value: Omit<Log, "id">) => value is ShowTourLog;
export declare const isValidShowTourLog: (value: unknown) => value is ShowTourLog;
export declare const logIsNotifySupportGroupLog: (value: Omit<Log, "id">) => value is NotifySupportGroupLog;
export declare const isValidNotifySupportGroupLog: (value: unknown) => value is NotifySupportGroupLog;
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
