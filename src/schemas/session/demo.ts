import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const demoSessionSchema = sessionBaseSchema.extend({
  type: z.literal("demo"),
  demoVisitorIp: z.string().optional(),
  demoVisitorFingerprint: z.string().optional(),
  demoMaxDurationMs: z.number().optional(),
});
export type DemoSession = z.infer<typeof demoSessionSchema>;
