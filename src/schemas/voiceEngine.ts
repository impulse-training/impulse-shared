import { z } from "zod";

/**
 * Which voice engine runs a call.
 *
 * - `livekit`: a LiveKit room joined by impulse-voice-agent (OpenAI Realtime).
 * - `elevenlabs`: an ElevenLabs Agents conversation, tools reached by webhook.
 *
 * Stamped on every call log (`data.engine`), so the app routes an answered
 * ring or a press from the call itself, and every metric or transcript query
 * can split by engine.
 */
export const voiceEngineSchema = z.enum(["livekit", "elevenlabs"]);
export type VoiceEngine = z.infer<typeof voiceEngineSchema>;

/**
 * What a call is for, as far as choosing its engine goes.
 *
 * - `morningCheckIn`: the scheduled morning ring.
 * - `impulse`: a call from the impulse button (or a self-ring onto it).
 * - `general`: any other call a user starts from a session.
 */
export const voiceCallKindSchema = z.enum(["morningCheckIn", "impulse", "general"]);
export type VoiceCallKind = z.infer<typeof voiceCallKindSchema>;

const engineByKindSchema = z.object({
  morningCheckIn: voiceEngineSchema.optional(),
  impulse: voiceEngineSchema.optional(),
  general: voiceEngineSchema.optional(),
});

/**
 * One user's engine per kind, at `users/{uid}.voiceEngineOverrides`.
 *
 * On the user's own doc rather than in the shared config so the app, which
 * already has that doc, can resolve the engine at the moment of a press with
 * no round trip, and so the shared config lists nobody.
 */
export const voiceEngineOverridesSchema = engineByKindSchema;
export type VoiceEngineOverrides = z.infer<typeof voiceEngineOverridesSchema>;

const splitSchema = z.object({
  engine: voiceEngineSchema,
  /** Share of users (0-100), bucketed by a stable hash of kind + user id. */
  percent: z.number().min(0).max(100),
});

/**
 * The engine switch, at `config/voiceEngine`.
 *
 * A Firestore doc rather than an env param so a flip needs no deploy and can
 * target one kind of call, or everyone. Written by the admin SDK
 * (src/scripts/setVoiceEngine.ts in impulse-functions) and readable by any
 * signed-in user: the app resolves a press's engine itself, so the impulse
 * button costs no round trip. A ring or a prepared call is still routed by the
 * engine stamped on its call log.
 *
 * Resolution, first match wins: the user's override for this kind (on their
 * user doc), the split for this kind, the kind's engine, the default.
 */
export const voiceEngineConfigSchema = z.object({
  default: voiceEngineSchema,
  byKind: engineByKindSchema.default({}),
  splits: z
    .object({
      morningCheckIn: splitSchema.optional(),
      impulse: splitSchema.optional(),
      general: splitSchema.optional(),
    })
    .default({}),
});
export type VoiceEngineConfig = z.infer<typeof voiceEngineConfigSchema>;

export const VOICE_ENGINE_CONFIG_DOC_PATH = "config/voiceEngine";

/** The engine when there is no config doc, or it is unreadable. */
export const FALLBACK_VOICE_ENGINE: VoiceEngine = "livekit";

export type VoiceEngineReason = "user-override" | "split" | "kind" | "default" | "no-config";

/** A stable 0-99 bucket for a user within one kind of call (FNV-1a). */
export function voiceEngineBucket(kind: VoiceCallKind, userId: string): number {
  let hash = 0x811c9dc5;
  const input = `${kind}:${userId}`;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) % 100;
}

export function resolveVoiceEngine(
  config: VoiceEngineConfig | undefined,
  args: { userId: string; kind: VoiceCallKind; userOverrides?: VoiceEngineOverrides },
): { engine: VoiceEngine; reason: VoiceEngineReason } {
  const { userId, kind } = args;

  // Per kind because an engine may not run every kind yet.
  const override = voiceEngineSchema.safeParse(args.userOverrides?.[kind]);
  if (override.success) return { engine: override.data, reason: "user-override" };

  if (!config) return { engine: FALLBACK_VOICE_ENGINE, reason: "no-config" };

  const split = config.splits?.[kind];
  if (split && voiceEngineBucket(kind, userId) < split.percent) {
    return { engine: split.engine, reason: "split" };
  }

  const byKind = config.byKind?.[kind];
  if (byKind) return { engine: byKind, reason: "kind" };

  return { engine: config.default, reason: "default" };
}

/**
 * The engine a call log ran on. Calls prepared before `data.engine` existed
 * are recognised by their vendor fields: only ElevenLabs calls carry an agent id.
 */
export function callLogEngine(
  data: { engine?: unknown; elevenlabsAgentId?: unknown } | undefined,
): VoiceEngine {
  const parsed = voiceEngineSchema.safeParse(data?.engine);
  if (parsed.success) return parsed.data;
  return typeof data?.elevenlabsAgentId === "string" ? "elevenlabs" : "livekit";
}
