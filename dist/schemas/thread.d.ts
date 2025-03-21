import * as yup from "yup";
export declare const threadSchema: yup.ObjectSchema<{
    id: string | undefined;
    title: string;
    type: "impulse" | "general" | "dayRecap";
    date: import("../types").Timestamp;
    dateString: string;
    behaviorDataByLogId: {
        [x: string]: {
            behaviorTrackingUnit?: string | undefined;
            behaviorId: string;
            behaviorName: string;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            value: number;
            formattedValue: string;
        };
    };
    behaviorDataTotals: {
        behaviorTrackingUnit?: string | undefined;
        behaviorId: string;
        behaviorName: string;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        value: number;
        formattedValue: string;
    }[] | undefined;
    outcome: string | undefined;
    updatedAt: import("../types").Timestamp | undefined;
    createdAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    title: undefined;
    type: "general";
    date: undefined;
    dateString: undefined;
    behaviorDataByLogId: undefined;
    behaviorDataTotals: "";
    outcome: undefined;
    updatedAt: undefined;
    createdAt: undefined;
}, "">;
export type Thread = yup.InferType<typeof threadSchema>;
export declare const isThread: (value: unknown) => value is Thread;
