import * as yup from "yup";
import { MessageLog } from "../../types";
export declare const messageLogSchema: yup.ObjectSchema<{
    type: "message";
    userId: string;
    timestamp: import("../../types").Timestamp;
    data: {
        content: string;
        role: NonNullable<"user" | "assistant" | undefined>;
    };
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
}, yup.AnyObject, {
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {
        role: undefined;
        content: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const isMessageLog: (value: unknown) => value is MessageLog;
