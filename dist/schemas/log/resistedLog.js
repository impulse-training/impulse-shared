"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resistedLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.resistedLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("resisted"),
    isDisplayable: zod_1.default.literal(true),
    data: zod_1.default.object({
        isSuccess: zod_1.default.boolean(),
    }),
});
