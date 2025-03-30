import * as yup from "yup";
export declare const tacticLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    data: {
        tactic: import("../tactic").Tactic;
    };
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    type: NonNullable<"tactic_completed" | "tactic_viewed" | undefined>;
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    data: {
        tactic: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type TacticLog = yup.InferType<typeof tacticLogSchema>;
