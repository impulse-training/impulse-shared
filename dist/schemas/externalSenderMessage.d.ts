import { z } from "zod";
export declare const externalSenderMessageSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    date: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    content: z.ZodNullable<z.ZodString>;
    senderUid: z.ZodOptional<z.ZodString>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    externalId: z.ZodString;
    role: z.ZodEnum<["assistant", "user", "system", "tool"]>;
}, "strip", z.ZodTypeAny, {
    role: "assistant" | "user" | "system" | "tool";
    content: string | null;
    externalId: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    date?: import("../types").Timestamp | undefined;
    senderUid?: string | undefined;
    attachments?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
}, {
    role: "assistant" | "user" | "system" | "tool";
    content: string | null;
    externalId: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    date?: import("../types").Timestamp | undefined;
    senderUid?: string | undefined;
    attachments?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
}>;
export type ExternalSenderMessage = z.infer<typeof externalSenderMessageSchema>;
