"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerSelectionLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.triggerSelectionLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("trigger_selection"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        triggers: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string(),
            // Label is a pre-rendered display string for the trigger
            label: zod_1.z.string(),
        })),
        // null = "something else", undefined = not yet selected
        selectedTriggerId: zod_1.z.string().nullable().optional(),
    }),
});
