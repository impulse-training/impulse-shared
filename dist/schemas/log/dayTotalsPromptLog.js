"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayTotalsPromptLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.dayTotalsPromptLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("day_totals_prompt"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        /** The dateString this prompt is for (typically the current day) */
        targetDateString: zod_1.z.string(),
        /** Set when the user confirms their day totals */
        confirmedAt: timestampSchema_1.timestampSchema.optional(),
        /**
         * What was confirmed, snapshotted at the moment of confirming.
         *
         * The card could say THAT the day was locked in but never WHAT was locked
         * in, so a recap read back later — or a voice call where the user never
         * saw a screen — leaves no record of the numbers they actually agreed to.
         * Re-deriving them from the day summary is not the same fact: behaviour
         * logs keep changing afterwards, and the question this answers is what
         * the user said yes to.
         *
         * Absent on logs confirmed before this existed.
         */
        confirmedTotals: zod_1.z
            .array(zod_1.z.object({
            behaviorId: zod_1.z.string(),
            /** Masked behaviours are stored by id; the name is for display. */
            behaviorName: zod_1.z.string().optional(),
            value: zod_1.z.number(),
            formattedValue: zod_1.z.string().optional(),
        }))
            .optional(),
        /** Set when the user requests a late-recap discussion with the AI */
        discussRequestedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
