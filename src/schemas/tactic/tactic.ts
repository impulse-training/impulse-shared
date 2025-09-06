import { z } from "zod";
import { timestampSchema } from "../../utils";
import { tacticStepSchema } from "./step";

export const tacticSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  aiInstructions: z.string().optional(),
  createdByUid: z.string().optional(),
  steps: z.array(tacticStepSchema).min(1),
  tags: z.array(z.string()).optional(),
  // AI metadata for tactic suggestion
  indicated: z.string().optional(), // When this tactic is most useful, e.g. "for when I'm feeling sad"
  contraindicated: z.string().optional(), // When this tactic should be avoided
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
