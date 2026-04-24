import { Session } from "../schemas";
import { Log } from "../schemas/log";
import { WithId } from "./withId";
/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This happens when:
 * 1. The session is an alignment session
 * 2. A proposed_experiment log was just confirmed (confirmedAt was set)
 *    OR an image log was just acknowledged (acknowledgedAt was set)
 */
export declare function shouldRespondWithRecapTimePreferenceLog(session: WithId<Session>, beforeData: Log | undefined, afterData: Log | undefined): boolean;
