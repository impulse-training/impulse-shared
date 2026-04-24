"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plansLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const plan_1 = require("../plan");
const base_1 = require("./base");
// Plans Log Schema - supports multiple plans (for behaviors or scheduled plans)
exports.plansLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("plans"),
    // Plans logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        source: zod_1.z.union([
            zod_1.z.literal("trigger"),
            zod_1.z.literal("scheduled"),
            zod_1.z.literal("tags"),
            zod_1.z.literal("improvised"),
        ]),
        // "live" (default) = plan to start now (impulse sessions)
        // "planning" = proposed plan for next time (recap planning phase)
        mode: zod_1.z.enum(["live", "planning"]).optional(),
        // The trigger these plans are for (optional - null means "something else")
        triggerId: zod_1.z.string().nullable().optional(),
        // Array of plans (each plan has tacticsByPath on it)
        plans: zod_1.z.array(zod_1.z.object({
            planId: zod_1.z.string(),
            plan: plan_1.planWithIdSchema,
            startedAt: timestampSchema_1.timestampSchema.optional(),
            completedAt: timestampSchema_1.timestampSchema.optional(),
        })),
        // Index of the currently active/selected plan in the carousel
        activeIndex: zod_1.z.number().optional(),
        // When a plan was accepted/started
        acceptedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
