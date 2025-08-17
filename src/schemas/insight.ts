import { z } from "zod";

export const insightSchema = z.object({
  userId: z.string(),
  text: z.string(),
});
export type Insight = z.infer<typeof insightSchema>;
