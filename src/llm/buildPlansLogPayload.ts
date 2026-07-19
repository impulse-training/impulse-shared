import { ChatCompletionMessageParam } from "openai/resources/chat";
import { PlansLog } from "../schemas/log";

type UnknownRecord = Record<string, unknown>;

type TacticLike = {
  title?: unknown;
  steps?: unknown;
};

type TacticStepLike = {
  text?: unknown;
};

function getDocPath(value: unknown): string | null {
  if (!value || typeof value !== "object") return null;

  const record = value as UnknownRecord;
  return typeof record.path === "string" ? record.path : null;
}

function getTacticLikeFromTacticsByPath(
  tacticsByPath: unknown,
  path: string | null,
): TacticLike | null {
  if (!path) return null;
  if (!tacticsByPath || typeof tacticsByPath !== "object") return null;

  const record = tacticsByPath as UnknownRecord;
  const raw = record[path];

  if (!raw || typeof raw !== "object") return null;
  return raw as TacticLike;
}

function getFirstStepText(tactic: TacticLike | null): string | null {
  if (!tactic) return null;

  if (!Array.isArray(tactic.steps) || tactic.steps.length === 0) return null;

  const first = tactic.steps[0];
  if (!first || typeof first !== "object") return null;

  const step = first as TacticStepLike;
  return typeof step.text === "string" ? step.text : null;
}

function getTacticIdFromPath(path: string): string {
  const segments = path.split("/");
  return segments[segments.length - 1];
}

interface TacticInfo {
  id: string;
  title: string;
}

function getAllTactics(
  tacticsRefs: unknown[] | undefined,
  tacticsByPath: unknown,
): TacticInfo[] {
  if (!Array.isArray(tacticsRefs)) return [];
  const results: TacticInfo[] = [];
  for (const ref of tacticsRefs) {
    const path = getDocPath(ref);
    if (!path) continue;
    const id = getTacticIdFromPath(path);
    const tactic = getTacticLikeFromTacticsByPath(tacticsByPath, path);
    const title =
      tactic && typeof tactic.title === "string" ? tactic.title : id;
    results.push({ id, title });
  }
  return results;
}

export function buildPlansLogPayload(
  log: PlansLog,
  isFinalLogInSession: boolean,
): ChatCompletionMessageParam[] {
  const activeIndex = log.data.activeIndex ?? 0;
  const activePlanEntry = log.data.plans[activeIndex];
  const plan = activePlanEntry?.plan;

  const tacticsCount = plan?.tactics?.length ?? 0;

  const firstTacticRef = plan?.tactics?.[0];
  const firstTacticPath = getDocPath(firstTacticRef);
  const firstTactic = getTacticLikeFromTacticsByPath(
    plan?.tacticsByPath,
    firstTacticPath,
  );

  const firstTacticTitle =
    firstTactic && typeof firstTactic.title === "string"
      ? firstTactic.title
      : null;
  const firstStepText = getFirstStepText(firstTactic);

  const parts: string[] = [];

  const tacticsNoun = tacticsCount === 1 ? "tactic" : "tactics";
  const isPlanning = log.data.mode === "planning";

  if (isPlanning) {
    // Planning mode framing (recap session — proposing a plan for next time)
    parts.push(
      `A plan has been proposed for this trigger. It includes ${tacticsCount} ${tacticsNoun}.`,
    );

    if (firstTacticTitle) {
      parts.push(`The first tactic is: ${firstTacticTitle}.`);
    }

    parts.push(
      "This plan will be ready for next time this trigger comes up. Ask the user if they'd like to keep this plan, adjust it, or skip it.",
    );
  } else if (isFinalLogInSession) {
    // Authoritative, directive framing when this is the most recent log.
    // The plan sheet — not the conversation — delivers the plan's tactics:
    // the assistant's job is one short line pointing at the first step.
    parts.push(
      `A plan was just assigned. The app is displaying it to the user in the plan sheet with its ${tacticsCount} ${tacticsNoun}.`,
    );

    if (firstTacticTitle) {
      parts.push(
        `The first tactic in the plan is titled: ${firstTacticTitle}. Point the user to it by name in ONE short sentence, but do not assume they have already started it.`,
      );
    }

    parts.push(
      "Do NOT call suggestTactic for the plan's tactics and do NOT type out their step instructions — the plan sheet already shows them.",
    );
  } else {
    const allTactics = getAllTactics(plan?.tactics, plan?.tacticsByPath);

    parts.push(
      `The user's plan is assigned for this session, displayed to them in the plan sheet with ${tacticsCount} ${tacticsNoun}${allTactics.length > 0 ? " (in order):" : "."}`,
    );
    allTactics.forEach((t, i) => {
      parts.push(`${i + 1}. "${t.title}"`);
    });
    parts.push(
      "After the user completes a tactic, acknowledge it in one short sentence and point them to the next step of their plan by name — do not ask whether they want to continue. Do NOT call suggestTactic for the plan's tactics and do NOT type out their step instructions — the plan sheet already shows them. Never tell the user to repeat a tactic they just completed.",
    );
  }

  return [
    {
      role: "user",
      content: `<CONTEXT>${parts.join(" ")}</CONTEXT>`,
    },
  ];
}
