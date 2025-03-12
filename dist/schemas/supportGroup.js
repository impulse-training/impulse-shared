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
exports.validateSupportGroup = exports.validateSupportGroupMessage = exports.validateSupportGroupMember = exports.supportGroupSchema = exports.supportGroupMessageSchema = exports.messageTypes = exports.supportGroupMemberSchema = void 0;
/**
 * Support Group Schemas
 *
 * Defines Yup schemas for support group data
 */
const yup = __importStar(require("yup"));
// Support Group Member Schema
exports.supportGroupMemberSchema = yup.object({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    photoURL: yup.string().optional(),
    role: yup.string().oneOf(['owner', 'member']).required(),
    joinedAt: yup.date().required()
});
// Support Group Message Types
exports.messageTypes = ['text', 'impulse_alert', 'system'];
// Support Group Message Schema
exports.supportGroupMessageSchema = yup.object({
    id: yup.string().required(),
    senderId: yup.string().required(),
    senderName: yup.string().required(),
    content: yup.string().required(),
    timestamp: yup.date().required(),
    type: yup.string().oneOf(exports.messageTypes).required(),
    threadId: yup.string().optional() // Reference to an impulse thread if this is an impulse alert
});
// Support Group Schema
exports.supportGroupSchema = yup.object({
    id: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().optional(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
    ownerId: yup.string().required(),
    members: yup.array().of(exports.supportGroupMemberSchema).required(),
    isPublic: yup.boolean().optional(),
    inviteCode: yup.string().optional()
});
// Helper functions for validation
const validateSupportGroupMember = (data) => {
    return exports.supportGroupMemberSchema.validate(data);
};
exports.validateSupportGroupMember = validateSupportGroupMember;
const validateSupportGroupMessage = (data) => {
    return exports.supportGroupMessageSchema.validate(data);
};
exports.validateSupportGroupMessage = validateSupportGroupMessage;
const validateSupportGroup = (data) => {
    return exports.supportGroupSchema.validate(data);
};
exports.validateSupportGroup = validateSupportGroup;
