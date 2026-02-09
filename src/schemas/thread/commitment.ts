import { z } from "zod";
import { threadBaseSchema } from "./base";

export const commitmentThreadSchema = threadBaseSchema.extend({
  type: z.literal("commitment"),
});

export type CommitmentThread = z.infer<typeof commitmentThreadSchema>;
