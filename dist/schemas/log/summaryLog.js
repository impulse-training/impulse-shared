"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Summary Log Schema
exports.summaryLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("summary"),
    // Summary logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        summary: zod_1.z.string(),
    }),
});
