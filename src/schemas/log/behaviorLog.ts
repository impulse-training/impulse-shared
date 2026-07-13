import { z } from "zod";
import {
  behaviorTrackingDataSchema,
  BehaviorTrackingData,
} from "../behaviorTrackingData";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export { behaviorTrackingDataSchema, BehaviorTrackingData };

export const behaviorLogSchema = logBaseSchema.extend({
  type: z.literal("behavior"),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: z.literal(true),
  isAdjustment: z.boolean().default(false),
  /** If true, the assistant should respond to this behavior log */
  shouldZaraRespond: z.boolean().optional(),
  data: behaviorTrackingDataSchema.extend({
    /** Source of the log: scheduled debrief or manual entry */
    source: z.enum(["scheduled", "manual"]).optional(),
    /** Outcome of the scheduled debrief prompt */
    debriefOutcome: z.enum(["acted", "resisted", "still_there"]).optional(),
    /** When the debrief was resolved/answered */
    resolvedAt: timestampSchema.optional(),
    /**
     * For a contain-goal behavior: whether this usage was kept inside the
     * allowed time window. Self-reported at recap for scale behaviors (which
     * have no real occurrence time). When set, it overrides timestamp-based
     * window detection in computeGoalComparison. Absent for non-contain logs.
     */
    withinAllowedWindow: z.boolean().optional(),
  }),
});

export type BehaviorLog = z.infer<typeof behaviorLogSchema>;
