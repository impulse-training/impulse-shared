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

export function buildPlansLogPayload(
  log: PlansLog,
  isFinalLogInThread: boolean,
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

  if (isFinalLogInThread) {
    // Authoritative, directive framing when this is the most recent log
    parts.push("A plan is available for the user right now.");
    parts.push(
      `It includes ${tacticsCount} ${tacticsNoun}. You should ask the user whether they want to start this plan now, or talk through the plan and options before starting.`,
    );

    if (firstTacticTitle) {
      parts.push(
        `The first tactic in the plan is titled: ${firstTacticTitle}. Do not assume the user has already started it.`,
      );
    }

    if (firstStepText) {
      parts.push(
        `If the user chooses to start the first tactic, the first step instructions are: ${firstStepText}.`,
      );
    }

    parts.push(
      "First, ask whether they want to begin the first tactic now or talk it through first.",
    );
  } else {
    // Historical / FYI framing when this log is not the most recent
    parts.push(
      "FYI: a plan was added earlier in this thread. This information may no longer be active or relevant.",
    );
    parts.push(
      `The earlier plan included ${tacticsCount} ${tacticsNoun}. Do not assume the user is currently following this plan.`,
    );

    if (firstTacticTitle) {
      parts.push(
        `The first tactic in that earlier plan was titled: ${firstTacticTitle}.`,
      );
    }

    parts.push(
      "Do not initiate any plan-related actions or suggestions unless the user clearly asks about the plan or tactics.",
    );
  }

  return [
    {
      role: "user",
      content: `<CONTEXT>${parts.join(" ")}</CONTEXT>`,
    },
  ];
}
