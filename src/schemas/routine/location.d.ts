import * as yup from "yup";
export declare const locationRoutineSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    type: "location";
    ordinal: number | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    data: {
        triggerType: NonNullable<"arrival" | "departure" | undefined>;
        locationName: string;
        latitude: number;
        longitude: number;
    };
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    type: undefined;
    ordinal: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    data: {
        locationName: undefined;
        triggerType: undefined;
        latitude: undefined;
        longitude: undefined;
    };
}, "">;
export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
