"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportGroup = exports.isSupportGroupMessage = exports.isSupportGroupMember = void 0;
const supportGroup_1 = require("../schemas/supportGroup");
// Type guard functions
const isSupportGroupMember = (value) => {
    try {
        supportGroup_1.supportGroupMemberSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isSupportGroupMember = isSupportGroupMember;
const isSupportGroupMessage = (value) => {
    try {
        supportGroup_1.supportGroupMessageSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isSupportGroupMessage = isSupportGroupMessage;
const isSupportGroup = (value) => {
    try {
        supportGroup_1.supportGroupSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isSupportGroup = isSupportGroup;
