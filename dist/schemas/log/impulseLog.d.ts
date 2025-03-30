import * as yup from "yup";
export declare const impulseLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    data: {};
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    type: "impulse_button_pressed";
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type ImpulseLog = yup.InferType<typeof impulseLogSchema>;
