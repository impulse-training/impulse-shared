"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttachmentKindFromContentType = getAttachmentKindFromContentType;
exports.getUri = getUri;
exports.isImageOrVideo = isImageOrVideo;
exports.isAudio = isAudio;
function getAttachmentKindFromContentType(ct) {
    if (!ct)
        return "unknown";
    if (ct.startsWith("image/"))
        return "image";
    if (ct.startsWith("video/"))
        return "video";
    if (ct.startsWith("audio/"))
        return "audio";
    if (ct.includes("pdf") ||
        ct.startsWith("text/") ||
        ct.includes("msword") ||
        ct.includes("officedocument"))
        return "document";
    return "unknown";
}
function getUri(item) {
    var _a;
    return (_a = item.uri) !== null && _a !== void 0 ? _a : item.url;
}
function isImageOrVideo(item) {
    const ct = item.contentType;
    const kind = getAttachmentKindFromContentType(ct);
    if (kind === "image" || kind === "video")
        return true;
    const t = item.type;
    return t === "image" || t === "video";
}
function isAudio(item) {
    const ct = item.contentType;
    const kind = getAttachmentKindFromContentType(ct);
    if (kind === "audio")
        return true;
    const t = item.type;
    return t === "audio";
}
