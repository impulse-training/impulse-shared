import * as yup from "yup";
export declare const widgetSetupLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "widget_setup";
    isDisplayable: true;
    data: {
        impulseWidgetInstalled: NonNullable<boolean | undefined>;
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
    data: {
        impulseWidgetInstalled: undefined;
    };
}, "">;
export type WidgetSetupLog = yup.InferType<typeof widgetSetupLogSchema>;
