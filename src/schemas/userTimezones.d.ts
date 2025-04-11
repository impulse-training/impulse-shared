import * as yup from "yup";
export declare const userTimezoneSchema: yup.ObjectSchema<{
    timezone: string;
    timezoneOffset: number | undefined;
    createdAt: {} | undefined;
    updatedAt: {} | undefined;
}, yup.AnyObject, {
    timezone: undefined;
    timezoneOffset: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type UserTimezones = yup.InferType<typeof userTimezoneSchema>;
