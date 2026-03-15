import { Session, sessionIsAlignmentSession } from "../schemas";
import { Log, ProposedExperimentLog } from "../schemas/log";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This happens when:
 * 1. The session is an alignment session
 * 2. A proposed_experiment log was just confirmed (confirmedAt was set)
 *
 * @param session The session document
 * @param beforeData The log data before the write
 * @param afterData The log data after the write
 * @returns True if we should add a recap time preference log, false otherwise
 */
export function shouldRespondWithRecapTimePreferenceLog(
  session: WithId<Session>,
  beforeData: Log | undefined,
  afterData: Log | undefined,
): boolean {
  if (!beforeData || !afterData) return false;

  // Only for alignment sessions
  if (!sessionIsAlignmentSession(session)) return false;

  // Only when a proposed_experiment log gains confirmedAt
  if (afterData.type !== "proposed_experiment") return false;
  if (beforeData.type !== "proposed_experiment") return false;

  const before = beforeData as ProposedExperimentLog;
  const after = afterData as ProposedExperimentLog;

  if (!after.confirmedAt) return false;
  if (before.confirmedAt) return false;

  return true;
}
