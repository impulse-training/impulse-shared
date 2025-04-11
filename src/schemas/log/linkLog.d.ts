import * as yup from "yup";
export declare const linkLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "link";
    isDisplayable: true;
    text: string;
    link: string;
    buttonText: string;
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
    link: undefined;
    buttonText: undefined;
}, "">;
export type LinkLog = yup.InferType<typeof linkLogSchema>;
