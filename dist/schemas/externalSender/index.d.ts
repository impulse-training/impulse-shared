import { z } from "zod";
import { WhatsappExternalSender } from "./whatsappExternalSender";
export * from "./whatsappExternalSender";
export declare const externalSenderSchemas: {
    readonly whatsapp: z.ZodObject<{
        type: z.ZodLiteral<"whatsapp">;
        uid: z.ZodString;
        senderName: z.ZodOptional<z.ZodString>;
        defaultTargetTacticRef: z.ZodOptional<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        filesUpdatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    } & {
        phoneNumber: z.ZodString;
        defaultSystemMessage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "whatsapp";
        uid: string;
        phoneNumber: string;
        defaultSystemMessage: string;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        senderName?: string | undefined;
        defaultTargetTacticRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
        filesUpdatedAt?: import("../../types").Timestamp | undefined;
    }, {
        type: "whatsapp";
        uid: string;
        phoneNumber: string;
        defaultSystemMessage: string;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        senderName?: string | undefined;
        defaultTargetTacticRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
        filesUpdatedAt?: import("../../types").Timestamp | undefined;
    }>;
};
export declare const externalSenderSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"whatsapp">;
    uid: z.ZodString;
    senderName: z.ZodOptional<z.ZodString>;
    defaultTargetTacticRef: z.ZodOptional<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    filesUpdatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
} & {
    phoneNumber: z.ZodString;
    defaultSystemMessage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "whatsapp";
    uid: string;
    phoneNumber: string;
    defaultSystemMessage: string;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    senderName?: string | undefined;
    defaultTargetTacticRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
    filesUpdatedAt?: import("../../types").Timestamp | undefined;
}, {
    type: "whatsapp";
    uid: string;
    phoneNumber: string;
    defaultSystemMessage: string;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    senderName?: string | undefined;
    defaultTargetTacticRef?: import("../..").DocumentReferenceLike<unknown> | undefined;
    filesUpdatedAt?: import("../../types").Timestamp | undefined;
}>]>;
export type ExternalSenderValue = WhatsappExternalSender;
