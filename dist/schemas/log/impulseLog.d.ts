import * as yup from "yup";
import { ImpulseLog } from "../../types";
export declare const impulseLogSchema: yup.ObjectSchema<{
    type: "impulse_button_pressed";
    userId: string;
    timestamp: import("../../types").Timestamp;
    data: {};
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {};
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const isImpulseLog: (value: unknown) => value is ImpulseLog;
