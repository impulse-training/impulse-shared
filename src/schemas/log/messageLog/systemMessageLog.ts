import z from "zod";
import { messageBaseLogSchema } from "./base";

export const systemMessageLogSchema = messageBaseLogSchema.extend({
  type: z.literal("system_message"),
});

export type SystemMessageLog = z.infer<typeof systemMessageLogSchema>;
