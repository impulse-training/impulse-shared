"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBaseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../../utils/timestampSchema");
// Base Log Schema
exports.logBaseSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
    userId: zod_1.default.string(), // This is required for collection group queries security rules
    timestamp: timestampSchema_1.timestampSchema.optional(),
    dateString: zod_1.default.string(),
    tacticId: zod_1.default.string().optional(),
    behaviorIds: zod_1.default.array(zod_1.default.string()).optional(),
    // A log can be associated with a call, which is also a log. Not all logs should be able to be
    // associated with a call, but it's simplest to just define this as an optional property on our
    // base log schema.
    // TODO: REVIEW
    callLogDocPath: zod_1.default.string().optional(),
});
