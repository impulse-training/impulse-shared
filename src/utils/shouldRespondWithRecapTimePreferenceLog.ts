import { Session, sessionIsOnboardingSession } from "../schemas";
import { ImageLog, Log } from "../schemas/log";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This is a safety-net trigger only — showImpulseModeIntro creates the recap
 * time preference directly. This fires if the user acknowledges the image log
 * and no recap_time_preference exists yet.
 */
export function shouldRespondWithRecapTimePreferenceLog(
  session: WithId<Session>,
  beforeData: Log | undefined,
  afterData: Log | undefined,
): boolean {
  if (!beforeData || !afterData) return false;

  if (!sessionIsOnboardingSession(session)) return false;

  // When an image log gains acknowledgedAt (e.g. "Got it" on ImpulseMode intro)
  if (afterData.type === "image" && beforeData.type === "image") {
    const before = beforeData as ImageLog;
    const after = afterData as ImageLog;
    if (after.data.acknowledgedAt && !before.data.acknowledgedAt) return true;
  }

  return false;
}
