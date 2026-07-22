"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsUpdatedLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
/**
 * Created when the user manually updates session tags via the UI.
 * Non-displayable — exists solely to trigger an AI response so the assistant
 * can react to the updated context (e.g. suggest tactics).
 */
exports.tagsUpdatedLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tags_updated"),
    isDisplayable: zod_1.z.literal(false),
    data: zod_1.z.object({
        tags: zod_1.z.record(zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])),
        /**
         * The session's behaviors AFTER this update — written only when the update
         * actually changed them (the tag bar's behavior picker, or a trigger that
         * brings its own behaviors). Absent for a tags-only edit.
         *
         * Its presence is the signal that the user re-scoped which behaviors this
         * moment is about, which is worth an AI response even mid-debrief; a
         * retrospective feeling/activity edit is not. See
         * `shouldRespondToLogWithAI`.
         */
        behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
