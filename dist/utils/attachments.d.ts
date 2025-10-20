import { Attachment } from "../schemas/attachment";
export type AttachmentKind = "image" | "video" | "audio" | "document" | "unknown";
export declare function getAttachmentKindFromContentType(ct?: string | null): AttachmentKind;
export declare function getUri(item: Partial<Attachment> & {
    url?: string;
}): string | undefined;
export declare function isImageOrVideo(item: Partial<Attachment> & {
    url?: string;
    type?: string;
}): boolean;
export declare function isAudio(item: Partial<Attachment> & {
    url?: string;
    type?: string;
}): boolean;
