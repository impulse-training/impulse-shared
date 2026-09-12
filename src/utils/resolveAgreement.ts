/**
 * Which promise, if any, applies to the moment in front of us.
 *
 * The impulse moment has two modes, and this decides which one it is in:
 *
 * - An open agreement applies → deliver that ONE tactic, no alternative. The
 *   user already chose, in a calm moment, for exactly this situation.
 * - Nothing applies → the adaptive path: understand the moment, then offer two.
 *
 * Resolution is deterministic and runs off the session's own tags and
 * behaviors. It is deliberately not a judgement the model makes: an agreement
 * the assistant has to remember to honour is not an agreement, which is exactly
 * what went wrong with the advisory `tactics` list this replaces.
 */
import { TacticAgreement } from "../schemas/agreement";

export interface AgreementCandidate {
  /** Where the promise lives, for writing back the honoured/passed counts. */
  source: "trigger" | "behavior";
  sourceId: string;
  /** Human label for the situation: "Working too hard", "Vaping". */
  situation: string;
  agreement: TacticAgreement;
  /**
   * The trigger's tag definition (tagGroupId -> optionId). Empty for a
   * behavior agreement, and for a text-only trigger.
   */
  tags?: Record<string, string>;
  /** Behaviors this applies to. Empty means any. */
  behaviorIds?: string[];
}

export interface AgreementMatch {
  candidate: AgreementCandidate;
  /** Why it matched, for the transcript and for debugging a wrong one. */
  reason: "trigger-tags" | "behavior";
  /** How specific the match was; higher wins. */
  specificity: number;
}

export interface ResolveAgreementParams {
  candidates: AgreementCandidate[];
  /** The session's tags: tagGroupId -> selected optionIds. */
  sessionTags: Record<string, string[]>;
  sessionBehaviorIds: string[];
  /**
   * Tactics already offered, completed or declined in this session. An
   * agreement whose tactic has already been through the moment is spent FOR
   * NOW: re-delivering it would ignore what just happened.
   */
  spentTacticIds?: string[];
}

/**
 * The agreement that applies, or null.
 *
 * A TRIGGER agreement beats a behavior one whenever both apply. A trigger names
 * a situation ("when I'm working too hard"), a behavior names a habit, and the
 * user who described a situation was being more specific about the moment they
 * were imagining. Among triggers, the one matching the most tags wins, for the
 * same reason.
 */
export function resolveAgreement(
  params: ResolveAgreementParams,
): AgreementMatch | null {
  const spent = new Set(params.spentTacticIds ?? []);
  const matches: AgreementMatch[] = [];

  for (const candidate of params.candidates) {
    if (spent.has(candidate.agreement.tacticId)) continue;

    // An agreement scoped to particular behaviors only applies when one of
    // them is what this moment is about.
    if (
      candidate.behaviorIds?.length &&
      !candidate.behaviorIds.some((id) =>
        params.sessionBehaviorIds.includes(id),
      )
    ) {
      continue;
    }

    if (candidate.source === "trigger") {
      const tags = Object.entries(candidate.tags ?? {});
      // A text-only trigger ("when things get on top of me") has nothing to
      // match against. It stays visible to the user on the Next time card, but
      // it cannot fire on its own — there is no way to know the situation
      // arrived. Matching it on nothing would fire it on every session.
      if (tags.length === 0) continue;

      const everyTagPresent = tags.every(([groupId, optionId]) =>
        (params.sessionTags[groupId] ?? []).includes(optionId),
      );
      if (!everyTagPresent) continue;

      matches.push({
        candidate,
        reason: "trigger-tags",
        // Trigger matches outrank behavior matches outright, and a
        // three-tag trigger outranks a one-tag trigger.
        specificity: 100 + tags.length,
      });
      continue;
    }

    if (params.sessionBehaviorIds.includes(candidate.sourceId)) {
      matches.push({ candidate, reason: "behavior", specificity: 1 });
    }
  }

  if (matches.length === 0) return null;
  matches.sort((a, b) => b.specificity - a.specificity);
  return matches[0];
}
