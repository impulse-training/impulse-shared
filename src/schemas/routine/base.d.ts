import * as yup from "yup";
export declare function routineBaseSchema<T extends string>(type: T): yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    type: T;
    ordinal: number | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    type: undefined;
    ordinal: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
