import { z } from "zod";
import { timestampSchema } from "../../utils";

export function experimentBaseSchema<K extends string>(type: K) {
  return z.object({
    type: z.literal(type),
    startedAt: timestampSchema,
    hypothesis: z.string(),
  });
}
