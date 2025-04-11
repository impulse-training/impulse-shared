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
exports.gameplanLogSchema = exports.gameplanSchema = void 0;
const yup = __importStar(require("yup"));
const utils_1 = require("../../utils");
const tactic_1 = require("../tactic");
const base_1 = require("./base");
// A gameplan is a set of tactics
exports.gameplanSchema = yup.array().of(
// We always provide the tactic with an id, but the document may or may not exist
yup.object({
    tactic: tactic_1.tacticSchema,
    exists: yup.boolean().required(),
}));
// Gameplan Log Schema
exports.gameplanLogSchema = base_1.logBaseSchema.shape({
    type: yup.mixed().oneOf(["gameplan"]).required(),
    // Gameplan logs are always displayed in the UI
    isDisplayable: yup.mixed().oneOf([true]).required(),
    data: yup.object({
        gameplan: exports.gameplanSchema.required(),
        pastGameplans: yup.array().of(exports.gameplanSchema.required()),
        introduction: yup.string(),
        acceptedAt: utils_1.timestampSchema,
        shufflePressedAt: utils_1.timestampSchema,
    }),
});
