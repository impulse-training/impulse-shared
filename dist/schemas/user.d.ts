import * as yup from "yup";
export declare const userSchema: yup.ObjectSchema<{
    id: string | undefined;
    email: string | undefined;
    displayName: string | undefined;
    photoURL: string | undefined;
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
    notificationsEnabled: boolean;
    dayRecapEnabled: boolean;
    dayRecapTime: import("..").Timestamp | undefined;
    lastDayRecapDate: import("..").Timestamp | undefined;
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
