import * as yup from "yup";
export declare const scheduledRoutineSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    type: "scheduled";
    ordinal: number | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    data: {
        hour: number;
        minute: number;
        triggerType: NonNullable<"arrive" | "leave" | undefined>;
        weekdays: number[];
    };
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    type: undefined;
    ordinal: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    data: {
        hour: undefined;
        minute: undefined;
        triggerType: undefined;
        weekdays: "";
    };
}, "">;
export type ScheduledRoutine = yup.InferType<typeof scheduledRoutineSchema>;
