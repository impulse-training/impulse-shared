"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehavior = void 0;
const behavior_1 = require("../schemas/behavior");
// Type guard function
const isBehavior = (value) => {
    try {
        behavior_1.behaviorSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isBehavior = isBehavior;
