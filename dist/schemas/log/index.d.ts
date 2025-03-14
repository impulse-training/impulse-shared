import * as yup from "yup";
export declare const activityTypes: readonly ["message", "user", "agent", "tactic_completed", "tactic_uncompleted", "impulse_button_pressed", "behavior_tracked", "question"];
export declare const logBaseSchema: yup.ObjectSchema<{
    type: NonNullable<"message" | "user" | "agent" | "tactic_completed" | "tactic_uncompleted" | "impulse_button_pressed" | "behavior_tracked" | "question" | undefined>;
    userId: string;
    timestamp: import("../..").Timestamp;
    data: {};
    createdAt: import("../..").Timestamp | undefined;
    updatedAt: import("../..").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export * from "./agentLog";
export * from "./behaviorTrackedLog";
export * from "./impulseLog";
export * from "./questionLog";
export * from "./tacticLog";
export * from "./userLog";
