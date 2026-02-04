import { ChatCompletionMessageParam } from "openai/resources/chat";
import { PlansLog } from "../../schemas/log";

export function buildPlansLogPayload(
  log: PlansLog,
  isFinalLogInThread: boolean,
): ChatCompletionMessageParam[] {
  const activeIndex = log.data.activeIndex ?? 0;
  const activePlanEntry = log.data.plans[activeIndex];
  const plan = activePlanEntry?.plan;

  const tacticsCount = plan?.tactics?.length ?? 0;

  const parts: string[] = [];
  const tacticsNoun = tacticsCount === 1 ? "tactic" : "tactics";

  if (isFinalLogInThread) {
    parts.push("A plan is available for the user right now.");
    parts.push(
      `It includes ${tacticsCount} ${tacticsNoun}. You should ask the user whether they want to start this plan now, or talk through the plan and options before starting.`,
    );
  } else {
    parts.push(
      "FYI: a plan was added earlier in this thread. This information may no longer be active or relevant.",
    );
    parts.push(
      `The earlier plan included ${tacticsCount} ${tacticsNoun}. Do not assume the user is currently following this plan.`,
    );
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
