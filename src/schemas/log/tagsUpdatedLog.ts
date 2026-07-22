import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * Created when the user manually updates session tags via the UI.
 * Non-displayable — exists solely to trigger an AI response so the assistant
 * can react to the updated context (e.g. suggest tactics).
 */
export const tagsUpdatedLogSchema = logBaseSchema.extend({
  type: z.literal("tags_updated"),
  isDisplayable: z.literal(false),
  data: z.object({
    tags: z.record(z.union([z.string(), z.array(z.string())])),
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
    behaviorIds: z.array(z.string()).optional(),
  }),
});

export type TagsUpdatedLog = z.infer<typeof tagsUpdatedLogSchema>;
