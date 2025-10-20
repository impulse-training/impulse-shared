"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionScopeDescription = exports.getQuestionScopeLabel = exports.questionScopeSchema = exports.QUESTION_SCOPE_VALUES = exports.QUESTION_SCOPES = void 0;
const zod_1 = require("zod");
/**
 * Canonical conversation/question scopes and helpers
 */
exports.QUESTION_SCOPES = {
    impulse: {
        id: "impulse",
        label: "During an impulse moment",
        description: "Asked whenever you press the impulse button",
    },
    setback: {
        id: "setback",
        label: "After a setback",
        description: "After acting on an impulse moment (craving or urge)",
    },
    success: {
        id: "success",
        label: "After a success",
        description: "After resisting an impulse moment (craving or urge)",
    },
    recap: {
        id: "recap",
        label: "Daily recap",
        description: "When reflecting on the day",
    },
};
exports.QUESTION_SCOPE_VALUES = Object.keys(exports.QUESTION_SCOPES);
exports.questionScopeSchema = zod_1.z.enum(exports.QUESTION_SCOPE_VALUES);
const getQuestionScopeLabel = (scope) => {
    if (!scope || !(scope in exports.QUESTION_SCOPES))
        return "Unknown Scope";
    return exports.QUESTION_SCOPES[scope].label;
};
exports.getQuestionScopeLabel = getQuestionScopeLabel;
const getQuestionScopeDescription = (scope) => {
    if (!scope || !(scope in exports.QUESTION_SCOPES))
        return "";
    return exports.QUESTION_SCOPES[scope].description;
};
exports.getQuestionScopeDescription = getQuestionScopeDescription;
