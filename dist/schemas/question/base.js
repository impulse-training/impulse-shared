"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionBaseSchema = questionBaseSchema;
const zod_1 = __importDefault(require("zod"));
const constants_1 = require("../../constants");
const timestampSchema_1 = require("../../utils/timestampSchema");
function questionBaseSchema(type) {
    return zod_1.default.object({
        id: zod_1.default.string().optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        text: zod_1.default.string(),
        textAfterResponse: zod_1.default.string().optional(),
        metricId: zod_1.default.string().optional(),
        lastAskedAt: timestampSchema_1.timestampSchema.optional(),
        lastAnsweredAt: timestampSchema_1.timestampSchema.optional(),
        numberOfAnswers: zod_1.default.number().optional(),
        isTemplate: zod_1.default.boolean().optional().default(false),
        isPinned: zod_1.default.boolean().optional(),
        responseType: zod_1.default.literal(type),
        scope: constants_1.questionScopeSchema,
    });
}
