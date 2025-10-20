"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistantMessageLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.assistantMessageLogSchema = base_1.messageBaseLogSchema.extend({
    type: zod_1.z.literal("assistant_message"),
});
