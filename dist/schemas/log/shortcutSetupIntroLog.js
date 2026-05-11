"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortcutSetupIntroLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.shortcutSetupIntroLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("shortcut_setup_intro"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        shortcutType: zod_1.z.enum(["back_tap", "lock_screen_widget"]),
        message: zod_1.z.string(),
        respondedAt: timestampSchema_1.timestampSchema.optional(),
        choice: zod_1.z.enum(["voice", "text", "skip"]).optional(),
    }),
});
