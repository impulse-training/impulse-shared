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
