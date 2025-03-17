import * as yup from "yup";
export declare const tacticLogSchema: yup.ObjectSchema<{
    type: NonNullable<"tactic_completed" | "tactic_viewed" | undefined>;
    userId: string;
    timestamp: import("../../types").Timestamp;
    data: {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
    };
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    isDisplayable: true;
}, yup.AnyObject, {
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {
        tacticId: undefined;
        tacticTitle: undefined;
        tacticType: undefined;
    };
    createdAt: undefined;
    updatedAt: undefined;
    isDisplayable: undefined;
}, "">;
export type TacticLog = yup.InferType<typeof tacticLogSchema>;
