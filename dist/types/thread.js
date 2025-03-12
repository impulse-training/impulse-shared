"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThread = void 0;
const thread_1 = require("../schemas/thread");
// Type guard function
const isThread = (value) => {
    try {
        thread_1.threadSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isThread = isThread;
