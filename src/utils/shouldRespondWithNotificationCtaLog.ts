import { Session, sessionIsAlignmentSession } from "../schemas";
import { Log, logIsRecapTimePreferenceLog } from "../schemas/log";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with a notification CTA log.
 * This happens when:
 * 1. The session is an alignment session
 * 2. The user hasn't yet enabled or skipped notifications (notificationsEnabled is undefined)
 * 3. A recap_time_preference log was just responded to (respondedAt was set)
 *
 * @param session The session document
 * @param beforeData The log data before the write
 * @param afterData The log data after the write
 * @returns True if we should add a notification CTA log, false otherwise
 */
export function shouldRespondWithNotificationCtaLog(
  session: WithId<Session>,
  beforeData: Log | undefined,
  afterData: Log | undefined,
): boolean {
  if (!afterData) return false;

  // Only for alignment sessions
  if (!sessionIsAlignmentSession(session)) return false;

  // Only if notifications haven't been enabled or skipped yet
  if (typeof session.notificationsEnabled !== "undefined") return false;

  // Only when a recap_time_preference log gains respondedAt
  if (!logIsRecapTimePreferenceLog(afterData)) return false;
  if (!afterData.data.respondedAt) return false;

  // Ensure it was just set (not already set before)
  if (
    beforeData &&
    logIsRecapTimePreferenceLog(beforeData) &&
    beforeData.data.respondedAt
  ) {
    return false;
  }

  return true;
}
