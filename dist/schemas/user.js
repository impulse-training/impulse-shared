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
exports.userSchema = void 0;
/**
 * User Schema
 *
 * Yup schema for user data validation
 */
const yup = __importStar(require("yup"));
const timestampSchema_1 = require("../utils/timestampSchema");
/**
 * Schema for user data
 */
exports.userSchema = yup.object({
    id: yup.string(),
    email: yup.string().email(),
    displayName: yup.string(),
    photoURL: yup.string(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
    // Notification settings
    notificationsEnabled: yup.boolean().default(true),
    // Daily recap settings
    dayRecapEnabled: yup.boolean().default(true),
    dayRecapTime: timestampSchema_1.timestampSchema,
    lastDayRecapDate: timestampSchema_1.timestampSchema,
    // User preferences
    theme: yup.string().oneOf(['light', 'dark', 'system']).default('system'),
    // Admin and role settings
    isAdmin: yup.boolean().default(false),
    role: yup.string().oneOf(['user', 'admin', 'coach']).default('user'),
});
