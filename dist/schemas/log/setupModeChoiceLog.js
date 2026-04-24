"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModeChoiceLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.setupModeChoiceLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("setup_mode_choice"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        respondedAt: timestampSchema_1.timestampSchema.optional(),
        choice: zod_1.z.enum(["voice", "text"]).optional(),
    }),
});
