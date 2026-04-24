"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitmentSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.commitmentSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("commitment"),
});
