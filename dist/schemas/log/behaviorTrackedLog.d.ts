import * as yup from "yup";
import { BehaviorTrackedLog } from "../../types";
export declare const behaviorTrackedLogSchema: yup.ObjectSchema<{
    type: "behavior_tracked";
    userId: string;
    timestamp: import("../../types").Timestamp;
    data: {
        notes?: string | null | undefined;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        behaviorId: string;
        behaviorName: string;
        value: number;
    };
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {
        behaviorId: undefined;
        behaviorName: undefined;
        trackingType: undefined;
        value: undefined;
        notes: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const isBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
