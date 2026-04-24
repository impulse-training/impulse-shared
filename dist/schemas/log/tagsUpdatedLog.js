"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsUpdatedLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
/**
 * Created when the user manually updates session tags via the UI.
 * Non-displayable — exists solely to trigger an AI response so Zara
 * can react to the updated context (e.g. suggest tactics).
 */
exports.tagsUpdatedLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tags_updated"),
    isDisplayable: zod_1.z.literal(false),
    data: zod_1.z.object({
        tags: zod_1.z.record(zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])),
    }),
});
