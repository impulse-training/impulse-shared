import * as yup from "yup";
export declare const impulseLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: "impulse_button_pressed";
    userId: string;
    timestamp: import("../../types").Timestamp;
    data: {};
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
    isDisplayable: undefined;
}, "">;
export type ImpulseLog = yup.InferType<typeof impulseLogSchema>;
