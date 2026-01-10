"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../../utils/timestampSchema");
const tactic_1 = require("../tactic");
const base_1 = require("./base");
// Call log Schema
exports.callLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("call"),
    isDisplayable: zod_1.default.literal(true),
    data: zod_1.default.object({
        tactic: tactic_1.tacticSchema.optional(),
        agentConnectedAt: timestampSchema_1.timestampSchema.optional(),
        endedAt: timestampSchema_1.timestampSchema.optional(),
        livekitSessionId: zod_1.default.string(),
        livekitRoomName: zod_1.default.string(),
        token: zod_1.default.string().optional(),
        summary: zod_1.default.string().optional(),
    }),
});
