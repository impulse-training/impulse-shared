"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
exports.sessionSchema = zod_1.default.object({
    participantUids: zod_1.default.array(zod_1.default.string()),
    startTime: timestampSchema_1.timestampSchema.optional(),
    durationMinutes: zod_1.default.number(),
    title: zod_1.default.string().optional(),
    transcriptSummary: zod_1.default.string().optional(),
    code: zod_1.default.string(),
});
