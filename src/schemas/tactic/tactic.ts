import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticStepSchema } from "./step";

// Indication schemas for tactic suggestion logic
export const questionResponseIndicationSchema = z.object({
  // Reference to the question that this indication is based on
  questionId: z.string(),
  // The prompt or text of the question (denormalized for convenience)
  questionPrompt: z.string(),
  // Substrings to look for in the user's response to match this indication
  responseSubstrings: z.array(z.string()).min(1),
  // Weight for how strongly this indication should influence suggestion ranking
  weight: z.number(),
});

export const behaviorIndicationSchema = z.object({
  // Reference to the behavior this indication relates to
  behaviorId: z.string(),
  // The behavior name (denormalized for convenience)
  behaviorName: z.string(),
  // Weight for how strongly this indication should influence suggestion ranking
  weight: z.number(),
});

// Container schema that can include multiple sources of indications
export const indicationSchema = z.object({
  questionResponses: z.array(questionResponseIndicationSchema).optional(),
  behaviors: z.array(behaviorIndicationSchema).optional(),
});

export const tacticSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  aiInstructions: z.string().optional(),
  createdByUid: z.string().optional(),
  recommended: z.boolean().optional(),
  steps: z.array(tacticStepSchema).min(1),
  tags: z.array(z.string()).optional(),
  // AI metadata for tactic suggestion
  indications: indicationSchema.optional(),
  contraindications: indicationSchema.optional(),
  effectiveness: z.enum(["low", "medium", "high"]).optional(), // General effectiveness rating
  timeToComplete: z.enum(["quick", "medium", "long"]).optional(), // How long the tactic takes
  aiConfiguration: z
    .object({
      defaultConversationMode: z.enum(["voice", "text"]).optional(),
      goal: z.string().min(1),
      prompt: z.string().optional(),
    })
    .optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type Tactic = z.infer<typeof tacticSchema>;

export type QuestionResponseIndication = z.infer<
  typeof questionResponseIndicationSchema
>;
export type BehaviorIndication = z.infer<typeof behaviorIndicationSchema>;
export type Indication = z.infer<typeof indicationSchema>;
