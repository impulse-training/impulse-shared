import * as yup from "yup";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const behaviorSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    description: string;
    ordinal: number;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    trackingUnit: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
    lastTrackedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    ordinal: 0;
    trackingType: undefined;
    trackingUnit: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    lastTrackedAt: undefined;
}, "">;
export type TrackingType = (typeof trackingTypes)[number];
export type Behavior = yup.InferType<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
