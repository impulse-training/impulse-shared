"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textQuestionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.textQuestionSchema = (0, base_1.questionBaseSchema)("text").extend({
    text: zod_1.z.string(),
});
