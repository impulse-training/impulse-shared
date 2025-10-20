import { z } from "zod";
export declare const strategySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isImported: z.ZodOptional<z.ZodBoolean>;
    plans: z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    createdByProfile: z.ZodOptional<z.ZodObject<{
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
    }>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    plans: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    id?: string | undefined;
    description?: string | undefined;
    isImported?: boolean | undefined;
    createdByProfile?: {
        invitationCode: string;
        id?: string | undefined;
        emojiId?: {
            name: string;
            emoji: string;
        } | undefined;
    } | undefined;
}, {
    name: string;
    plans: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    id?: string | undefined;
    description?: string | undefined;
    isImported?: boolean | undefined;
    createdByProfile?: {
        invitationCode: string;
        id?: string | undefined;
        emojiId?: {
            name: string;
            emoji: string;
        } | undefined;
    } | undefined;
}>;
export type Strategy = z.infer<typeof strategySchema>;
