/**
 * Custom Zod schema for Firestore Timestamp
 *
 * This schema validates that a value is a Firestore Timestamp-like object.
 * Each consuming project (frontend/backend) should use its own Firebase implementation.
 */
import { z } from "zod";
import { Timestamp } from "../types/firebase";

/**
 * Zod schema for Firestore Timestamp
 *
 * This schema accepts:
 * - Firestore Timestamp objects (from either react-native-firebase or firebase-admin)
 * - Date objects
 * - Objects with seconds and nanoseconds properties
 */
export const timestampSchema = z.custom<Timestamp>((value) => {
  if (value === null || value === undefined) return true;

  // Accept Firestore Timestamp-like (has toDate function)
  const hasToDate =
    typeof value === "object" &&
    value !== null &&
    "toDate" in (value as any) &&
    typeof (value as any).toDate === "function";

  if (hasToDate) return true;

  // Accept native Date objects
  if (value instanceof Date && !isNaN(value.getTime())) return true;

  // Accept plain objects with numeric seconds and nanoseconds
  if (
    typeof value === "object" &&
    value !== null &&
    "seconds" in (value as any) &&
    "nanoseconds" in (value as any)
  ) {
    const seconds = (value as any).seconds;
    const nanos = (value as any).nanoseconds;
    if (
      (typeof seconds === "number" || typeof seconds === "bigint") &&
      typeof nanos === "number"
    ) {
      return true;
    }
  }

  return false;
}, {
  message: "Must be a Firestore Timestamp-like object",
});

