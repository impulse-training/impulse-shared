"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentSchema = exports.attachmentTypes = void 0;
exports.isAttachment = isAttachment;
/**
 * Attachment Schemas
 *
 * Defines Yup schemas for file/media attachments
 */
const yup = __importStar(require("yup"));
// Attachment Types
exports.attachmentTypes = ["image", "video", "audio", "document"];
// Base Attachment Schema
exports.attachmentSchema = yup.object({
    // Basic file info
    uri: yup.string().required(),
    storagePath: yup.string().required(),
    contentType: yup.string().required(),
    sizeBytes: yup.number().optional(),
    // Type-specific metadata
    type: yup.string().oneOf(exports.attachmentTypes).required(),
    // For any additional type-specific data
    metadata: yup
        .object({
        // Image-specific fields
        width: yup.number().when("type", {
            is: "image",
            then: () => yup.number().optional(),
            otherwise: () => yup.number().strip(),
        }),
        height: yup.number().when("type", {
            is: "image",
            then: () => yup.number().optional(),
            otherwise: () => yup.number().strip(),
        }),
        // Audio/video specific fields
        durationMs: yup.number().when("type", {
            is: (val) => val === "audio" || val === "video",
            then: () => yup.number().optional(),
            otherwise: () => yup.number().strip(),
        }),
        // Audio-specific fields
        transcript: yup.string().when("type", {
            is: "audio",
            then: () => yup.string().optional(),
            otherwise: () => yup.string().strip(),
        }),
    })
        .optional(),
});
// Type guard
function isAttachment(value) {
    try {
        exports.attachmentSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
}
