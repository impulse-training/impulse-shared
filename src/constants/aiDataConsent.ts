/**
 * Disclosure and consent for sending user content to a third-party AI service.
 *
 * App Review rejected 0.4 (95) under guidelines 5.1.1(i) and 5.1.2(i): the app
 * sent personal data to a third-party AI service without saying what was sent,
 * naming who it went to, or asking first. Apple requires all three BEFORE any
 * data leaves the device, so this copy is the single source of truth for the
 * in-app consent screen, the privacy policy, and the server-side gate.
 *
 * Bump AI_DATA_CONSENT_VERSION whenever the substance of what we send, or who
 * we send it to, changes. Users whose stored version is lower are asked again.
 */

export const AI_DATA_CONSENT_VERSION = 1;

/** The AI service that processes session content. */
export const AI_DATA_CONSENT_PROVIDER = "OpenAI";

export const AI_DATA_CONSENT_TITLE = "How Impulse uses AI";

export const AI_DATA_CONSENT_INTRO =
  "Impulse's coach is powered by AI. To answer you, it sends what you share to OpenAI, an AI company in the United States that runs the model on our behalf.";

/** What actually leaves the device, in the user's terms. */
export const AI_DATA_CONSENT_WHAT_WE_SEND: string[] = [
  "The messages you type in a session, and the audio of your voice when you talk to the coach.",
  "The behaviors you track, the notes and logs you add, and the plans and tactics you're working on, so the coach has context.",
  "Your anonymous account ID. Your name, email and phone number are never sent, because Impulse never asks for them.",
];

export const AI_DATA_CONSENT_HOW_ITS_USED: string[] = [
  "OpenAI processes this only to generate the coach's replies, then returns them to Impulse.",
  "Your content is not used to train OpenAI's models.",
  "You can use Impulse without the AI coach, and you can withdraw consent at any time in Settings.",
];

export const AI_DATA_CONSENT_AGREE_LABEL =
  "I agree to Impulse sending what I share to OpenAI to generate the coach's replies.";

export const AI_DATA_CONSENT_DECLINE_LABEL = "Not now";

/**
 * Shown when a user without consent reaches an AI surface. Also returned by the
 * server gate, so the client can explain the refusal rather than appear broken.
 */
export const AI_DATA_CONSENT_REQUIRED_MESSAGE =
  "The coach needs your permission before it can send what you share to OpenAI. You can give it in Settings under Privacy and data handling.";

/**
 * The one place that decides whether AI processing is allowed. Used by the app
 * to gate the coach surfaces and by the server to refuse before calling OpenAI,
 * so the two can never disagree about what counts as consent.
 */
export function hasAiDataConsent(
  consent?: { version?: number | null } | null
): boolean {
  return (
    !!consent &&
    typeof consent.version === "number" &&
    consent.version >= AI_DATA_CONSENT_VERSION
  );
}

/**
 * First native version whose app can ask for AI data consent.
 *
 * A build older than this has no way to answer, so refusing those users would
 * break the coach for everyone already installed rather than protect anyone.
 */
export const AI_DATA_CONSENT_MIN_NATIVE_VERSION = "0.4";

/**
 * THE consent gate. One rule, for every caller.
 *
 * It lived in impulse-functions, which was fine until the voice agent needed
 * it too — a pre-issued token is valid for thirty days, so checking consent
 * only when the token is minted lets a caller who WITHDREW it keep a key to a
 * room. The agent has to check at the moment audio would flow, and it cannot
 * import from impulse-functions, so it grew a near-copy that got the
 * grandfathering subtly wrong. A compliance rule written twice is a compliance
 * rule that drifts.
 *
 * Grandfathering: a build that predates the consent screen cannot record an
 * answer, so those users are exempt until they update. They are asked the
 * first time they open a build that can ask, and from then the gate applies —
 * so declining genuinely turns the coach off.
 *
 * An unknown or unparseable version is treated as OLD. nativeVersion is
 * written only from real hardware, so "missing" means an account that has not
 * booted a recent build on a device: exactly the population that must not
 * break. A reviewer, on real hardware running the new binary, always has a
 * version and is always gated.
 */
export function mayProcessWithAi(user: {
  aiDataConsent?: { version?: number | null } | null;
  device?: { nativeVersion?: string } | null;
} | undefined | null): boolean {
  if (hasAiDataConsent(user?.aiDataConsent)) return true;

  const nativeVersion = user?.device?.nativeVersion;
  if (!nativeVersion) return true;

  const parse = (v: string): number[] | null => {
    const parts = v.split(":")[0].split(".").map((n) => parseInt(n, 10));
    return parts.some((n) => Number.isNaN(n)) ? null : parts;
  };
  const actual = parse(nativeVersion);
  const minimum = parse(AI_DATA_CONSENT_MIN_NATIVE_VERSION);
  if (!actual || !minimum) return true;

  for (let i = 0; i < Math.max(actual.length, minimum.length); i++) {
    const diff = (actual[i] || 0) - (minimum[i] || 0);
    // Older than the first build that could ask: grandfathered.
    if (diff !== 0) return diff < 0;
  }
  return false;
}
