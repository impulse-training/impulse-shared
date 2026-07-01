import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * A single analytics event within a session. `ts` is an epoch-millis number
 * (client device clock) used for ordering within the session — NOT a Firestore
 * Timestamp. Keeping it a plain number lets many events live in one doc's array
 * without each needing a Timestamp object.
 */
export const analyticsEventSchema = z.object({
  // Event name, e.g. "app_foreground", "app_background", "screen_view".
  name: z.string(),
  // Epoch millis (device clock) when the event occurred.
  ts: z.number(),
  // Arbitrary event properties (e.g. { path: "/(app)/(tabs)/toolkit/home" }).
  props: z.record(z.string(), z.unknown()).optional(),
});

export type AnalyticsEvent = z.infer<typeof analyticsEventSchema>;

/**
 * One document per app "session" — a foreground period. Events are buffered
 * locally (MMKV) during the session and the completed session is flushed to
 * Firestore once, on the NEXT app foreground. Stored at
 * `users/{uid}/analyticsSessions/{id}`.
 */
export const analyticsSessionSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  // Session boundaries. endedAt is null until the session is finalized (on the
  // next foreground, or from a background transition).
  startedAt: timestampSchema,
  endedAt: timestampSchema.nullable().optional(),
  // Client/device context, denormalized for BigQuery analysis.
  platform: z.enum(["ios", "android", "web"]),
  appVersion: z.string().optional(),
  osVersion: z.string().optional(),
  deviceModel: z.string().optional(),
  // The buffered events, in chronological order.
  events: z.array(analyticsEventSchema),
  eventCount: z.number(),
  // Set true if the per-session event cap was hit and later events were dropped.
  eventOverflowReached: z.boolean().optional(),
  // When this session was written to Firestore (server clock).
  flushedAt: timestampSchema,
});

export type AnalyticsSession = z.infer<typeof analyticsSessionSchema>;
