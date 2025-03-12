/**
 * Thread Schemas
 *
 * Defines Yup schemas for thread data
 */
import * as yup from "yup";
export declare const threadSchema: yup.ObjectSchema<{
    title: string;
    isImpulseMoment: boolean | undefined;
    tactics: (string | undefined)[] | undefined;
    updatedAt: import("..").Timestamp | undefined;
    createdAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    title: undefined;
    isImpulseMoment: undefined;
    tactics: "";
    updatedAt: undefined;
    createdAt: undefined;
}, "">;
