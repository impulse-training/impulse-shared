import z from "zod";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

/** Response schema for tactic question steps - follows the same pattern as questionsLog */
export const tacticResponseSchema = z.object({
  responseType: z.enum(["text", "slider1To10"]),
  value: z.union([z.string(), z.number()]),
  formattedValue: z.string(),
});
export type TacticResponse = z.infer<typeof tacticResponseSchema>;

// Tactic Activity Log Schema
export const tacticLogSchema = logBaseSchema.extend({
  type: z.literal("tactic"),
  isDisplayable: z.boolean(),
  data: z.object({
    tactic: tacticSchema,
    // If this tactic activity originated from displaying a plan, include the planId
    planId: z.string().optional(),
    // total number of steps in the tactic at the time of logging
    stepCount: z.number().int().nonnegative().optional(),
    // 0-based indexes of completed steps (progressive)
    completedStepIndexes: z.array(z.number().int().nonnegative()).optional(),
    // whether the tactic is fully completed (all steps done)
    completed: z.boolean().optional(),
    // Optional response for question-type tactic steps
    response: tacticResponseSchema.optional(),
  }),
});

export type TacticLog = z.infer<typeof tacticLogSchema>;
