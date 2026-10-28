"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const metric_1 = require("../metric");
/**
 * A metric observation log — one ordered day-scoped state observation.
 *
 * The day the observation is ABOUT is `dateString` (inherited from
 * logBaseSchema); when it was actually recorded is `createdAt`. Those differ on
 * a backfill, and the gap is deliberately preserved so experiment analysis can
 * later distinguish a contemporaneous observation from a later recollection.
 * Do not collapse them by passing the backdated timestamp as `createdAt`.
 *
 * One observation per metric per day: these are written with the deterministic
 * id `metric_{metricId}_{dateString}`, so re-recording a day edits in place
 * rather than appending a second observation.
 */
exports.metricLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("metric"),
    isDisplayable: zod_1.z.literal(true),
    /** If true, the assistant should respond to this metric log (e.g. feeling discussion requested) */
    shouldZaraRespond: zod_1.z.boolean().optional(),
    data: zod_1.z.object({
        /** Reference to the metric document id */
        metricId: zod_1.z.string(),
        /** Denormalized metric name for display */
        metricName: zod_1.z.string(),
        /**
         * The reading on the LEGACY 3-point scale, null when awaiting user input.
         * Always written beside `level` (as `valueFromLevel(level)`) so app builds
         * that predate levels keep showing a reading. Read the level through
         * `metricLogLevel`, never this field directly.
         */
        value: metric_1.metricValueSchema.nullable(),
        /**
         * The reading on the five-point scale centred on normal. Absent on
         * readings written before it, and on readings an older app build wrote;
         * `metricLogLevel` maps those from `value`.
         */
        level: metric_1.metricLevelSchema.nullable().optional(),
        /** Denormalized level labels (see Metric.levels). */
        levels: metric_1.metricLevelLabelsSchema.optional(),
        /** Denormalized LEGACY word scale, for app builds that read `value`. */
        scale: metric_1.metricScaleSchema.optional(),
        /** Optional supporting text / note */
        text: zod_1.z.string().optional(),
        /** Denormalized circumplex quadrant — present only on feeling-type metrics */
        quadrant: zod_1.z.enum(["activated", "stressed", "calm", "low"]).optional(),
    }),
});
