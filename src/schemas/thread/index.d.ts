import * as yup from "yup";
import { GeneralThread } from "./general";
import { ImpulseThread } from "./impulse";
import { OnboardingThread } from "./onboarding";
export * from "./general";
export * from "./impulse";
export * from "./onboarding";
export declare const threadSchemas: {
    general: yup.ObjectSchema<{
        id: string | undefined;
        title: string;
        type: "general";
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
    }, yup.AnyObject, never, "">;
    impulse: yup.ObjectSchema<{
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
    onboarding: yup.ObjectSchema<{
        id: string | undefined;
        title: string;
        type: "onboarding";
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
    }, yup.AnyObject, never, "">;
};
export declare const threadSchema: yup.Lazy<{
    type: string;
}, yup.AnyObject, any>;
export declare const threadIsGeneralThread: (value: Thread) => value is GeneralThread;
export declare const isValidGeneralThread: (value: unknown) => value is GeneralThread;
export declare const threadIsOnboardingThread: (value: Thread) => value is OnboardingThread;
export declare const isValidOnboardingThread: (value: unknown) => value is OnboardingThread;
export declare const threadIsImpulseThread: (value: Thread) => value is ImpulseThread;
export declare const isValidImpulseThread: (value: unknown) => value is ImpulseThread;
export type Thread = ImpulseThread | GeneralThread | OnboardingThread;
