/**
 * Log Schemas
 *
 * Defines Yup schemas for thread log data
 */
import * as yup from 'yup';
export declare const activityTypes: readonly ["message", "tactic_completed", "tactic_uncompleted", "impulse_button_pressed", "behavior_tracked"];
export declare const activityLogSchema: yup.ObjectSchema<{
    id: string;
    type: NonNullable<"message" | "tactic_completed" | "tactic_uncompleted" | "impulse_button_pressed" | "behavior_tracked" | undefined>;
    timestamp: {};
    data: {};
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    timestamp: undefined;
    data: {};
}, "">;
export declare const messageLogSchema: yup.ObjectSchema<{
    id: string;
    type: "message";
    timestamp: {};
    data: {
        role: NonNullable<"user" | "assistant" | undefined>;
        content: string;
    };
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    timestamp: undefined;
    data: {
        role: undefined;
        content: undefined;
    };
}, "">;
export declare const tacticActivityLogSchema: yup.ObjectSchema<{
    id: string;
    type: NonNullable<"tactic_completed" | "tactic_uncompleted" | "tactic_viewed" | undefined>;
    timestamp: {};
    data: {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
    };
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    timestamp: undefined;
    data: {
        tacticId: undefined;
        tacticTitle: undefined;
        tacticType: undefined;
    };
}, "">;
export declare const impulseLogSchema: yup.ObjectSchema<{
    id: string;
    type: "impulse_button_pressed";
    timestamp: {};
    data: {};
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    timestamp: undefined;
    data: {};
}, "">;
export declare const behaviorTrackedLogSchema: yup.ObjectSchema<{
    id: string;
    type: "behavior_tracked";
    timestamp: {};
    data: {
        notes?: string | null | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
    };
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    timestamp: undefined;
    data: {
        behaviorId: undefined;
        behaviorName: undefined;
        trackingType: undefined;
        value: undefined;
        notes: undefined;
    };
}, "">;
export declare const validateActivityLog: (data: unknown) => Promise<{
    id: string;
    type: NonNullable<"message" | "tactic_completed" | "tactic_uncompleted" | "impulse_button_pressed" | "behavior_tracked" | undefined>;
    timestamp: {};
    data: {};
}>;
export declare const validateMessageLog: (data: unknown) => Promise<{
    id: string;
    type: "message";
    timestamp: {};
    data: {
        role: NonNullable<"user" | "assistant" | undefined>;
        content: string;
    };
}>;
export declare const validateTacticActivityLog: (data: unknown) => Promise<{
    id: string;
    type: NonNullable<"tactic_completed" | "tactic_uncompleted" | "tactic_viewed" | undefined>;
    timestamp: {};
    data: {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
    };
}>;
export declare const validateImpulseLog: (data: unknown) => Promise<{
    id: string;
    type: "impulse_button_pressed";
    timestamp: {};
    data: {};
}>;
export declare const validateBehaviorTrackedLog: (data: unknown) => Promise<{
    id: string;
    type: "behavior_tracked";
    timestamp: {};
    data: {
        notes?: string | null | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
    };
}>;
