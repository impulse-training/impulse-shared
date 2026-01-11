import { z } from "zod";
import { messageBaseLogSchema } from "./base";

export const systemMessageContentSchema = z.union([
  z.string(),
  z
    .object({
      title: z.string().optional(),
      body: z.string().optional(),
      message: z.string().optional(),
      content: z.string().optional(),
      icon: z.string().optional(),
      tone: z.enum(["info", "success", "warning", "neutral"]).optional(),
    })
    .passthrough(),
]);

export const systemMessageLogSchema = messageBaseLogSchema.extend({
  type: z.literal("system_message"),
  data: z.object({
    message: systemMessageContentSchema,
  }),
});

export type SystemMessageLog = z.infer<typeof systemMessageLogSchema>;
