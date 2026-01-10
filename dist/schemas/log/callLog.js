"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const tactic_1 = require("../tactic");
const base_1 = require("./base");
// Call log Schema
exports.callLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("call"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactic: tactic_1.tacticSchema.optional(),
        agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
        endedAt: timestampSchema_1.timestampSchema.optional(),
        livekitSessionId: zod_1.z.string(),
        livekitRoomName: zod_1.z.string(),
        token: zod_1.z.string().optional(),
        summary: zod_1.z.string().optional(),
    }),
});
