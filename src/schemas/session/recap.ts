import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const recapSessionSchema = sessionBaseSchema.extend({
  type: z.literal("recap"),
});

export type RecapSession = z.infer<typeof recapSessionSchema>;
