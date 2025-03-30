import * as yup from "yup";
export declare const behaviorTrackingDataSchema: yup.ObjectSchema<{
    behaviorId: string;
    behaviorName: string;
    behaviorTrackingUnit: string | undefined;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    value: number;
    formattedValue: string;
}, yup.AnyObject, {
    behaviorId: undefined;
    behaviorName: undefined;
    behaviorTrackingUnit: undefined;
    trackingType: undefined;
    value: undefined;
    formattedValue: undefined;
}, "">;
export type BehaviorTrackingData = yup.InferType<typeof behaviorTrackingDataSchema>;
export declare const behaviorTrackedLogSchema: yup.ObjectSchema<{
    id: string | undefined;
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
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    type: "behavior_tracked";
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
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
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type BehaviorTrackedLog = yup.InferType<typeof behaviorTrackedLogSchema>;
