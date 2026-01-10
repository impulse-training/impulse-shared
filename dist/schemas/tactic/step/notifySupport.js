"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifySupportStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.notifySupportStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.default.literal("notifySupport"),
    groupId: zod_1.default.string(),
    text: zod_1.default.string().min(1),
});
