"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoLogSchema = void 0;
const zod_1 = require("zod");
const attachment_1 = require("../attachment");
const base_1 = require("./base");
exports.photoLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("photo"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        photo: attachment_1.attachmentSchema,
        caption: zod_1.z.string().optional(),
    }),
});
