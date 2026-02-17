import { z } from "zod";

const threadTypeSchema = z.enum([
  "impulse",
  "general",
  "onboarding",
  "recap",
  "behavior",
  "dayRecap",
  "timePlan",
  "locationPlan",
  "adjustment",
]);

export const threadSummarySchema = z.object({
  type: threadTypeSchema,
  tacticsByTitle: z.record(z.string(), z.array(z.any())),
  behaviorsByName: z.record(z.string(), z.array(z.any())),
  outcomeLogs: z.array(z.any()),
  questionsLogs: z.array(z.any()),
  plansLogs: z.array(z.any()),
  firstMessageLog: z.any().optional(),
  firstCallLog: z.any().optional(),
  hasContent: z.boolean(),
});

export type ThreadSummary = z.infer<typeof threadSummarySchema>;
