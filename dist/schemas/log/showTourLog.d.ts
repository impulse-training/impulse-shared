import { z } from "zod";
export declare enum TourIcon {
    DockBehaviorsButton = "dockBehaviorsButton",
    DockMetricsButton = "dockMetricsButton"
}
export declare const tourStepSchema: z.ZodObject<{
    elementRefName: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    confirmButtonLabel: z.ZodDefault<z.ZodString>;
    nextOnImpulseButtonPress: z.ZodOptional<z.ZodBoolean>;
    borderRadius: z.ZodOptional<z.ZodNumber>;
    innerPadding: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    elementRefName: string;
    confirmButtonLabel: string;
    nextOnImpulseButtonPress?: boolean | undefined;
    borderRadius?: number | undefined;
    innerPadding?: number | undefined;
}, {
    title: string;
    description: string;
    elementRefName: string;
    confirmButtonLabel?: string | undefined;
    nextOnImpulseButtonPress?: boolean | undefined;
    borderRadius?: number | undefined;
    innerPadding?: number | undefined;
}>;
export type TourStep = z.infer<typeof tourStepSchema>;
export declare const showTourLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    replyTactic: z.ZodOptional<z.ZodObject<{
        tactic: z.ZodAny;
        currentStepIndex: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currentStepIndex: number;
        tactic?: any;
    }, {
        currentStepIndex: number;
        tactic?: any;
    }>>;
} & {
    type: z.ZodLiteral<"show_tour">;
    isDisplayable: z.ZodLiteral<true>;
    text: z.ZodString;
    data: z.ZodObject<{
        steps: z.ZodArray<z.ZodObject<{
            elementRefName: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            confirmButtonLabel: z.ZodDefault<z.ZodString>;
            nextOnImpulseButtonPress: z.ZodOptional<z.ZodBoolean>;
            borderRadius: z.ZodOptional<z.ZodNumber>;
            innerPadding: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel: string;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }, {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel?: string | undefined;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }>, "many">;
        firstNavigateToRoute: z.ZodOptional<z.ZodString>;
        startButtonLabel: z.ZodOptional<z.ZodString>;
        completedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        includeCloseButton: z.ZodDefault<z.ZodBoolean>;
        closeButtonText: z.ZodDefault<z.ZodString>;
        closeButtonHref: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel: string;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        includeCloseButton: boolean;
        closeButtonText: string;
        closeButtonHref: string;
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
    }, {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel?: string | undefined;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
        includeCloseButton?: boolean | undefined;
        closeButtonText?: string | undefined;
        closeButtonHref?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    text: string;
    type: "show_tour";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel: string;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        includeCloseButton: boolean;
        closeButtonText: string;
        closeButtonHref: string;
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    text: string;
    type: "show_tour";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        steps: {
            title: string;
            description: string;
            elementRefName: string;
            confirmButtonLabel?: string | undefined;
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
        }[];
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
        includeCloseButton?: boolean | undefined;
        closeButtonText?: string | undefined;
        closeButtonHref?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type ShowTourLog = z.infer<typeof showTourLogSchema>;
