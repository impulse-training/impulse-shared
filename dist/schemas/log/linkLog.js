"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
// Define the LinkLog schema
exports.linkLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("link"),
    isDisplayable: zod_1.default.literal(true),
    text: zod_1.default.string(),
    link: zod_1.default.string(),
    buttonText: zod_1.default.string(),
});
