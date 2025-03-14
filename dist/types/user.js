"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = void 0;
const user_1 = require("../schemas/user");
// Type guard for User
const isUser = (value) => {
    try {
        user_1.userSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isUser = isUser;
