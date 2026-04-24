"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
/**
 * A metric measurement log.
 * Records a single 1-5 scale rating for a metric, with optional supporting text.
 */
exports.metricLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("metric"),
    isDisplayable: zod_1.z.literal(true),
    /** If true, Zara should respond to this metric log (e.g. feeling discussion requested) */
    shouldZaraRespond: zod_1.z.boolean().optional(),
    data: zod_1.z.object({
        /** Reference to the metric document id */
        metricId: zod_1.z.string(),
        /** Denormalized metric name for display */
        metricName: zod_1.z.string(),
        /** 1–10 scale rating, null when awaiting user input */
        value: zod_1.z.number().int().min(1).max(10).nullable(),
        /** Denormalized label for the low end of the scale */
        minLabel: zod_1.z.string().optional(),
        /** Denormalized label for the high end of the scale */
        maxLabel: zod_1.z.string().optional(),
        /** Optional supporting text / note */
        text: zod_1.z.string().optional(),
        /** Denormalized circumplex quadrant — present only on feeling-type metrics */
        quadrant: zod_1.z.enum(["activated", "stressed", "calm", "low"]).optional(),
    }),
});
