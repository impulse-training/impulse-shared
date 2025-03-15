import * as yup from "yup";
export declare const impulseLogSchema: yup.ObjectSchema<{
    type: "impulse_button_pressed";
    userId: string;
    timestamp: import("../..").Timestamp;
    data: {};
    createdAt: import("../..").Timestamp | undefined;
    updatedAt: import("../..").Timestamp | undefined;
    isDisplayable: true;
}, yup.AnyObject, {
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
    isDisplayable: undefined;
}, "">;
