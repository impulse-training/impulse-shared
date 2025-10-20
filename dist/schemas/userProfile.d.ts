import { z } from "zod";
export declare const userProfileSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    invitationCode: z.ZodString;
    emojiId: z.ZodOptional<z.ZodObject<{
        emoji: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        emoji: string;
    }, {
        name: string;
        emoji: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    invitationCode: string;
    id?: string | undefined;
    emojiId?: {
        name: string;
        emoji: string;
    } | undefined;
}, {
    invitationCode: string;
    id?: string | undefined;
    emojiId?: {
        name: string;
        emoji: string;
    } | undefined;
}>;
export type UserProfile = z.infer<typeof userProfileSchema>;
