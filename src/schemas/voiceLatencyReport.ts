import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Report produced by impulse-functions `scheduled_aggregateVoiceLatency`. It
 * rolls up the per-call figures in `callLog.data.timings` (see
 * callTimingsSchema) so the admin dashboard can render how long voice takes to
 * become a conversation without every page load fanning out over call logs.
 *
 * Aggregated server-side rather than queried from the browser for the same
 * reason the schema-validation report is: the underlying read is a
 * collection-group scan over `logs`, which needs an index and returns far more
 * data than the handful of numbers anyone looks at.
 */

/**
 * Percentiles for one measured segment.
 *
 * `count` travels with them because these are small samples — a p90 over four
 * calls is a number, not a fact, and the dashboard needs to be able to say so.
 */
export const voiceLatencyStatSchema = z.object({
  count: z.number(),
  p50: z.number(),
  p90: z.number(),
  min: z.number(),
  max: z.number(),
});

export type VoiceLatencyStat = z.infer<typeof voiceLatencyStatSchema>;

/**
 * One field's worth of rolled-up timings. Keys match `callTimingsSchema`, so a
 * new measurement flows through to the dashboard without a schema change here.
 */
export const voiceLatencySegmentsSchema = z.record(
  z.string(),
  voiceLatencyStatSchema,
);

export const voiceLatencyReportSchema = z.object({
  ranAt: timestampSchema,
  /** Rolling window the sample was drawn from. */
  windowDays: z.number(),
  /** Call logs examined, including ones with no timings recorded. */
  callsExamined: z.number(),
  /**
   * Calls that got as far as audible speech. The gap between this and
   * `callsExamined` is itself a signal: a call that never reached first audio
   * either failed or the user gave up waiting.
   */
  callsReachedFirstAudio: z.number(),
  /**
   * Per-segment percentiles, keyed by `callTimingsSchema` field name. The
   * headline is `fromButtonToFirstAudioMs`.
   */
  segments: voiceLatencySegmentsSchema,
  /**
   * Same headline figure split by how the call was started, so a slow default
   * path is distinguishable from a slow toggle.
   */
  byEntry: z.record(z.string(), voiceLatencyStatSchema).optional(),
});

export type VoiceLatencyReport = z.infer<typeof voiceLatencyReportSchema>;

export const VOICE_LATENCY_REPORT_PATH = "systemReports/voiceLatency";

/**
 * The segment order the dashboard reads top to bottom. Each entry is a
 * cumulative client-side figure except the last three, which are single-process
 * durations — the label says so, because putting them on one axis would invite
 * subtracting numbers that were never on the same clock.
 */
export const VOICE_LATENCY_SEGMENT_LABELS: {
  key: string;
  label: string;
  cumulative: boolean;
}[] = [
  { key: "fromButtonToTokenRequestMs", label: "Token requested", cumulative: true },
  { key: "fromButtonToVoiceUiMs", label: "Call UI on screen", cumulative: true },
  { key: "fromButtonToOpenerAudioMs", label: "Opener heard", cumulative: true },
  { key: "fromButtonToSpeechStartMs", label: "Caller started speaking", cumulative: true },
  { key: "fromButtonToSpeechEndMs", label: "Caller stopped speaking", cumulative: true },
  { key: "fromButtonToTokenReceivedMs", label: "Token received", cumulative: true },
  { key: "fromButtonToRoomConnectedMs", label: "Room connected", cumulative: true },
  { key: "fromButtonToFirstAudioMs", label: "First word heard", cumulative: true },
  { key: "serverTokenMs", label: "Server: issue token", cumulative: false },
  { key: "agentContextBuildMs", label: "Agent: build context", cumulative: false },
  { key: "agentRealtimeStartMs", label: "Agent: open realtime", cumulative: false },
  { key: "agentJoinToReplyMs", label: "Agent: join to reply", cumulative: false },
  { key: "agentCallerPresentMs", label: "Agent: caller in the room", cumulative: false },
  { key: "agentCallerReadyMs", label: "Agent: caller can hear", cumulative: false },
  { key: "agentOpenerStartedMs", label: "Agent: opener started", cumulative: false },
  { key: "agentUserContextMs", label: "Agent: build user context", cumulative: false },
  { key: "agentAudioSubscribedMs", label: "Agent: caller mic subscribed", cumulative: false },
  { key: "agentFirstUserSpeechMs", label: "Agent: first heard the caller", cumulative: false },
  { key: "agentFirstReplyMs", label: "Agent: first reply generated", cumulative: false },
  { key: "handoverMs", label: "Handover to live mic", cumulative: false },
];
