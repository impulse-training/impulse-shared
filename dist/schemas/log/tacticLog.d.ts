import * as yup from "yup";
import { TacticLog } from "../../types";
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
}, "">;
export declare const isTacticLog: (value: unknown) => value is TacticLog;
