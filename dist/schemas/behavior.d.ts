import * as yup from "yup";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const behaviorSchema: yup.ObjectSchema<{
    name: string;
    description: string;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    gameplanTacticIds: (string | undefined)[];
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    name: undefined;
    description: undefined;
    trackingType: undefined;
    gameplanTacticIds: never[];
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
