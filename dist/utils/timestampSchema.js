"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampSchema = void 0;
/**
 * Custom Zod schema for Firestore Timestamp
 *
 * This schema validates that a value is a Firestore Timestamp-like object.
 * Each consuming project (frontend/backend) should use its own Firebase implementation.
 */
const zod_1 = require("zod");
/**
 * Zod schema for Firestore Timestamp
 *
 * This schema accepts:
 * - Firestore Timestamp objects (from either react-native-firebase or firebase-admin)
 * - Date objects
 * - Objects with seconds and nanoseconds properties
 */
exports.timestampSchema = zod_1.z.custom((value) => {
    if (value === null || value === undefined)
        return true;
    const isTimestampLike = typeof value === "object" &&
        value !== null &&
        ("toDate" in value && typeof value.toDate === "function");
    return isTimestampLike;
}, {
    message: "Must be a Firestore Timestamp-like object",
});
