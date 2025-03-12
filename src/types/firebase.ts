/**
 * Firebase Types
 * 
 * Platform-agnostic type definitions for Firebase Firestore
 * These types can be used by both React Native and Node.js Firebase implementations
 */

/**
 * Generic Timestamp interface that matches Firebase's Timestamp structure
 * This is compatible with both @react-native-firebase/firestore and firebase-admin
 */
export interface Timestamp {
  seconds: number;
  nanoseconds: number;
  toDate(): Date;
  toMillis(): number;
  isEqual(other: Timestamp): boolean;
  valueOf(): string;
}
