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
        // Quick-tap behavior options, shown alongside triggers when the user has
        // plans for behaviors. Same shape as triggers; label is a pre-rendered
        // (masked) display string for the behavior.
        behaviors: zod_1.z
            .array(zod_1.z.object({
            id: zod_1.z.string(),
            label: zod_1.z.string(),
        }))
            .optional(),
        // null = "something else", undefined = not yet selected
        selectedTriggerId: zod_1.z.string().nullable().optional(),
        // Set when the user taps a behavior chip instead of a trigger.
        selectedBehaviorId: zod_1.z.string().nullable().optional(),
    }),
});
