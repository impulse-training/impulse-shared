import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

export const imageLogSchema = logBaseSchema.extend({
  type: z.literal("image"),
  isDisplayable: z.literal(true),
  data: z.object({
    imageId: z.string(),
    acknowledgedAt: timestampSchema.optional(),
  }),
});

export type ImageLog = z.infer<typeof imageLogSchema>;
