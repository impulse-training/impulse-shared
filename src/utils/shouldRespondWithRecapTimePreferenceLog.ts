import { Session, sessionIsAlignmentSession } from "../schemas";
import { ImageLog, Log, ProposedExperimentLog } from "../schemas/log";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This happens when:
 * 1. The session is an alignment session
 * 2. A proposed_experiment log was just confirmed (confirmedAt was set)
 *    OR an image log was just acknowledged (acknowledgedAt was set)
 */
export function shouldRespondWithRecapTimePreferenceLog(
  session: WithId<Session>,
  beforeData: Log | undefined,
  afterData: Log | undefined,
): boolean {
  if (!beforeData || !afterData) return false;

  if (!sessionIsAlignmentSession(session)) return false;

  // When a proposed_experiment log gains confirmedAt
  if (
    afterData.type === "proposed_experiment" &&
    beforeData.type === "proposed_experiment"
  ) {
    const before = beforeData as ProposedExperimentLog;
    const after = afterData as ProposedExperimentLog;
    if (after.confirmedAt && !before.confirmedAt) return true;
  }

  // When an image log gains acknowledgedAt (e.g. "Got it" on ImpulseMode intro)
  if (afterData.type === "image" && beforeData.type === "image") {
    const before = beforeData as ImageLog;
    const after = afterData as ImageLog;
    if (after.data.acknowledgedAt && !before.data.acknowledgedAt) return true;
  }

  return false;
}
