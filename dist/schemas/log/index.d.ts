import * as yup from "yup";
import { BehaviorTrackedLog } from "./behaviorTrackedLog";
import { CallLog } from "./callLog";
import { GameplanLog } from "./gameplanLog";
import { ImpulseLog } from "./impulseLog";
import { LinkLog } from "./linkLog";
import { AssistantMessageLog, MessageLog } from "./messageLog";
import { UserMessageLog } from "./messageLog/userMessageLog";
import { QuestionLog } from "./questionLog";
import { ShowTourLog } from "./showTourLog";
import { SummaryLog } from "./summaryLog";
import { TacticLog } from "./tacticLog";
import { ToolCallLog } from "./toolCallLog";
import { WidgetSetupLog } from "./widgetSetupLog";
export declare const logSchemas: {
    user: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "user_message";
        isDisplayable: true;
        data: {
            message: import("openai/resources").ChatCompletionUserMessageParam;
        };
        audioAttachment: {
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    timestampMs?: number | undefined;
                    db: number;
                }[] | undefined;
            } | undefined;
            type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
            uri: string;
            storagePath: string;
            contentType: string;
        } | undefined;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            message: undefined;
        } & {
            message: undefined;
        };
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
                meterings: undefined;
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
        callLogDocPath: string | undefined;
        type: "assistant_message";
        isDisplayable: true;
        data: {
            message: import("openai/resources").ChatCompletionAssistantMessageParam;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            message: undefined;
        } & {
            message: undefined;
        };
    }, "">;
    call: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "call";
        data: {
            agentConnectedAt?: import("../../types").Timestamp | undefined;
            endedAt?: import("../../types").Timestamp | undefined;
            livekitSessionId: string;
            livekitRoomName: string;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        data: {
            agentConnectedAt: undefined;
            endedAt: undefined;
            livekitSessionId: undefined;
            livekitRoomName: undefined;
        };
    }, "">;
    tool_call: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        isDisplayable: false;
        type: "tool_call";
        data: {
            message: import("openai/resources").ChatCompletionAssistantMessageParam;
            toolCallResults: import("openai/resources").ChatCompletionToolMessageParam[];
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        isDisplayable: undefined;
        type: undefined;
        data: {
            message: undefined;
            toolCallResults: "";
        };
    }, "">;
    tactic_completed: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "tactic_completed";
        isDisplayable: true;
        data: {
            tactic: import("..").Tactic;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            tactic: undefined;
        };
    }, "">;
    tactic_viewed: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "tactic_completed";
        isDisplayable: true;
        data: {
            tactic: import("..").Tactic;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            tactic: undefined;
        };
    }, "">;
    impulse_button_pressed: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
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
        callLogDocPath: string | undefined;
        type: "behavior_tracked";
        isDisplayable: true;
        data: {
            behaviorTrackingUnit?: string | undefined;
            behaviorId: string;
            behaviorName: string;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            value: number;
            formattedValue: string;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            behaviorId: undefined;
            behaviorName: undefined;
            behaviorTrackingUnit: undefined;
            trackingType: undefined;
            value: undefined;
            formattedValue: undefined;
        };
    }, "">;
    question: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "question";
        isDisplayable: true;
        data: {
            response: {} | null;
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
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
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
    }, "">;
    gameplan: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "gameplan";
        isDisplayable: true;
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
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            gameplan: "";
            pastGameplans: "";
            introduction: undefined;
            acceptedAt: undefined;
            shufflePressedAt: undefined;
        };
    }, "">;
    summary: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "summary";
        isDisplayable: true;
        data: {
            summary: string;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            summary: undefined;
        };
    }, "">;
    widget_setup: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "widget_setup";
        isDisplayable: true;
        data: {
            impulseWidgetInstalled: NonNullable<boolean | undefined>;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            impulseWidgetInstalled: undefined;
        };
    }, "">;
    show_tour: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "show_tour";
        isDisplayable: true;
        text: string;
        data: {
            completedAt?: import("../../types").Timestamp | undefined;
            firstNavigateToRoute?: string | undefined;
            startButtonLabel?: string | undefined;
            steps: {
                nextOnImpulseButtonPress?: boolean | undefined;
                borderRadius?: number | undefined;
                innerPadding?: number | undefined;
                description: string;
                title: string;
                elementRefName: string;
                confirmButtonLabel: string;
            }[];
            includeCloseButton: boolean;
            closeButtonText: string;
            closeButtonHref: string;
        };
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        text: undefined;
        data: {
            steps: "";
            firstNavigateToRoute: undefined;
            startButtonLabel: undefined;
            completedAt: undefined;
            includeCloseButton: false;
            closeButtonText: "Close";
            closeButtonHref: "/";
        };
    }, "">;
    link: yup.ObjectSchema<{
        id: string | undefined;
        createdAt: import("../../types").Timestamp | undefined;
        updatedAt: import("../../types").Timestamp | undefined;
        userId: string;
        timestamp: import("../../types").Timestamp;
        dateString: string;
        callLogDocPath: string | undefined;
        type: "link";
        isDisplayable: true;
        text: string;
        link: string;
        buttonText: string;
    }, yup.AnyObject, {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        text: undefined;
        link: undefined;
        buttonText: undefined;
    }, "">;
};
export declare const logTypes: string[];
export type LogType = (typeof logTypes)[number];
export type Log = TacticLog | ImpulseLog | BehaviorTrackedLog | QuestionLog | GameplanLog | ToolCallLog | MessageLog | SummaryLog | CallLog | WidgetSetupLog | ShowTourLog | LinkLog;
export * from "./behaviorTrackedLog";
export * from "./callLog";
export * from "./gameplanLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./questionLog";
export * from "./showTourLog";
export * from "./summaryLog";
export * from "./tacticLog";
export * from "./toolCallLog";
export * from "./widgetSetupLog";
export declare const logSchema: yup.Lazy<Log, yup.AnyObject, any>;
export declare const logIsAssistantMessageLog: (value: Omit<Log, "id">) => value is AssistantMessageLog;
export declare const isValidAssistantMessageLog: (value: unknown) => value is AssistantMessageLog;
export declare const logIsShowTourLog: (value: Omit<Log, "id">) => value is ShowTourLog;
export declare const isValidShowTourLog: (value: unknown) => value is ShowTourLog;
export declare const logIsBehaviorTrackedLog: (value: Omit<Log, "id">) => value is BehaviorTrackedLog;
export declare const isValidBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
export declare const logIsCallLog: (value: Omit<Log, "id">) => value is CallLog;
export declare const isValidCallLog: (value: unknown) => value is CallLog;
export declare const logIsImpulseLog: (value: Omit<Log, "id">) => value is ImpulseLog;
export declare const isValidImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const logIsToolCallLog: (value: Omit<Log, "id">) => value is ToolCallLog;
export declare const isValidToolCallLog: (value: unknown) => value is ToolCallLog;
export declare const logIsWidgetSetupLog: (value: Omit<Log, "id">) => value is WidgetSetupLog;
export declare const isValidWidgetSetupLog: (value: unknown) => value is ToolCallLog;
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
export declare const logIsLinkLog: (value: Omit<Log, "id">) => value is LinkLog;
export declare const isValidLinkLog: (value: unknown) => value is LinkLog;
