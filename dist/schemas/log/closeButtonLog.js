"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeButtonLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.closeButtonLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("close_button"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        label: zod_1.z.string(),
    }),
});
