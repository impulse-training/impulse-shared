import z from "zod";
import { logBaseSchema } from "../base";

// Message logs can be user, assistant, or system logs. We create a common type, as they share
// a component for rendering.
export const messageBaseLogSchema = logBaseSchema.extend({
  type: z.enum(["user_message", "assistant_message", "system_message"]),
  // Message logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    // Keep loose for now to avoid coupling to OpenAI types at runtime
    message: z.any(),
  }),
});
