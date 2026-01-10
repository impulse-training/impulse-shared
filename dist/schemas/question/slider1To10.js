"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slider1To10QuestionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.slider1To10QuestionSchema = (0, base_1.questionBaseSchema)("slider1To10").extend({
    sliderConfig: zod_1.default.object({
        minLabel: zod_1.default.string().optional(),
        maxLabel: zod_1.default.string().optional(),
    }),
});
