/**
 * Attachment Schemas
 *
 * Defines Yup schemas for file/media attachments
 */
import * as yup from "yup";
export declare const attachmentTypes: readonly ["image", "video", "audio", "document"];
export type AttachmentType = (typeof attachmentTypes)[number];
export declare const attachmentSchema: yup.ObjectSchema<{
    uri: string;
    storagePath: string;
    contentType: string;
    sizeBytes: number | undefined;
    type: NonNullable<"audio" | "image" | "video" | "document" | undefined>;
    metadata: {
        width?: number | undefined;
        height?: number | undefined;
        durationMs?: number | undefined;
        transcript?: string | undefined;
    } | undefined;
}, yup.AnyObject, {
    uri: undefined;
    storagePath: undefined;
    contentType: undefined;
    sizeBytes: undefined;
    type: undefined;
    metadata: {
        width: undefined;
        height: undefined;
        durationMs: undefined;
        transcript: undefined;
    };
}, "">;
export type Attachment = yup.InferType<typeof attachmentSchema>;
export declare function isAttachment(value: unknown): value is Attachment;
