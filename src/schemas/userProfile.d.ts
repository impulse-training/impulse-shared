import * as yup from "yup";
export declare const userProfileSchema: yup.ObjectSchema<{
    emojiId: {
        color: string;
        emoji: string;
    } | undefined;
}, yup.AnyObject, {
    emojiId: undefined;
}, "">;
export type UserProfile = yup.InferType<typeof userProfileSchema>;
