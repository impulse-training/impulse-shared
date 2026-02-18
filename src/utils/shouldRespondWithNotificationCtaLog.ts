import { Thread, threadIsAlignmentThread } from "../schemas";
import { Log, logIsUserMessageLog } from "../schemas/log";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with a notification CTA log.
 * This happens when:
 * 1. The thread is an alignment thread
 * 2. The user hasn't yet enabled or skipped notifications (notificationsEnabled is undefined)
 * 3. The log being written is a user message (the user just sent a message)
 *
 * @param thread The thread document
 * @param afterData The log data after the write
 * @returns True if we should add a notification CTA log, false otherwise
 */
export function shouldRespondWithNotificationCtaLog(
  thread: WithId<Thread>,
  afterData: Log | undefined,
): boolean {
  if (!afterData) return false;

  // Only for alignment threads
  if (!threadIsAlignmentThread(thread)) return false;

  // Only if notifications haven't been enabled or skipped yet
  if (typeof thread.notificationsEnabled !== "undefined") return false;

  // Only when a user message is created
  if (!logIsUserMessageLog(afterData)) return false;

  return true;
}
