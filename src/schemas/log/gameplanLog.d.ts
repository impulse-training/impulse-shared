import * as yup from "yup";
export declare const gameplanSchema: yup.ArraySchema<{
    tactic: import("../tactic").Tactic;
    exists: NonNullable<boolean | undefined>;
}[] | undefined, yup.AnyObject, "", "">;
export declare const gameplanLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "gameplan";
    isDisplayable: true;
    data: {
        introduction?: string | undefined;
        pastGameplans?: {
            tactic: import("../tactic").Tactic;
            exists: NonNullable<boolean | undefined>;
        }[][] | undefined;
        shufflePressedAt?: import("../../types").Timestamp | undefined;
        acceptedAt?: import("../../types").Timestamp | undefined;
        gameplan: {
            tactic: import("../tactic").Tactic;
            exists: NonNullable<boolean | undefined>;
        }[];
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
        gameplan: "";
        pastGameplans: "";
        introduction: undefined;
        acceptedAt: undefined;
        shufflePressedAt: undefined;
    };
}, "">;
export type Gameplan = yup.InferType<typeof gameplanSchema>;
export type GameplanLog = yup.InferType<typeof gameplanLogSchema>;
