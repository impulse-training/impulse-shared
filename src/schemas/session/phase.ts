import { z } from "zod";

// Session-level phase. A session is "regulate" while the user works through
// tactics, then flips to "debrief" once they answer whether they acted on the
// urge. The regulate → shift → reengage progression lives at the *tactic* level
// (see tacticPhaseSchema) and is expressed through plan ordering, not a
// session state machine — so only the two states the session actually moves
// through are modelled here.
export const sessionPhaseSchema = z.enum(["regulate", "debrief"]);

export type SessionPhase = z.infer<typeof sessionPhaseSchema>;
