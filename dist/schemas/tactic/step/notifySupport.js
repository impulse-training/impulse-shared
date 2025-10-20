"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifySupportStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.notifySupportStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("notifySupport"),
    groupId: zod_1.z.string(),
    text: zod_1.z.string().min(1),
});
