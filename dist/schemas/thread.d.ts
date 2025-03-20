import * as yup from "yup";
export declare const threadSchema: yup.ObjectSchema<{
    id: string | undefined;
    title: string;
    type: "impulse" | "general" | "dayRecap";
    date: import("../types").Timestamp;
    behaviorDataByLogId: {
        [x: string]: {
            notes?: string | null | undefined;
            behaviorId: string;
            behaviorName: string;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            value: number;
        };
    };
    behaviorDataTotalsByBehaviorId: {
        [x: string]: {
            notes?: string | null | undefined;
            behaviorId: string;
            behaviorName: string;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            value: number;
        };
    };
    dateString: string;
    updatedAt: import("../types").Timestamp | undefined;
    createdAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    title: undefined;
    type: "general";
    date: undefined;
    behaviorDataByLogId: undefined;
    behaviorDataTotalsByBehaviorId: undefined;
    dateString: undefined;
    updatedAt: undefined;
    createdAt: undefined;
}, "">;
export type Thread = yup.InferType<typeof threadSchema>;
export declare const isThread: (value: unknown) => value is Thread;
