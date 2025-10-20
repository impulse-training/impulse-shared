"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticSuggestionLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Single Tactic Suggestion Log Schema
// Represents the assistant suggesting exactly one tactic for the user to try now
exports.tacticSuggestionLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic_suggestion"),
    // Suggestion logs are displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // TODO: tighten once ../tactic.old is migrated
        tactic: zod_1.z.any(),
        tacticPath: zod_1.z.string(),
        reason: zod_1.z.string().optional(),
        source: zod_1.z.enum(["userPlan", "library", "improvised"]).optional(),
        collectionRefPath: zod_1.z.string().optional(),
    }),
});
