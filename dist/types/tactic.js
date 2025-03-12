"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTactic = void 0;
const tactic_1 = require("../schemas/tactic");
// Type guard function
const isTactic = (value) => {
    try {
        tactic_1.tacticSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isTactic = isTactic;
