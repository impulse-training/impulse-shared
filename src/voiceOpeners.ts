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

/**
 * Lengths matter as much as words here.
 *
 * The opener ending is what invites the caller to speak, so it must not end
 * before the room can hear them. The first set ran 1.97s to 3.86s against rooms
 * connecting in 2.0s to 4.4s, so the short lines systematically opened a hole:
 * the caller answered a coach that had finished talking into a microphone that
 * was not live yet, and their first words arrived clipped ("I'm testing this
 * feature" reaching the model as "Sting this feature.").
 *
 * These run around four seconds each, above the connect times we have measured,
 * and they spend the extra time saying something worth hearing. "Take a breath"
 * is not filler in an urge moment, and a line that does not rush the caller is
 * also a line they are less likely to talk over.
 */

/** A caller with no prior sessions. Nothing to be familiar about yet. */
export const COLD_OPENERS = [
  { id: "cold-4", line: "Hey, I'm here with you. Take a breath. What's going on?" },
  { id: "cold-5", line: "Hi. I'm right here. Take your time. What's happening?" },
  { id: "cold-6", line: "Hey. I'm with you now. Tell me what's going on." },
] as const;

/** A caller we have spoken to before. */
export const FAMILIAR_OPENERS = [
  { id: "familiar-4", line: "Hey, good to hear from you. Take a breath. What's going on?" },
  { id: "familiar-5", line: "Hi again. I'm right here with you. What's happening?" },
  { id: "familiar-6", line: "Hey. Good to have you back. Tell me what's going on right now." },
] as const;

/**
 * Lines no longer played, kept so their ids still resolve.
 *
 * An app bundle in the field goes on sending the id it shipped with. The agent
 * looks the id up to learn what the caller was told, so dropping these would
 * make an older device's call read as an unknown opener and get greeted twice.
 */
export const RETIRED_VOICE_OPENERS = [
  { id: "cold-1", line: "Hey, I'm here. What's going on?" },
  { id: "cold-2", line: "Hi. What's happening right now?" },
  { id: "cold-3", line: "I'm here with you. What's going on?" },
  { id: "familiar-1", line: "Hey, good to hear from you. What's going on?" },
  { id: "familiar-2", line: "Hi again. What's happening?" },
  { id: "familiar-3", line: "Hey. What's going on right now?" },
] as const;

export const ALL_VOICE_OPENERS = [
  ...COLD_OPENERS,
  ...FAMILIAR_OPENERS,
  ...RETIRED_VOICE_OPENERS,
];

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

/**
 * Data-channel topic the app forwards its locally captured first turn on.
 *
 * The room takes 3-4 seconds to connect and the caller starts talking about a
 * second after the opener, so their first turn is very often spoken before
 * there is a room to speak into. LiveKit does not buffer for late joiners, so
 * the app recognises it on device and sends the text over this topic once the
 * room is up. Shared because a typo in it on either side fails silently: the
 * message is published, nothing is listening, and the caller simply appears to
 * have been ignored.
 */
export const EARLY_UTTERANCE_TOPIC = "impulse.early_utterance";
