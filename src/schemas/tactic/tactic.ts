import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticStepSchema } from "./step";

export const behaviorIndicationSchema = z.object({
  // Reference to the behavior this indication relates to
  behaviorId: z.string(),
  // The behavior name (denormalized for convenience)
  behaviorName: z.string(),
  // Weight for how strongly this indication should influence suggestion ranking
  weight: z.number(),
});

export const tagIndicationSchema = z.object({
  // Tag group name (e.g. "activity", "emotion") — matched by name, not ID,
  // since global/seed tactics don't know user-specific Firestore IDs
  tagGroupName: z.string(),
  // Option labels to match (case-insensitive), e.g. ["exercising", "walking"]
  optionLabels: z.array(z.string()).min(1),
  // Weight for how strongly this indication should influence suggestion ranking
  weight: z.number(),
});

export const behaviorTopicIndicationSchema = z.object({
  // Behavior topic this indication relates to (e.g. "sexual", "substances").
  // Matched against the session behaviors' behaviorTopicId, so a tactic can be
  // indicated/contraindicated for a whole class of behaviors rather than a
  // single user-specific behaviorId. Lets us, e.g., contraindicate anxiety
  // down-regulators for arousal-driven (sexual) urges.
  behaviorTopicId: z.string(),
  // Weight for how strongly this indication should influence ranking
  weight: z.number(),
});

export const indicationSchema = z.object({
  behaviors: z.array(behaviorIndicationSchema).optional(),
  behaviorTopics: z.array(behaviorTopicIndicationSchema).optional(),
  tags: z.array(tagIndicationSchema).optional(),
});

export const tacticPhaseSchema = z.enum(["regulate", "shift", "reengage"]);
export type TacticPhase = z.infer<typeof tacticPhaseSchema>;

export const tacticLinkSchema = z.object({
  url: z.string().url(),
  title: z.string().optional(),
  imageUrl: z.string().optional(),
  domain: z.string().optional(),
});

export type TacticLink = z.infer<typeof tacticLinkSchema>;

export const tacticNoteSchema = z.object({
  // A single thing the user knows / wants to remember about this issue,
  // e.g. "Every time I do this, I end up regretting it".
  text: z.string().min(1),
});

export type TacticNote = z.infer<typeof tacticNoteSchema>;

export const tacticSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  links: z.array(tacticLinkSchema).optional(),
  notes: z.array(tacticNoteSchema).optional(),
  aiInstructions: z.string().optional(),
  createdByUid: z.string().optional(),
  recommended: z.boolean().optional(),
  phase: tacticPhaseSchema.optional(),
  steps: z.array(tacticStepSchema).min(1),
  tags: z.array(z.string()).optional(),
  isMultiStep: z.boolean().optional(), // If true, show multi-step editor UI
  autoplay: z.boolean().optional(), // Auto-start timers and auto-advance steps
  // AI metadata for tactic suggestion
  indications: indicationSchema.optional(),
  contraindications: indicationSchema.optional(),
  completionTrigger: z.enum(["device-restart"]).optional(), // Auto-complete when this condition is detected
  effectiveness: z.enum(["low", "medium", "high"]).optional(), // General effectiveness rating
  timeToComplete: z.enum(["quick", "medium", "long"]).optional(), // How long the tactic takes
  // Friction/fit metadata for library filtering (orthogonal to collections)
  effort: z.enum(["low", "medium", "high"]).optional(), // Activation energy required to start/do it
  worksAnywhere: z.boolean().optional(), // Doable regardless of location/context (public, work, in bed)
  // Marks a tactic that presumes a physical/environmental state we can't verify
  // (e.g. "sitting or lying down", "at home", "phone in hand"). Such tactics are
  // hard-excluded from low-signal suggestions (a session with no primary tags
  // set) so we don't, e.g., tell someone who's already standing to "Stand up".
  // Free text describing the presumed state; presence of the field is what gates.
  presumesState: z.string().optional(),
  aiConfiguration: z
    .object({
      defaultConversationMode: z.enum(["voice", "text"]).optional(),
      goal: z.string().min(1),
      prompt: z.string().optional(),
    })
    .optional(),
  // Audio generation fields — when a tactic is created with AI-generated audio,
  // these track the generation lifecycle directly on the tactic document.
  generationStatus: z
    .enum(["pending", "processing", "completed", "failed"])
    .optional(),
  generationError: z.string().optional(),
  generationProvider: z.string().optional(),
  generationProviderJobId: z.string().optional(),
  generationPrompt: z.string().optional(),
  generationVoice: z.enum(["m", "f"]).nullable().optional(),
  collectionTemplateIds: z.array(z.string()).optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type Tactic = z.infer<typeof tacticSchema>;

export type BehaviorIndication = z.infer<typeof behaviorIndicationSchema>;
export type BehaviorTopicIndication = z.infer<
  typeof behaviorTopicIndicationSchema
>;
export type TagIndication = z.infer<typeof tagIndicationSchema>;
export type Indication = z.infer<typeof indicationSchema>;
