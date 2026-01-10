"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textQuestionStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.textQuestionStepSchema = (0, base_1.questionStepBaseSchema)("question-text").extend({
    suggestedResponses: zod_1.z.array(zod_1.z.string()).optional(),
});
