import * as yup from "yup";
export declare enum TourIcon {
    DockBehaviorsButton = "dockBehaviorsButton",
    DockMetricsButton = "dockMetricsButton"
}
export declare const tourStepSchema: yup.ObjectSchema<{
    elementRefName: string;
    title: string;
    description: string;
    confirmButtonLabel: string;
    nextOnImpulseButtonPress: boolean | undefined;
    borderRadius: number | undefined;
    innerPadding: number | undefined;
}, yup.AnyObject, {
    elementRefName: undefined;
    title: undefined;
    description: undefined;
    confirmButtonLabel: "Ok";
    nextOnImpulseButtonPress: undefined;
    borderRadius: undefined;
    innerPadding: undefined;
}, "">;
export type TourStep = yup.InferType<typeof tourStepSchema>;
export declare const showTourLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "show_tour";
    isDisplayable: true;
    text: string;
    data: {
        firstNavigateToRoute?: string | undefined;
        startButtonLabel?: string | undefined;
        completedAt?: import("../../types").Timestamp | undefined;
        steps: {
            nextOnImpulseButtonPress?: boolean | undefined;
            borderRadius?: number | undefined;
            innerPadding?: number | undefined;
            description: string;
            title: string;
            elementRefName: string;
            confirmButtonLabel: string;
        }[];
        includeCloseButton: boolean;
        closeButtonText: string;
        closeButtonHref: string;
    };
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    callLogDocPath: undefined;
    type: undefined;
    isDisplayable: undefined;
    text: undefined;
    data: {
        steps: "";
        firstNavigateToRoute: undefined;
        startButtonLabel: undefined;
        completedAt: undefined;
        includeCloseButton: false;
        closeButtonText: "Close";
        closeButtonHref: "/";
    };
}, "">;
export type ShowTourLog = yup.InferType<typeof showTourLogSchema>;
