import * as yup from "yup";
export declare const userDataSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
    recoveryKeyHash: string | undefined;
    role: NonNullable<"user" | "coach" | undefined>;
    notificationsEnabled: boolean;
    dayRecapEnabled: boolean;
    dayRecapTime: import("../types").Timestamp | undefined;
    lastDayRecapDate: import("../types").Timestamp | undefined;
    theme: NonNullable<"light" | "dark" | "system" | undefined>;
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    recoveryKeyHash: undefined;
    role: "user";
    notificationsEnabled: true;
    dayRecapEnabled: true;
    dayRecapTime: undefined;
    lastDayRecapDate: undefined;
    theme: "system";
}, "">;
export type UserData = yup.InferType<typeof userDataSchema>;
export declare const isUserData: (value: unknown) => value is UserData;
