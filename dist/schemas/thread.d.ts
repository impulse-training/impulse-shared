/**
 * Thread Schemas
 *
 * Defines Yup schemas for thread data
 */
import * as yup from 'yup';
export declare const threadSchema: yup.ObjectSchema<{
    id: string;
    title: string;
    createdAt: {};
    updatedAt: {};
    lastUpdated: {};
    isImpulseMoment: boolean | undefined;
    tactics: (string | undefined)[] | undefined;
}, yup.AnyObject, {
    id: undefined;
    title: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    lastUpdated: undefined;
    isImpulseMoment: undefined;
    tactics: "";
}, "">;
export declare const validateThread: (data: unknown) => Promise<{
    isImpulseMoment?: boolean | undefined;
    tactics?: (string | undefined)[] | undefined;
    id: string;
    title: string;
    createdAt: {};
    updatedAt: {};
    lastUpdated: {};
}>;
