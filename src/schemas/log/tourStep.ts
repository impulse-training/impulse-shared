import { z } from "zod";

export const tourStepSchema = z.object({
  elementRefName: z.string().nullable(),
  title: z.string(),
  description: z.string(),
  confirmButtonLabel: z.string().default("Ok"),
  nextOnImpulseButtonPress: z.boolean().optional(),
  borderRadius: z.number().optional(),
  innerPadding: z.number().optional(),
  minimumRectSize: z
    .object({ width: z.number(), height: z.number() })
    .optional(),
});
export type TourStep = z.infer<typeof tourStepSchema>;
