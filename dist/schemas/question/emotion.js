"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emotionQuestionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.emotionQuestionSchema = (0, base_1.questionBaseSchema)("emotion").extend({
    suggestedResponses: zod_1.default.array(zod_1.default.string()).optional(),
});
