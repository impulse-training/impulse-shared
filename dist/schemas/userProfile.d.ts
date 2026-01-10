import { z } from "zod";
export declare const userProfileSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    invitationCode: z.ZodString;
    emojiId: z.ZodOptional<z.ZodObject<{
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        emoji: string;
    }, {
        emoji: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    invitationCode: string;
    id?: string | undefined;
    emojiId?: {
        emoji: string;
    } | undefined;
}, {
    invitationCode: string;
    id?: string | undefined;
    emojiId?: {
        emoji: string;
    } | undefined;
}>;
export type UserProfile = z.infer<typeof userProfileSchema>;
