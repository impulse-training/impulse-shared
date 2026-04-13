import { z } from "zod";
import { logBaseSchema } from "./base";

export const closeButtonLogSchema = logBaseSchema.extend({
  type: z.literal("close_button"),
  isDisplayable: z.literal(true),
  data: z.object({
    label: z.string(),
  }),
});

export type CloseButtonLog = z.infer<typeof closeButtonLogSchema>;
