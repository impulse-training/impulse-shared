"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserContext = exports.isAIMemory = exports.isTacticContext = exports.isBehaviorContext = void 0;
const userContext_1 = require("../schemas/userContext");
// Type guard functions
const isBehaviorContext = (value) => {
    try {
        userContext_1.behaviorContextSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isBehaviorContext = isBehaviorContext;
const isTacticContext = (value) => {
    try {
        userContext_1.tacticContextSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isTacticContext = isTacticContext;
const isAIMemory = (value) => {
    try {
        userContext_1.aiMemorySchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isAIMemory = isAIMemory;
const isUserContext = (value) => {
    try {
        userContext_1.userContextSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isUserContext = isUserContext;
