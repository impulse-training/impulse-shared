/**
 * Log Schemas
 *
 * Defines Yup schemas for thread log data
 */
import * as yup from "yup";
export declare const activityTypes: readonly ["message", "tactic_completed", "tactic_uncompleted", "impulse_button_pressed", "behavior_tracked"];
export declare const activityLogSchema: yup.ObjectSchema<{
    type: NonNullable<"message" | "tactic_completed" | "tactic_uncompleted" | "impulse_button_pressed" | "behavior_tracked" | undefined>;
    timestamp: import("..").Timestamp;
    data: {};
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    timestamp: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const messageLogSchema: yup.ObjectSchema<{
    type: "message";
    timestamp: import("..").Timestamp;
    data: {
        content: string;
        role: NonNullable<"user" | "assistant" | undefined>;
    };
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    timestamp: undefined;
    data: {
        role: undefined;
        content: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const tacticActivityLogSchema: yup.ObjectSchema<{
    type: NonNullable<"tactic_completed" | "tactic_uncompleted" | "tactic_viewed" | undefined>;
    timestamp: import("..").Timestamp;
    data: {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
    };
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    timestamp: undefined;
    data: {
        tacticId: undefined;
        tacticTitle: undefined;
        tacticType: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const impulseLogSchema: yup.ObjectSchema<{
    type: "impulse_button_pressed";
    timestamp: import("..").Timestamp;
    data: {};
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    timestamp: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const behaviorTrackedLogSchema: yup.ObjectSchema<{
    type: "behavior_tracked";
    timestamp: import("..").Timestamp;
    data: {
        id?: string | undefined;
        notes?: string | null | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
    };
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    timestamp: undefined;
    data: {
        id: undefined;
        behaviorId: undefined;
        behaviorName: undefined;
        trackingType: undefined;
        value: undefined;
        notes: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
