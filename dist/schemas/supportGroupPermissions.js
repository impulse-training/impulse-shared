"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupNotificationPreferencesSchema = exports.supportGroupPermissionsSchema = void 0;
const zod_1 = require("zod");
exports.supportGroupPermissionsSchema = zod_1.z.object({
    dayOutcomes: zod_1.z.boolean().default(false),
    impulseMoments: zod_1.z.boolean().default(false),
    summary: zod_1.z.boolean().default(false),
    threads: zod_1.z.boolean().default(false),
});
exports.supportGroupNotificationPreferencesSchema = zod_1.z.object({
    messages: zod_1.z.boolean().default(false),
    plan: zod_1.z.boolean().default(false),
});
