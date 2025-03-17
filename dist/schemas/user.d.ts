import * as yup from "yup";
export declare const userDataSchema: yup.ObjectSchema<{
    id: string | undefined;
    email: string | undefined;
    displayName: string | undefined;
    photoURL: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
    notificationsEnabled: boolean;
    dayRecapEnabled: boolean;
    dayRecapTime: import("../types").Timestamp | undefined;
    lastDayRecapDate: import("../types").Timestamp | undefined;
    theme: NonNullable<"system" | "light" | "dark" | undefined>;
}, yup.AnyObject, {
    id: undefined;
    email: undefined;
    displayName: undefined;
    photoURL: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    notificationsEnabled: true;
    dayRecapEnabled: true;
    dayRecapTime: undefined;
    lastDayRecapDate: undefined;
    theme: "system";
}, "">;
export type UserData = yup.InferType<typeof userDataSchema>;
export declare const isUserData: (value: unknown) => value is UserData;
