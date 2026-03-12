import { z } from "zod";

const sessionTypeSchema = z.enum([
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

export const sessionSummarySchema = z.object({
  type: sessionTypeSchema,
  tacticsByTitle: z.record(z.string(), z.array(z.any())),
  behaviorsByName: z.record(z.string(), z.array(z.any())),
  outcomeLogs: z.array(z.any()),

  plansLogs: z.array(z.any()),
  firstMessageLog: z.any().optional(),
  firstCallLog: z.any().optional(),
  hasContent: z.boolean(),
});

export type SessionSummary = z.infer<typeof sessionSummarySchema>;
