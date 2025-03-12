/**
 * Custom Yup schema for Firestore Timestamp
 *
 * This schema validates that a value is a Firestore Timestamp-like object.
 * Each consuming project (frontend/backend) should use its own Firebase implementation.
 */
import * as yup from "yup";
/**
 * Yup schema for Firestore Timestamp
 *
 * This schema accepts:
 * - Firestore Timestamp objects (from either react-native-firebase or firebase-admin)
 */
export declare const timestampSchema: yup.MixedSchema<{} | undefined, yup.AnyObject, undefined, "">;
