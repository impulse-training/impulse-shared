import { Session, sessionIsAlignmentSession } from "../schemas";
import { Log, logIsUserMessageLog } from "../schemas/log";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with a notification CTA log.
 * This happens when:
 * 1. The session is an alignment session
 * 2. The user hasn't yet enabled or skipped notifications (notificationsEnabled is undefined)
 * 3. The log being written is a user message (the user just sent a message)
 *
 * @param session The session document
 * @param afterData The log data after the write
 * @returns True if we should add a notification CTA log, false otherwise
 */
export function shouldRespondWithNotificationCtaLog(
  session: WithId<Session>,
  afterData: Log | undefined,
): boolean {
  if (!afterData) return false;

  // Only for alignment sessions
  if (!sessionIsAlignmentSession(session)) return false;

  // Only if notifications haven't been enabled or skipped yet
  if (typeof session.notificationsEnabled !== "undefined") return false;

  // Only when a user message is created
  if (!logIsUserMessageLog(afterData)) return false;

  return true;
}
