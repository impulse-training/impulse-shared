import * as yup from "yup";
export declare const threadSchema: yup.ObjectSchema<{
    id: string | undefined;
    title: string;
    type: "impulse" | "general" | "dayRecap";
    updatedAt: import("..").Timestamp | undefined;
    createdAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    title: undefined;
    type: "general";
    updatedAt: undefined;
    createdAt: undefined;
}, "">;
