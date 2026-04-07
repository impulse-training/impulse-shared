import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * Created when the user manually updates session tags via the UI.
 * Non-displayable — exists solely to trigger an AI response so Zara
 * can react to the updated context (e.g. suggest tactics).
 */
export const tagsUpdatedLogSchema = logBaseSchema.extend({
  type: z.literal("tags_updated"),
  isDisplayable: z.literal(false),
  data: z.object({
    tags: z.record(z.union([z.string(), z.array(z.string())])),
  }),
});

export type TagsUpdatedLog = z.infer<typeof tagsUpdatedLogSchema>;
