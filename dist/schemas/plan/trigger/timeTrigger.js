"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeTriggerSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.timeTriggerSchema = zod_1.default.object({
    hour: zod_1.default.number(),
    minute: zod_1.default.number(),
    weekdays: zod_1.default.array(zod_1.default.number().min(0).max(6)).min(1),
});
