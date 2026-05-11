"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksSessionSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.tasksSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("tasks"),
    completedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    taskId: zod_1.z.string().optional(),
});
