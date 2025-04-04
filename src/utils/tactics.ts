import { Tactic } from "../schemas";

export function canTacticBeManuallyMarkedAsCompleted(tactic: Tactic): boolean {
  switch (tactic.type) {
    case "action":
      return true;
    case "affirmation":
      return false;
    case "breathingExercise":
      return false;
    case "link":
      return true;
    case "video":
      return false;
    case "audio":
      return true;
    default:
      return false;
  }
}
