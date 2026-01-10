import z from "zod";
import { threadBaseSchema } from "./base";

export const recapThreadSchema = threadBaseSchema.extend({
  type: z.literal("recap"),
});

export type RecapThread = z.infer<typeof recapThreadSchema>;
