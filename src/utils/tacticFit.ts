import { Tactic } from "../schemas";

const isAudibleContentType = (contentType?: string): boolean =>
  !!contentType &&
  (contentType.startsWith("audio/") || contentType.startsWith("video/"));

/**
 * Whether a tactic can be done in silence — no audio playback, no voice
 * conversation, no phone call. Derived from the tactic's steps rather than
 * stored as a field, so it can never drift from the actual content.
 */
export const tacticIsSilent = (
  tactic: Pick<Tactic, "steps" | "aiConfiguration">,
): boolean => {
  if (tactic.aiConfiguration?.defaultConversationMode === "voice") return false;
  return (tactic.steps ?? []).every((step) => {
    if (
      step.mode === "audio" ||
      step.mode === "zara" ||
      step.mode === "phoneCall"
    ) {
      return false;
    }
    if (step.mode === "media") {
      return step.media.every((m) => !isAudibleContentType(m.contentType));
    }
    return true;
  });
};
