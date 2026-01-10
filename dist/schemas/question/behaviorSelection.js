"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorSelectionQuestionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.behaviorSelectionQuestionSchema = (0, base_1.questionBaseSchema)("behaviorSelection").extend({
    // Whether multiple behaviors can be selected
    allowMultiple: zod_1.z.boolean().optional().default(true),
});
