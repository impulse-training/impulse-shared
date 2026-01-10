import { z } from "zod";

// Daily goals schema - supports eliminate or reduce with targets
export const goalSchema = z.discriminatedUnion("type", [
  // Eliminate - goal is to have 0 of this behavior
  z.object({
    type: z.literal("eliminate"),
  }),
  // Reduce with every day target
  z.object({
    type: z.literal("reduceEveryDay"),
    target: z.number(),
  }),
  // Reduce with individual day targets
  z.object({
    type: z.literal("reduceIndividualDays"),
    dailyTargets: z.object({
      0: z.number(), // Sunday
      1: z.number(), // Monday
      2: z.number(), // Tuesday
      3: z.number(), // Wednesday
      4: z.number(), // Thursday
      5: z.number(), // Friday
      6: z.number(), // Saturday
    }),
  }),
]);

export type Goal = z.infer<typeof goalSchema>;
