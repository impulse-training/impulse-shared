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

  const isTimestampLike =
    typeof value === "object" &&
    value !== null &&
    ("toDate" in (value as any) && typeof (value as any).toDate === "function");

  return isTimestampLike;
}, {
  message: "Must be a Firestore Timestamp-like object",
});

