import * as yup from "yup";
import { BehaviorTrackedLog } from "./behaviorTrackedLog";
import { CallLog } from "./callLog";
import { GameplanLog } from "./gameplanLog";
import { ImpulseLog } from "./impulseLog";
import { AssistantMessageLog, MessageLog } from "./messageLog";
import { UserMessageLog } from "./messageLog/userMessageLog";
import { QuestionLog } from "./questionLog";
import { SummaryLog } from "./summaryLog";
import { TacticLog } from "./tacticLog";
import { ToolCallLog } from "./toolCallLog";
export declare const logSchemas: {
    user: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            message: import("openai/resources").ChatCompletionUserMessageParam;
        };
        callLogDocPath: string | undefined;
        type: "user_message";
        isDisplayable: true;
        audioAttachment: {
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
            } | undefined;
            uri: string;
            storagePath: string;
            contentType: string;
            type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
        } | undefined;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            message: undefined;
        } & {
            message: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        audioAttachment: {
            uri: undefined;
            storagePath: undefined;
            contentType: undefined;
            sizeBytes: undefined;
            type: undefined;
            metadata: {
                width: undefined;
                height: undefined;
                durationMs: undefined;
                transcript: undefined;
            };
        };
    }, "">;
    assistant_message: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            message: import("openai/resources").ChatCompletionAssistantMessageParam;
        };
        callLogDocPath: string | undefined;
        type: "assistant_message";
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            message: undefined;
        } & {
            message: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    call: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            livekitSessionId: string;
            livekitRoomName: string;
        };
        callLogDocPath: string | undefined;
        type: "call";
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            agentConnectedAt: undefined;
            endedAt: undefined;
            livekitSessionId: undefined;
            livekitRoomName: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
    }, "">;
    tool_call: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            message: import("openai/resources").ChatCompletionAssistantMessageParam;
            toolCallResults: import("openai/resources").ChatCompletionToolMessageParam[];
        };
        callLogDocPath: string | undefined;
        isDisplayable: false;
        type: "tool_call";
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            message: undefined;
            toolCallResults: "";
        };
        callLogDocPath: undefined;
        isDisplayable: undefined;
        type: undefined;
    }, "">;
    tactic_completed: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            tactic: import("..").Tactic;
        };
        callLogDocPath: string | undefined;
        type: NonNullable<"tactic_completed" | "tactic_viewed" | undefined>;
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            tactic: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    tactic_viewed: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            tactic: import("..").Tactic;
        };
        callLogDocPath: string | undefined;
        type: NonNullable<"tactic_completed" | "tactic_viewed" | undefined>;
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            tactic: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    impulse_button_pressed: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {};
        callLogDocPath: string | undefined;
        type: "impulse_button_pressed";
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {};
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    behavior_tracked: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            behaviorTrackingUnit?: string | undefined;
            behaviorId: string;
            behaviorName: string;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            value: number;
            formattedValue: string;
        };
        callLogDocPath: string | undefined;
        type: "behavior_tracked";
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            behaviorId: undefined;
            behaviorName: undefined;
            behaviorTrackingUnit: undefined;
            trackingType: undefined;
            value: undefined;
            formattedValue: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    question: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            question: {
                id?: string | undefined;
                suggestedResponses?: (string | undefined)[] | undefined;
                sliderConfig?: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                    defaultValue?: number | undefined;
                    min: number;
                    max: number;
                    step: number;
                } | undefined;
                scope?: "debrief" | undefined;
                order?: number | undefined;
                visibleForOutcomes?: (import("../../utils/outcomes").Outcome | undefined)[] | undefined;
                content: string;
                responseType: NonNullable<"text" | "slider" | "multiple_choice" | undefined>;
            };
            response: {} | null;
        };
        callLogDocPath: string | undefined;
        type: "question";
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            question: {
                id: undefined;
                content: undefined;
                responseType: undefined;
                suggestedResponses: "";
                sliderConfig: undefined;
                scope: undefined;
                order: undefined;
                visibleForOutcomes: "";
            };
            response: null;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    gameplan: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            acceptedAt?: import("../../types").Timestamp | undefined;
            shufflePressedAt?: import("../../types").Timestamp | undefined;
            pastGameplans?: {
                tactic: import("..").Tactic;
                exists: NonNullable<boolean | undefined>;
            }[][] | undefined;
            introduction?: string | undefined;
            gameplan: {
                tactic: import("..").Tactic;
                exists: NonNullable<boolean | undefined>;
            }[];
        };
        callLogDocPath: string | undefined;
        type: "gameplan";
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            gameplan: "";
            pastGameplans: "";
            introduction: undefined;
            acceptedAt: undefined;
            shufflePressedAt: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
    summary: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        data: {
            summary: string;
        };
        callLogDocPath: string | undefined;
        type: "summary";
        isDisplayable: true;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        data: {
            summary: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
    }, "">;
};
export declare const logTypes: string[];
export type LogType = (typeof logTypes)[number];
export type Log = TacticLog | ImpulseLog | BehaviorTrackedLog | QuestionLog | GameplanLog | ToolCallLog | MessageLog | SummaryLog | CallLog;
export * from "./behaviorTrackedLog";
export * from "./callLog";
export * from "./gameplanLog";
export * from "./impulseLog";
export * from "./messageLog";
export * from "./questionLog";
export * from "./summaryLog";
export * from "./tacticLog";
export * from "./toolCallLog";
export declare const logSchema: yup.Lazy<Log, yup.AnyObject, any>;
export declare const logIsAssistantMessageLog: (value: Omit<Log, "id">) => value is AssistantMessageLog;
export declare const isValidAssistantMessageLog: (value: unknown) => value is AssistantMessageLog;
export declare const logIsBehaviorTrackedLog: (value: Omit<Log, "id">) => value is BehaviorTrackedLog;
export declare const isValidBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
export declare const logIsCallLog: (value: Omit<Log, "id">) => value is CallLog;
export declare const isValidCallLog: (value: unknown) => value is CallLog;
export declare const logIsImpulseLog: (value: Omit<Log, "id">) => value is ImpulseLog;
export declare const isValidImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const logIsToolCallLog: (value: Omit<Log, "id">) => value is ToolCallLog;
export declare const isValidToolCallLog: (value: unknown) => value is ToolCallLog;
export declare const logIsQuestionLog: (value: Omit<Log, "id">) => value is QuestionLog;
export declare const isValidQuestionLog: (value: unknown) => value is QuestionLog;
export declare const logIsTacticLog: (value: Omit<Log, "id">) => value is TacticLog;
export declare const isValidTacticLog: (value: unknown) => value is TacticLog;
export declare const logIsUserMessageLog: (value: Omit<Log, "id">) => value is UserMessageLog;
export declare const isValidUserMessageLog: (value: unknown) => value is UserMessageLog;
export declare const logIsGameplanLog: (value: Omit<Log, "id">) => value is GameplanLog;
export declare const isValidGameplanLog: (value: unknown) => value is GameplanLog;
export declare const logIsSummaryLog: (value: Omit<Log, "id">) => value is SummaryLog;
export declare const isValidSummaryLog: (value: unknown) => value is SummaryLog;
