"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slider1To10QuestionStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.slider1To10QuestionStepSchema = (0, base_1.questionStepBaseSchema)("question-slider1To10").extend({
    sliderConfig: zod_1.z.object({
        minLabel: zod_1.z.string().optional(),
        maxLabel: zod_1.z.string().optional(),
    }),
});
