import { Session } from "../schemas";
import { Log } from "../schemas/log";
import { WithId } from "./withId";
/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This is a safety-net trigger only — showImpulseModeIntro creates the recap
 * time preference directly. This fires if the user acknowledges the image log
 * and no recap_time_preference exists yet.
 */
export declare function shouldRespondWithRecapTimePreferenceLog(session: WithId<Session>, beforeData: Log | undefined, afterData: Log | undefined): boolean;
