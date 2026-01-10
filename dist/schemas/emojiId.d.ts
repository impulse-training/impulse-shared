import z from "zod";
export declare const emojiIdSchema: z.ZodObject<{
    emoji: z.ZodString;
}, "strip", z.ZodTypeAny, {
    emoji: string;
}, {
    emoji: string;
}>;
export type EmojiId = z.infer<typeof emojiIdSchema>;
export declare const emojiIdDocSchema: z.ZodObject<{
    emojiId: z.ZodObject<{
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        emoji: string;
    }, {
        emoji: string;
    }>;
    isAvailable: z.ZodBoolean;
    ordinal: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    emojiId: {
        emoji: string;
    };
    isAvailable: boolean;
    ordinal?: number | undefined;
}, {
    emojiId: {
        emoji: string;
    };
    isAvailable: boolean;
    ordinal?: number | undefined;
}>;
export type EmojiIdDoc = z.infer<typeof emojiIdDocSchema>;
