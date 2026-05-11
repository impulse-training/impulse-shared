"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskBehaviorProposalLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timestampSchema_1 = require("../../utils/timestampSchema");
const responseButtonSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    label: zod_1.z.string().min(1),
    responseText: zod_1.z.string().min(1),
    style: zod_1.z.enum(["primary", "secondary", "destructive"]).optional(),
});
exports.maskBehaviorProposalLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("mask_behavior_proposal"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        title: zod_1.z.string().min(1),
        body: zod_1.z.string().optional(),
        taskId: zod_1.z.string().min(1),
        behaviorId: zod_1.z.string().min(1),
        buttons: zod_1.z.array(responseButtonSchema).min(1),
        selectedButtonId: zod_1.z.string().optional(),
        selectedResponseText: zod_1.z.string().optional(),
        respondedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
