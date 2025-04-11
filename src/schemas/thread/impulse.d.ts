import * as yup from "yup";
export declare const impulseThreadSchema: yup.ObjectSchema<{
    id: string | undefined;
    title: string;
    type: "impulse";
    date: import("../../types").Timestamp;
    gameplan: {
        tactic: import("..").Tactic;
        exists: NonNullable<boolean | undefined>;
    }[] | undefined;
    dateString: string;
    behaviorDataByLogId: {
        [x: string]: {
            behaviorTrackingUnit?: string | undefined;
            trackingType: NonNullable<"counter" | "timer" | undefined>;
            behaviorId: string;
            behaviorName: string;
            value: number;
            formattedValue: string;
        };
    };
    behaviorDataTotals: {
        behaviorTrackingUnit?: string | undefined;
        trackingType: NonNullable<"counter" | "timer" | undefined>;
        behaviorId: string;
        behaviorName: string;
        value: number;
        formattedValue: string;
    }[] | undefined;
    outcome: "success" | "partial" | "setback" | undefined;
    systemPrompt: string | undefined;
    summary: string | undefined;
    debriefedAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    behaviorId: string | null;
}, yup.AnyObject, never, "">;
export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
