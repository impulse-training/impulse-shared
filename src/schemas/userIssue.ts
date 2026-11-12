import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/** Longest message kept; a stack trace is cut to fit. */
export const USER_ISSUE_MESSAGE_MAX = 2_000;

/**
 * Something that went wrong for a user, from the app or the server, kept with
 * the user so staff can see it on their page in impulse-admin.
 *
 * Before this, a user's problems were spread across Crashlytics (app errors,
 * not tied to the admin), per-call debug docs (lost when the phone was offline
 * or signed out), Cloud Logging (server) and nowhere at all (notifications the
 * phone schedules itself). On 2026-11-12 a morning call failed to start and a
 * routine reminder stopped arriving, and neither left a trace anyone could see.
 *
 * Stored at `users/{userId}/issues/{id}`; the id sorts newest first
 * (userIssueDocId). The app may create its own, never edit them; the server
 * writes with the admin SDK; admins read.
 */
export const userIssueSourceSchema = z.enum(["app", "server"]);
export type UserIssueSource = z.infer<typeof userIssueSourceSchema>;

export const userIssueSeveritySchema = z.enum(["error", "warning"]);
export type UserIssueSeverity = z.infer<typeof userIssueSeveritySchema>;

export const userIssueSchema = z.object({
  id: z.string().optional(),
  source: userIssueSourceSchema,
  /** A short stable slug for what went wrong ("call_start_failed", "push_delivery_failed"). */
  kind: z.string().min(1).max(80),
  severity: userIssueSeveritySchema,
  message: z.string().min(1).max(USER_ISSUE_MESSAGE_MAX),
  /** Anything that helps explain it. Small and flat. */
  detail: z.record(z.string(), z.unknown()).optional(),
  callLogId: z.string().optional(),
  sessionId: z.string().optional(),
  appVersion: z.string().optional(),
  platform: z.string().optional(),
  /** When it happened on the device or server; the app may send it later. */
  occurredAt: timestampSchema,
  createdAt: timestampSchema,
});
export type UserIssue = z.infer<typeof userIssueSchema>;

/**
 * A doc id that sorts newest first by name and stays unique: an inverted
 * millisecond time, then a short random tail.
 */
export function userIssueDocId(occurredAtMs: number, random: string): string {
  const inverted = (9_999_999_999_999 - Math.max(0, Math.floor(occurredAtMs))).toString().padStart(13, "0");
  return `${inverted}_${random}`;
}
