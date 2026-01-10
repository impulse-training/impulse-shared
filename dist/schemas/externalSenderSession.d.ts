import { z } from "zod";
import { Timestamp } from "../types";
import { DocumentReferenceLike } from "../utils/documentReferenceSchema";
export interface ExternalSenderSession {
    createdAt: Timestamp;
    updatedAt: Timestamp;
    expiresAt: Timestamp;
    systemMessage: string;
    filesUpdatedAt?: Timestamp;
    targetTacticRef?: DocumentReferenceLike<any>;
}
export declare const externalSenderSessionSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>;
    expiresAt: z.ZodOptional<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>;
    systemMessage: z.ZodString;
    filesUpdatedAt: z.ZodOptional<z.ZodType<Timestamp, z.ZodTypeDef, Timestamp>>;
    senderName: z.ZodOptional<z.ZodString>;
    targetTacticRef: z.ZodOptional<z.ZodType<DocumentReferenceLike<unknown>, z.ZodTypeDef, DocumentReferenceLike<unknown>>>;
}, "strip", z.ZodTypeAny, {
    systemMessage: string;
    createdAt?: Timestamp | undefined;
    updatedAt?: Timestamp | undefined;
    senderName?: string | undefined;
    filesUpdatedAt?: Timestamp | undefined;
    expiresAt?: Timestamp | undefined;
    targetTacticRef?: DocumentReferenceLike<unknown> | undefined;
}, {
    systemMessage: string;
    createdAt?: Timestamp | undefined;
    updatedAt?: Timestamp | undefined;
    senderName?: string | undefined;
    filesUpdatedAt?: Timestamp | undefined;
    expiresAt?: Timestamp | undefined;
    targetTacticRef?: DocumentReferenceLike<unknown> | undefined;
}>;
