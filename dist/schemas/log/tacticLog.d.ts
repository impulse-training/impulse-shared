import * as yup from "yup";
export declare const tacticLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "tactic_completed";
    isDisplayable: true;
    data: {
        tactic: import("../tactic.old").Tactic;
        tacticCollectionId: string;
    };
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    callLogDocPath: undefined;
    type: undefined;
    isDisplayable: undefined;
    data: {
        tactic: undefined;
        tacticCollectionId: undefined;
    };
}, "">;
export type TacticLog = yup.InferType<typeof tacticLogSchema>;
