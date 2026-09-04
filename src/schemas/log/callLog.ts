import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticSchema } from "../tactic";
import { transcriptItemSchema } from "../transcriptItem";
import { logBaseSchema } from "./base";

/**
 * How long a voice call took to become a conversation, in milliseconds.
 *
 * Durations, not timestamps, and deliberately split by whose clock measured
 * them. The four `fromButton*` figures all come from ONE clock — the phone's,
 * started at the button press — because the two events that actually define the
 * user-facing number (the tap, and the first word they hear) both happen on the
 * device. Stitching that number out of client and server timestamps instead
 * would be measuring clock skew as much as latency.
 *
 * The remaining fields are each measured wholly inside one process, so they say
 * where the time went without ever being compared across machines.
 */
export const callTimingsSchema = z.object({
  /** Token request sent. Covers session creation and the doc round-trip. */
  fromButtonToTokenRequestMs: z.number().optional(),
  /**
   * The call UI replaced the chat composer.
   *
   * Not a step in the connection chain — the call is coming up regardless of
   * what is painted — but it is the only part of the wait the user can SEE, and
   * it is the part they complain about. Every other figure here is about audio;
   * without this one, "it showed the text view for a second first" is
   * unfalsifiable.
   */
  fromButtonToVoiceUiMs: z.number().optional(),
  /**
   * Which mode the composer painted in FIRST.
   *
   * "text" means the chat composer was genuinely on screen before the call UI
   * replaced it. "voice" means it never was, and any perceived delay is the
   * navigation animation or the loading gate — a different problem with a
   * different fix.
   */
  composerFirstMode: z.enum(["text", "voice"]).optional(),

  /** Token landed on this device (today: written to Firestore, then synced). */
  fromButtonToTokenReceivedMs: z.number().optional(),
  /** LiveKit room connected. */
  fromButtonToRoomConnectedMs: z.number().optional(),
  /** THE headline: the first word the user actually hears. */
  fromButtonToFirstAudioMs: z.number().optional(),

  /** issueCallToken wall time, server-side (Firestore writes + 3 LiveKit calls). */
  serverTokenMs: z.number().optional(),
  /** Agent: building the per-session context and instructions. */
  agentContextBuildMs: z.number().optional(),
  /** Agent: opening the OpenAI Realtime session. */
  agentRealtimeStartMs: z.number().optional(),
  /** Agent: room join to asking the model for the opening line. */
  agentJoinToReplyMs: z.number().optional(),

  /**
   * Which affordance started the call, so a slow path can be told from a slow
   * moment: "default_mode" is the impulse button opening straight into a call,
   * "toggle" is the user switching an existing session over.
   */
  entry: z.enum(["default_mode", "toggle", "unknown"]).optional(),
});

export type CallTimings = z.infer<typeof callTimingsSchema>;

// Call log Schema
export const callLogSchema = logBaseSchema.extend({
  type: z.literal("call"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactic: tacticSchema.optional(),
    agentConnectedAt: timestampSchema.optional(),
    // See callTimingsSchema. Written by three processes (device, issueCallToken,
    // voice agent), so every writer uses update() with dotted paths — a
    // set({merge:true}) would store "timings.x" as a literal key.
    timings: callTimingsSchema.optional(),
    endedAt: timestampSchema.optional(),
    // Voice provider plumbing. Both vendor groups are optional. Impulse calls
    // are LiveKit (current); the ElevenLabs fields are left over from the
    // earlier pipeline and only survive on old docs.
    livekitSessionId: z.string().optional(),
    livekitRoomName: z.string().optional(),
    elevenlabsAgentId: z.string().optional(),
    elevenlabsConversationId: z.string().optional(),
    token: z.string().optional(),
    summary: z.string().optional(),
    // True once the call's turns are written as user_message /
    // assistant_message logs in the session (each carrying `voice.callLogId`).
    // Readers that see this render the call as a boundary marker and let the
    // inline turns speak for themselves. Absent on legacy calls, whose
    // transcript lives only in the log's transcriptItems subcollection.
    transcriptInSession: z.boolean().optional(),
    // Legacy calls only. Not persisted on the doc — hydrated at read time from
    // the log's transcriptItems subcollection when the call ended but the
    // summary hasn't landed yet, so getGptPayload can fall back to the
    // transcript.
    transcriptItems: z.array(transcriptItemSchema).optional(),
  }),
});

export type CallLog = z.infer<typeof callLogSchema>;
