import { z } from "zod";
import { attachmentSchema } from "../attachment";
import { logBaseSchema } from "./base";

export const photoLogSchema = logBaseSchema.extend({
  type: z.literal("photo"),
  isDisplayable: z.literal(true),
  data: z.object({
    photo: attachmentSchema,
    caption: z.string().optional(),
  }),
});

export type PhotoLog = z.infer<typeof photoLogSchema>;
