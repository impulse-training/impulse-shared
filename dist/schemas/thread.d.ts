import * as yup from "yup";
export type Outcome = "success" | "partial" | "setback";
export declare const outcomes: Outcome[];
export declare const outcomeSchema: yup.StringSchema<"setback" | "partial" | "success" | undefined, yup.AnyObject, undefined, "">;
export declare const threadSchema: yup.ObjectSchema<{
    id: string | undefined;
    title: string;
    type: "impulse" | "general" | "dayRecap";
    date: import("../types").Timestamp;
    gameplan: {
        tactic: {
            type: string;
        };
        exists: NonNullable<boolean | undefined>;
    }[] | undefined;
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
    outcome: "setback" | "partial" | "success" | undefined;
    updatedAt: import("../types").Timestamp | undefined;
    createdAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    title: undefined;
    type: "general";
    date: undefined;
    gameplan: "";
    dateString: undefined;
    behaviorDataByLogId: undefined;
    behaviorDataTotals: "";
    outcome: undefined;
    updatedAt: undefined;
    createdAt: undefined;
}, "">;
export type Thread = yup.InferType<typeof threadSchema>;
export declare const isValidThread: (value: unknown) => value is Thread;
