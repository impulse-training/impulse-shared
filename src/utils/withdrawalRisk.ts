/**
 * Withdrawal risk: behaviors (alcohol, benzodiazepines, opioids) where
 * stopping suddenly after daily use can be medically dangerous.
 *
 * The flag lives on the behavior (`withdrawalRisk`, copied from its template
 * or set by the coach when it creates one) and applies whatever amount the
 * user reports: on the 2026-11-11 all-day-beer simulation the app caught 3 of
 * 13 drinks, so logged counts cannot decide who is safe to stop.
 *
 * Everything that would otherwise lead with abstinence reads this one place:
 * the "week without it" experiment, the strategy engine and every coach
 * prompt.
 */

/** Whether any of these behaviors carries the withdrawal-risk flag. */
export function hasWithdrawalRisk(
  behaviors: Array<{ withdrawalRisk?: boolean | null }>,
): boolean {
  return behaviors.some((b) => b.withdrawalRisk === true);
}

/**
 * A behavior's name (or one of its synonyms) names a substance that carries
 * the risk. The backstop for behaviors made outside the coach's createBehavior
 * (the app's own form, the dashboard, scripts) and for ones that predate the
 * flag. A bare "drinks" is left out on purpose: energy drinks and soft drinks
 * are not this.
 */
const WITHDRAWAL_RISK_NAME =
  /\b(alcohol|drinking|booze|beers?|wine|liquor|spirits|vodka|whiske?y|benzos?|benzodiazepines?|xanax|valium|klonopin|ativan|opioids?|opiates?|oxy|oxycodone|oxycontin|heroin|fentanyl|methadone)\b/i;

export function nameSuggestsWithdrawalRisk(name: string | null | undefined): boolean {
  return typeof name === "string" && WITHDRAWAL_RISK_NAME.test(name);
}

/** The short on-screen caution wherever a change to such a behavior is offered. */
export const WITHDRAWAL_CAUTION =
  "After daily use, stopping suddenly can be dangerous. Talk to a doctor before you stop completely.";

/**
 * The rule for a coach or strategy prompt, naming the flagged behaviors.
 * Empty when there are none, so callers can drop it with a filter.
 */
export function withdrawalSafetyNote(behaviorNames: string[]): string {
  const names = behaviorNames.map((n) => n.trim()).filter(Boolean);
  if (names.length === 0) return "";
  const what = names.join(", ");
  return [
    `## Withdrawal safety: ${what}`,
    `Stopping ${what} suddenly after daily use can cause dangerous withdrawal, including seizures. For ${what}, change is gradual: a later start, fewer, more time between. Every plan, experiment and goal you suggest for it steps down from what they have now, and stopping completely is something they plan with a doctor.`,
    `A step is small: one or two fewer than their usual day, or a start an hour or two later, held for a few days before the next one. A bigger cut in one day (a usual 13 down to 8) is one a doctor guides: when they propose it, or you are about to set it, say so and offer the smaller step. You cannot tell them a personally safe number.`,
    `When a plan, limit or goal for ${what} is first being made, say once, in a sentence, that cutting sharply after daily use can cause withdrawal and that a doctor can guide it. A plan they already have carries that caution on its page in the app: in a conversation about a step within that plan, give them the step and its numbers and leave the caution to the page. It comes back into the conversation when a bigger cut, stopping completely or symptoms come up. The first time you talk on a day after they started later or had fewer, ask how their body feels before anything else.`,
    "Shaking, sweating, nausea, a racing heart or anxiety that eases once they have some are withdrawal symptoms. When they describe these, or ask about stopping completely or cutting down fast, tell them plainly, once and without lecturing, that this can be withdrawal, that stopping suddenly can be dangerous, and that a doctor can make stopping safe. A plan for a moment like that says to see a doctor. If the symptoms are happening now, having their usual amount is safer than waiting them out. Confusion, seeing things or a seizure is an emergency: tell them to call emergency services now.",
  ].join("\n");
}
