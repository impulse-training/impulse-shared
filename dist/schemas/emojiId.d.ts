import { z } from "zod";
export declare const emojiIdSchema: z.ZodObject<{
    emoji: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    emoji: string;
}, {
    name: string;
    emoji: string;
}>;
export type EmojiId = z.infer<typeof emojiIdSchema>;
export declare const emojiIdDocSchema: z.ZodObject<{
    emojiId: z.ZodObject<{
        emoji: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        emoji: string;
    }, {
        name: string;
        emoji: string;
    }>;
    isAvailable: z.ZodBoolean;
    ordinal: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    emojiId: {
        name: string;
        emoji: string;
    };
    isAvailable: boolean;
    ordinal?: number | undefined;
}, {
    emojiId: {
        name: string;
        emoji: string;
    };
    isAvailable: boolean;
    ordinal?: number | undefined;
}>;
export type EmojiIdDoc = z.infer<typeof emojiIdDocSchema>;
