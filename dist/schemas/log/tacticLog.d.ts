import * as yup from "yup";
export declare const tacticLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    data: {
        tactic: import("../tactic").Tactic;
    };
    callLogDocPath: string | undefined;
    type: NonNullable<"tactic_completed" | "tactic_viewed" | undefined>;
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    data: {
        tactic: undefined;
    };
    callLogDocPath: undefined;
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type TacticLog = yup.InferType<typeof tacticLogSchema>;
