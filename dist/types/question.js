"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestion = void 0;
const question_1 = require("../schemas/question");
// Type guard function
const isQuestion = (value) => {
    try {
        question_1.questionSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isQuestion = isQuestion;
