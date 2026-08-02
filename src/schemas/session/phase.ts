import { z } from "zod";

// Session-level phase. A session is "regulate" while the user works through
// tactics, then flips to "debrief" once they answer whether they acted on the
// urge. When they acted (and containment isn't suppressed for the day), it
// moves to "contain" instead: the post-lapse containment mode, where the
// objective shifts from managing the urge to limiting the blast radius —
// protecting the rest of the day rather than debriefing a closed moment.
// "contain" is terminal for the session. The regulate → shift → reengage
// progression lives at the *tactic* level (see tacticPhaseSchema) and is
// expressed through plan ordering, not a session state machine — so only the
// states the session actually moves through are modelled here.
export const sessionPhaseSchema = z.enum(["regulate", "debrief", "contain"]);

export type SessionPhase = z.infer<typeof sessionPhaseSchema>;

// "The debrief question has been answered (or superseded)" — the lifecycle
// point most phase consumers actually care about. Both "debrief" and
// "contain" are past it: retrospective edits stay quiet, engine-plan
// progression is over, and assigned-plan checkpoint framing no longer
// applies. Use this instead of comparing against "debrief" directly so the
// next phase addition is a one-line audit here rather than a grep.
export const isPostDebriefPhase = (phase?: SessionPhase): boolean =>
  phase === "debrief" || phase === "contain";
