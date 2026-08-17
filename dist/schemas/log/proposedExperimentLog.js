"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposedExperimentLogSchema = exports.proposedExperimentMetricSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timestampSchema_1 = require("../../utils/timestampSchema");
const metric_1 = require("../metric");
exports.proposedExperimentMetricSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(metric_1.METRIC_NAME_MAX_LENGTH),
    /** The three scale labels the metric should use, ordered low → high */
    scaleLabels: metric_1.metricScaleLabelsSchema.optional(),
});
exports.proposedExperimentLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("proposed_experiment"),
    isDisplayable: zod_1.z.literal(true),
    /** Behaviors that this proposed experiment is about */
    behaviorIds: zod_1.z.array(zod_1.z.string()).min(1),
    /** Optional human-readable behavior names for nicer display */
    behaviorNames: zod_1.z.array(zod_1.z.string()).optional(),
    /** Structured metrics chosen by the user, including optional scale labels */
    metrics: zod_1.z.array(exports.proposedExperimentMetricSchema).min(1).optional(),
    /** Metric labels chosen by the user (names only, no pre-created questions) */
    metricLabels: zod_1.z.array(zod_1.z.string()).min(1),
    /** Optional experiment question draft, if already known */
    experimentQuestion: zod_1.z.string().optional(),
    /** Short text shown above the preview in the session */
    text: zod_1.z.string().optional(),
    /** Optional CTA button label for confirming the experiment */
    buttonText: zod_1.z.string().optional(),
    /** Timestamp when this proposed experiment was confirmed */
    confirmedAt: timestampSchema_1.timestampSchema.optional(),
    /** Summary of the experiment that was actually created when this proposal was confirmed */
    createdExperiment: zod_1.z
        .object({
        experimentId: zod_1.z.string().optional(),
        baselineDays: zod_1.z.number().optional(),
    })
        .optional(),
});
