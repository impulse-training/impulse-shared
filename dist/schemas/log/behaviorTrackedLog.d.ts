import * as yup from "yup";
export declare const behaviorTrackedLogSchema: yup.ObjectSchema<{
    type: "behavior_tracked";
    userId: string;
    timestamp: import("../..").Timestamp;
    data: {
        notes?: string | null | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
    };
    createdAt: import("../..").Timestamp | undefined;
    updatedAt: import("../..").Timestamp | undefined;
    isDisplayable: true;
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
    isDisplayable: undefined;
}, "">;
