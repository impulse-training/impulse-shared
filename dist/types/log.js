"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLog = void 0;
const log_1 = require("../schemas/log");
// Type guard functions
const isLog = (value) => {
    try {
        log_1.logBaseSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isLog = isLog;
