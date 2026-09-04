/**
 * The canned opening lines a voice call can start with, and their ids.
 *
 * Shared because three processes have to agree on them:
 *
 * - impulse-voice-agent renders the audio (scripts/render-openers.mjs) in the
 *   coach's voice, and — when the device played one — seeds it into the model's
 *   chat context so it knows it has already greeted the caller.
 * - impulse-native bundles that audio and plays it within ~300ms of the button
 *   press, rather than waiting ~5s for a room, an agent and a model round-trip.
 * - impulse-functions passes the chosen id through to the agent in room
 *   metadata.
 *
 * The id, not the text, is what travels between them. Text sent from the device
 * would be text the agent has to trust; an id can be looked up here and fails
 * closed if it is unknown.
 *
 * Changing a LINE means re-rendering its audio, so ids and text are versioned
 * together: give an edited line a new id rather than changing the text under an
 * existing one, or a device on an older bundle will play audio that no longer
 * matches what the model was told it said.
 */

/** A caller with no prior sessions — nothing to be familiar about yet. */
export const COLD_OPENERS = [
  { id: "cold-1", line: "Hey, I'm here. What's going on?" },
  { id: "cold-2", line: "Hi. What's happening right now?" },
  { id: "cold-3", line: "I'm here with you. What's going on?" },
] as const;

/** A caller we have spoken to before. */
export const FAMILIAR_OPENERS = [
  { id: "familiar-1", line: "Hey, good to hear from you. What's going on?" },
  { id: "familiar-2", line: "Hi again. What's happening?" },
  { id: "familiar-3", line: "Hey. What's going on right now?" },
] as const;

export const ALL_VOICE_OPENERS = [...COLD_OPENERS, ...FAMILIAR_OPENERS];

export type VoiceOpenerId = (typeof ALL_VOICE_OPENERS)[number]["id"];

/**
 * The line for an id, or null when the id is unknown.
 *
 * Null rather than a throw, and rather than a fallback line: an unrecognised id
 * means the device is on a bundle this deploy does not know about, and the
 * agent's correct response is to greet the caller itself — not to claim it said
 * something it did not.
 */
export function voiceOpenerLine(id: string | null | undefined): string | null {
  if (!id) return null;
  return ALL_VOICE_OPENERS.find((opener) => opener.id === id)?.line ?? null;
}
