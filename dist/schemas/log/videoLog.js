"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.videoLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("video"),
    isDisplayable: zod_1.default.literal(true),
    title: zod_1.default.string().optional(),
    text: zod_1.default.string().optional(),
    data: zod_1.default.object({
        sourceUri: zod_1.default.string(),
    }),
});
