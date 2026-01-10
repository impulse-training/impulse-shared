"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorThreadSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.behaviorThreadSchema = base_1.threadBaseSchema.extend({
    type: zod_1.default.literal("behavior"),
});
