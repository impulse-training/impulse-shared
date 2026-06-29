import { z } from "zod";

/**
 * User-level tactic preferences, stored on the user document
 * (`users/{uid}.tacticPreferences`). These apply across ALL of the user's
 * behaviors and are layered on top of behavior-level controls
 * (`behavior.tactics` for pinning, `behavior.suppressedTacticIds` for
 * suppression).
 *
 * Read by the in-the-moment recommendation engine (matchPlansForSession /
 * improvePlan). Authored by the user themselves or by a coach via the
 * dashboard — a human-oversight knob over what gets surduced in the moment.
 */
export const tacticPreferencesSchema = z.object({
  // Tactic IDs to never recommend in-the-moment for this user (hard exclude).
  suppressedTacticIds: z.array(z.string()).optional(),
  // Tactic IDs to prefer in-the-moment for this user (ranking boost).
  pinnedTacticIds: z.array(z.string()).optional(),
});

export type TacticPreferences = z.infer<typeof tacticPreferencesSchema>;
