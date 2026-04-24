"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignmentSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.alignmentSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("alignment"),
    notificationsEnabled: zod_1.z.boolean().nullable(),
});
