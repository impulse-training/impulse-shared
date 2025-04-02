import * as yup from "yup";
export declare const impulseLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    data: {};
    callLogDocPath: string | undefined;
    type: "impulse_button_pressed";
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    data: {};
    callLogDocPath: undefined;
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type ImpulseLog = yup.InferType<typeof impulseLogSchema>;
