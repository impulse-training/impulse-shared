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
    timestamp: Date;
    data: {};
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    timestamp: undefined;
    data: undefined;
}, "">;
export declare const messageLogSchema: yup.ObjectSchema<{
    id: string;
    type: "message";
    timestamp: Date;
    data: {
        content: string;
        role: NonNullable<"user" | "assistant" | undefined>;
    };
}, yup.AnyObject, never, "">;
export declare const tacticActivityLogSchema: yup.ObjectSchema<{
    id: string;
    type: NonNullable<"tactic_completed" | "tactic_uncompleted" | "tactic_viewed" | undefined>;
    timestamp: Date;
    data: {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
    };
}, yup.AnyObject, never, "">;
export declare const impulseLogSchema: yup.ObjectSchema<{
    id: string;
    type: "impulse_button_pressed";
    timestamp: Date;
    data: {
        behaviorId: string;
        behaviorName: string;
    };
}, yup.AnyObject, never, "">;
export declare const behaviorTrackedLogSchema: yup.ObjectSchema<{
    id: string;
    type: "behavior_tracked";
    timestamp: Date;
    data: {
        notes?: string | null | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
    };
}, yup.AnyObject, never, "">;
export declare const validateActivityLog: (data: unknown) => Promise<{
    id: string;
    type: NonNullable<"message" | "tactic_completed" | "tactic_uncompleted" | "impulse_button_pressed" | "behavior_tracked" | undefined>;
    timestamp: Date;
    data: {};
}>;
export declare const validateMessageLog: (data: unknown) => Promise<{
    id: string;
    type: "message";
    timestamp: Date;
    data: {
        content: string;
        role: NonNullable<"user" | "assistant" | undefined>;
    };
}>;
export declare const validateTacticActivityLog: (data: unknown) => Promise<{
    id: string;
    type: NonNullable<"tactic_completed" | "tactic_uncompleted" | "tactic_viewed" | undefined>;
    timestamp: Date;
    data: {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
    };
}>;
export declare const validateImpulseLog: (data: unknown) => Promise<{
    id: string;
    type: "impulse_button_pressed";
    timestamp: Date;
    data: {
        behaviorId: string;
        behaviorName: string;
    };
}>;
export declare const validateBehaviorTrackedLog: (data: unknown) => Promise<{
    id: string;
    type: "behavior_tracked";
    timestamp: Date;
    data: {
        notes?: string | null | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
    };
}>;
