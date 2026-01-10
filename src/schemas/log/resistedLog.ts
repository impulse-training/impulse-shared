import z from "zod";
import { logBaseSchema } from "./base";

export const resistedLogSchema = logBaseSchema.extend({
  type: z.literal("resisted"),
  isDisplayable: z.literal(true),
  data: z.object({
    isSuccess: z.boolean(),
  }),
});

export type ResistedLog = z.infer<typeof resistedLogSchema>;
