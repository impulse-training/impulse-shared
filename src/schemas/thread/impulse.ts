import { z } from "zod";
import { objectOf } from "../../utils";
import { questionSchema } from "../question";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  // Present key, may be null
  behaviorId: z.string().nullable(),
  questionsCompleted: z.boolean().optional(),
  questionsById: objectOf(questionSchema),

  // Current tactic step context (set by clients when user is viewing a tactic step)
  currentConservationMode: z.enum(["default", "debrief"]).optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
