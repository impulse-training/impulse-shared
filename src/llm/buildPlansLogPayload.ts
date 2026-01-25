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

  parts.push("A plan is available.");

  parts.push(
    `It includes ${tacticsCount} ${tacticsNoun}. The user can choose to start the plan now, or discuss the plan and options before starting.`,
  );

  if (firstTacticTitle) {
    parts.push(
      `The first tactic in the plan is titled: ${firstTacticTitle}. Do not assume the user has started it.`,
    );
  }

  if (firstStepText) {
    parts.push(
      `If the user chooses to start the first tactic, the first step instructions are: ${firstStepText}`,
    );
  }

  parts.push(
    "First, ask whether they want to begin the first tactic now or talk it through first.",
  );

  return [
    {
      role: "user",
      content: `<SYSTEM>${parts.join(" ")}</SYSTEM>`,
    },
  ];
}
