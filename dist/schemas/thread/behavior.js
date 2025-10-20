"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorThreadSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.behaviorThreadSchema = base_1.threadBaseSchema.extend({
    type: zod_1.z.literal("behavior"),
});
