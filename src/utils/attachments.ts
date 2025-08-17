import { Attachment } from "../schemas/attachment";

export type AttachmentKind = "image" | "video" | "audio" | "document" | "unknown";

export function getAttachmentKindFromContentType(ct?: string | null): AttachmentKind {
  if (!ct) return "unknown";
  if (ct.startsWith("image/")) return "image";
  if (ct.startsWith("video/")) return "video";
  if (ct.startsWith("audio/")) return "audio";
  if (
    ct.includes("pdf") ||
    ct.startsWith("text/") ||
    ct.includes("msword") ||
    ct.includes("officedocument")
  )
    return "document";
  return "unknown";
}

export function getUri(item: Partial<Attachment> & { url?: string }): string | undefined {
  return (item as any).uri ?? (item as any).url;
}

export function isImageOrVideo(item: Partial<Attachment> & { url?: string; type?: string }): boolean {
  const ct = (item as any).contentType as string | undefined;
  const kind = getAttachmentKindFromContentType(ct);
  if (kind === "image" || kind === "video") return true;
  const t = (item as any).type as string | undefined;
  return t === "image" || t === "video";
}

export function isAudio(item: Partial<Attachment> & { url?: string; type?: string }): boolean {
  const ct = (item as any).contentType as string | undefined;
  const kind = getAttachmentKindFromContentType(ct);
  if (kind === "audio") return true;
  const t = (item as any).type as string | undefined;
  return t === "audio";
}
