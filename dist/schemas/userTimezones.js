"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTimezoneSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
exports.userTimezoneSchema = zod_1.default.object({
    timezone: zod_1.default.string(),
    timezoneOffset: zod_1.default.number().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
