"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Tactic Activity Log Schema
exports.tacticLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic_completed"),
    // Tactic logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // TODO: tighten once ../tactic.old is migrated
        tactic: zod_1.z.any(),
        tacticCollectionId: zod_1.z.string(),
    }),
});
