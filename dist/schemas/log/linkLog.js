"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Define the LinkLog schema
exports.linkLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("link"),
    isDisplayable: zod_1.z.literal(true),
    text: zod_1.z.string(),
    link: zod_1.z.string(),
    buttonText: zod_1.z.string(),
});
