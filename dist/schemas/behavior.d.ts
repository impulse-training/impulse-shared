import * as yup from "yup";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const behaviorSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    description: string;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    gameplanTacticIds: (string | undefined)[];
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
    lastTrackedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    trackingType: undefined;
    gameplanTacticIds: never[];
    createdAt: undefined;
    updatedAt: undefined;
    lastTrackedAt: undefined;
}, "">;
