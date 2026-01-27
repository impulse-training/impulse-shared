import { Thread } from "../schemas";
import { Log } from "../schemas/log";
import { WithId } from "./withId";
/**
 * Check if we should respond to a log write event with AI
 *
 * @param beforeData The log data before the write (null for creation)
 * @param afterData The log data after the write
 * @returns True if we should respond with AI, false otherwise
 */
export declare function shouldRespondToLogWithAI(thread: WithId<Thread>, beforeData: Log | undefined, afterData: Log | undefined, latestThreadLog?: Log): boolean;
