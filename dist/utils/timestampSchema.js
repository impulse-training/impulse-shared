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
    // Accept Firestore Timestamp-like (has toDate function)
    const hasToDate = typeof value === "object" &&
        value !== null &&
        "toDate" in value &&
        typeof value.toDate === "function";
    if (hasToDate)
        return true;
    // Accept plain objects with numeric seconds and nanoseconds
    if (typeof value === "object" &&
        value !== null &&
        "seconds" in value &&
        "nanoseconds" in value) {
        const seconds = value.seconds;
        const nanos = value.nanoseconds;
        if ((typeof seconds === "number" || typeof seconds === "bigint") &&
            typeof nanos === "number") {
            return true;
        }
    }
    return false;
}, {
    message: "Must be a Firestore Timestamp-like object",
});
