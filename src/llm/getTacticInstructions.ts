import { Tactic } from "../schemas/tactic/tactic";
import { TacticStep } from "../schemas/tactic/steps";

// Generate concise, actionable instructions for a single tactic step
export function getTacticStepInstructions(step: TacticStep): string {
  switch (step.mode) {
    case "default": {
      // Plain text instruction
      return step.text?.trim() || "Follow the instruction in this step.";
    }
    case "breathing": {
      const { inhale, hold, exhale } = step.breathingPattern;
      const cycles = step.cycles ?? 3;
      const holdPart = hold && hold > 0 ? `, hold for ${hold} seconds` : "";
      return `Do a breathing exercise for ${cycles} cycles: inhale for ${inhale} seconds${holdPart}, then exhale for ${exhale} seconds. Stay relaxed and focus on your breath.`;
    }
    case "timer": {
      const secs = step.durationSeconds;
      const mins = Math.floor(secs / 60);
      const rem = secs % 60;
      const pretty = mins > 0 ? `${mins}m${rem > 0 ? ` ${rem}s` : ""}` : `${rem}s`;
      const label = step.text?.trim();
      return `Start a timer for ${pretty}${label ? `: ${label}` : ""}. Stay committed until it completes.`;
    }
    case "notifySupport": {
      const label = step.text?.trim() || "Send a supportive message";
      return `${label}. Reach out to your support group now so they know you could use encouragement.`;
    }
    case "question": {
      const q = step.question.question.trim();
      const label = step.text?.trim();
      return `Reflect and answer${label ? ` (${label})` : ""}: ${q}`;
    }
    case "aiConversation": {
      const goal = step.goal.trim();
      const prompt = step.prompt?.trim();
      return `Have a focused conversation with the AI to achieve this goal: "${goal}"${
        prompt ? `. Start with: "${prompt}"` : ""
      }`;
    }
    case "media": {
      const count = step.media.length;
      return `View the ${count === 1 ? "attached item" : `${count} attached items`} and engage with them mindfully (e.g., watch, listen, or read) before continuing.`;
    }
    case "affirmation": {
      const text = step.text.trim();
      const n = step.repeatCount;
      return `Repeat this affirmation ${n} time${n === 1 ? "" : "s"}: "${text}". Say it slowly and with intention.`;
    }
    default: {
      // Exhaustive check ensures we handle new modes explicitly in the future
      // @ts-expect-error Ensure exhaustiveness if new modes are added
      const neverMode: never = step;
      void neverMode;
      return "Follow the step as described.";
    }
  }
}

// Generate instructions for a whole tactic. If the tactic has explicit aiInstructions,
// prefer those; otherwise combine per-step instructions into a concise list.
export function getTacticInstructions(tactic: Tactic): string {
  if (tactic.aiInstructions && tactic.aiInstructions.trim().length > 0) {
    return tactic.aiInstructions.trim();
  }

  if (tactic.steps.length === 1) {
    const only = tactic.steps[0];
    return `Complete the tactic: "${tactic.title}". ${getTacticStepInstructions(only)}`;
  }

  const parts = tactic.steps.map((s, idx) => `${idx + 1}. ${getTacticStepInstructions(s)}`);
  return `Complete the tactic: "${tactic.title}". Steps:\n` + parts.join("\n");
}
