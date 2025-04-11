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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidImpulseThread = exports.threadIsImpulseThread = exports.isValidOnboardingThread = exports.threadIsOnboardingThread = exports.isValidGeneralThread = exports.threadIsGeneralThread = exports.threadSchema = exports.threadSchemas = void 0;
const yup = __importStar(require("yup"));
const general_1 = require("./general");
const impulse_1 = require("./impulse");
const onboarding_1 = require("./onboarding");
__exportStar(require("./general"), exports);
__exportStar(require("./impulse"), exports);
__exportStar(require("./onboarding"), exports);
// Map of thread types to their schemas
exports.threadSchemas = {
    general: general_1.generalThreadSchema,
    impulse: impulse_1.impulseThreadSchema,
    onboarding: onboarding_1.onboardingThreadSchema,
};
// Dynamic schema that selects the appropriate schema based on the thread type
exports.threadSchema = yup.lazy((value) => {
    if (typeof value?.type === "string" && value.type in exports.threadSchemas) {
        return exports.threadSchemas[value.type];
    }
    // Fallback schema for validation when type is missing or invalid
    return yup.object({
        type: yup
            .string()
            .oneOf(Object.keys(exports.threadSchemas))
            .required("Tactic type is required"),
    });
});
const threadIsGeneralThread = (value) => value.type === "general";
exports.threadIsGeneralThread = threadIsGeneralThread;
const isValidGeneralThread = (value) => {
    try {
        general_1.generalThreadSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidGeneralThread = isValidGeneralThread;
const threadIsOnboardingThread = (value) => value.type === "onboarding";
exports.threadIsOnboardingThread = threadIsOnboardingThread;
const isValidOnboardingThread = (value) => {
    try {
        onboarding_1.onboardingThreadSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidOnboardingThread = isValidOnboardingThread;
const threadIsImpulseThread = (value) => value.type === "impulse";
exports.threadIsImpulseThread = threadIsImpulseThread;
const isValidImpulseThread = (value) => {
    try {
        impulse_1.impulseThreadSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidImpulseThread = isValidImpulseThread;
