import * as yup from "yup";
export declare const threadSchema: yup.ObjectSchema<{
    id: string | undefined;
    title: string;
    type: "impulse" | "general" | "dayRecap";
    date: import("..").Timestamp;
    updatedAt: import("..").Timestamp | undefined;
    createdAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    title: undefined;
    type: "general";
    date: undefined;
    updatedAt: undefined;
    createdAt: undefined;
}, "">;
