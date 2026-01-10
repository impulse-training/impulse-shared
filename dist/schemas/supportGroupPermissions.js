"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupNotificationPreferencesSchema = exports.supportGroupPermissionsSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.supportGroupPermissionsSchema = zod_1.default.object({
    dayOutcomes: zod_1.default.boolean().default(false),
    impulseMoments: zod_1.default.boolean().default(false),
    summary: zod_1.default.boolean().default(false),
    threads: zod_1.default.boolean().default(false),
});
exports.supportGroupNotificationPreferencesSchema = zod_1.default.object({
    messages: zod_1.default.boolean().default(false),
    plan: zod_1.default.boolean().default(false),
});
