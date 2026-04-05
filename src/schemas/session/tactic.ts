import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const tacticSessionSchema = sessionBaseSchema.extend({
  type: z.literal("tactic"),
});
export type TacticSession = z.infer<typeof tacticSessionSchema>;
