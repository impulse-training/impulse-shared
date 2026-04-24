"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoveryKeyLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.recoveryKeyLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("recovery_key"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        action: zod_1.z.enum(["saved", "copied", "downloaded"]),
    }),
});
