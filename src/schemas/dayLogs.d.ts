import * as yup from "yup";
export declare const dayLogsSchema: yup.ObjectSchema<{
    dateString: string;
    userId: string;
    logsById: {
        [x: string]: import("./log").Log;
    };
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    dateString: undefined;
    userId: undefined;
    logsById: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare function isValidDayData(value: unknown): value is DayData;
export type DayData = yup.InferType<typeof dayLogsSchema>;
