"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampSchema = void 0;
/**
 * Custom Yup schema for Firestore Timestamp
 *
 * This schema validates that a value is a Firestore Timestamp-like object.
 * Each consuming project (frontend/backend) should use its own Firebase implementation.
 */
const yup = __importStar(require("yup"));
/**
 * Yup schema for Firestore Timestamp
 *
 * This schema accepts:
 * - Firestore Timestamp objects (from either react-native-firebase or firebase-admin)
 * - Objects with seconds and nanoseconds properties
 */
exports.timestampSchema = yup
    .mixed()
    .test("is-timestamp", "${path} must be a valid timestamp", (value) => {
    if (value === null || value === undefined) {
        return true;
    }
    // Check if it's a Timestamp-like object
    return ((value &&
        typeof value === "object" &&
        "toDate" in value &&
        typeof value.toDate === "function") ||
        value instanceof Date ||
        (typeof value === "object" &&
            "seconds" in value &&
            "nanoseconds" in value));
});
