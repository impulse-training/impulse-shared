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
exports.isBehavior = exports.behaviorSchema = exports.behaviorTemplateSchema = exports.categorySchema = exports.trackingTypes = void 0;
const yup = __importStar(require("yup"));
const constants_1 = require("../constants");
const utils_1 = require("../utils");
exports.trackingTypes = ["counter", "timer"];
// Use the category keys from our constants
const categoryKeys = Object.keys(constants_1.BEHAVIOR_CATEGORIES);
exports.categorySchema = yup
    .mixed()
    .oneOf(categoryKeys)
    .required();
// We're using simple string arrays for benefits and drawbacks
const goalSchema = yup.object({
    type: yup
        .mixed()
        .oneOf(["greaterThan", "lessThanOrEqualTo"])
        .required(),
    target: yup.number().required(),
});
// These are foundational attributes, and correspond to documents in a top-level behaviorTemplates
// collection. We then extend that schema to be the full behavior schema.
exports.behaviorTemplateSchema = yup.object({
    name: yup.string().required(),
    category: exports.categorySchema,
    hasQuestions: yup.boolean().optional().default(false),
    trackingType: yup.string().oneOf(exports.trackingTypes).required(),
    trackingUnit: yup.string().when("trackingType", {
        is: "counter",
        then: (schema) => schema.required("Tracking unit is required when tracking type is 'counter'"),
        otherwise: (schema) => schema.notRequired(),
    }),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
exports.behaviorSchema = exports.behaviorTemplateSchema.shape({
    id: yup.string(),
    description: yup.string().required(),
    ordinal: yup.number().default(0),
    benefits: yup.array().of(yup.string().required()),
    drawbacks: yup.array().of(yup.string().required()),
    goal: goalSchema,
    lastTrackedAt: utils_1.timestampSchema,
});
const isBehavior = (value) => {
    try {
        exports.behaviorSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isBehavior = isBehavior;
