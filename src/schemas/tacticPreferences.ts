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
  // Emotion option ids whose generated feeling mix the user hid from the
  // Tactics screen. DISPLAY-ONLY (like behavior masking): the evidence
  // still exists and the AI still reads it; only the shelf is hidden.
  suppressedMixOptionIds: z.array(z.string()).optional(),
  // Situations ("behavior:<id>" / "trigger:<id>") whose NEXT-TIME INVITATION
  // the user dismissed - tracking Coffee does not oblige a go-to plan for
  // it. Suppresses only the dashed invitation card; an agreed plan always
  // renders. Display-only, un-hidden from the Next-time management screen.
  suppressedGoToKeys: z.array(z.string()).optional(),
});

export type TacticPreferences = z.infer<typeof tacticPreferencesSchema>;
