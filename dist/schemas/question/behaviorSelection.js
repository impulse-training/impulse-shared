"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorSelectionQuestionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.behaviorSelectionQuestionSchema = (0, base_1.questionBaseSchema)("behaviorSelection").extend({
    // Whether multiple behaviors can be selected
    allowMultiple: zod_1.default.boolean().optional().default(true),
});
