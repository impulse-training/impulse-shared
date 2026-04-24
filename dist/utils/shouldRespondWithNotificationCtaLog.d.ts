import { Session } from "../schemas";
import { Log } from "../schemas/log";
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
export declare function shouldRespondWithNotificationCtaLog(session: WithId<Session>, beforeData: Log | undefined, afterData: Log | undefined): boolean;
