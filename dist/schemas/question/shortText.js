"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortTextQuestionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.shortTextQuestionSchema = (0, base_1.questionBaseSchema)("shortText").extend({
    suggestedResponses: zod_1.z.array(zod_1.z.string()).optional(),
    text: zod_1.z.string(),
});
