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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidMilestoneSession = exports.sessionIsMilestoneSession = exports.isValidDemoSession = exports.sessionIsDemoSession = exports.isValidRecoveryKeySession = exports.sessionIsRecoveryKeySession = exports.isValidWelcomeSession = exports.sessionIsWelcomeSession = exports.isValidTacticSession = exports.sessionIsTacticSession = exports.isValidCommitmentSession = exports.sessionIsCommitmentSession = exports.isValidAdjustmentSession = exports.sessionIsAdjustmentSession = exports.isValidBehaviorSession = exports.sessionIsBehaviorSession = exports.isValidLocationPlanSession = exports.sessionIsLocationPlanSession = exports.isValidRecapSession = exports.sessionIsRecapSession = exports.isValidAlignmentSession = exports.sessionIsAlignmentSession = exports.isValidTimePlanSession = exports.sessionIsTimePlanSession = exports.isValidImpulseSession = exports.sessionIsImpulseSession = exports.isValidGeneralSession = exports.sessionIsGeneralSession = exports.sessionSchema = exports.sessionSchemas = void 0;
exports.shouldSummarizeSession = shouldSummarizeSession;
const zod_1 = require("zod");
const adjustment_1 = require("./adjustment");
const behavior_1 = require("./behavior");
const general_1 = require("./general");
const impulse_1 = require("./impulse");
const plan_1 = require("./plan");
const recap_1 = require("./recap");
const alignment_1 = require("./alignment");
const commitment_1 = require("./commitment");
const tactic_1 = require("./tactic");
const welcome_1 = require("./welcome");
const setup_1 = require("./setup");
const recoveryKey_1 = require("./recoveryKey");
const demo_1 = require("./demo");
const milestone_1 = require("./milestone");
__exportStar(require("../sessionSummary"), exports);
__exportStar(require("./adjustment"), exports);
__exportStar(require("./behavior"), exports);
__exportStar(require("./general"), exports);
__exportStar(require("./impulse"), exports);
__exportStar(require("./phase"), exports);
__exportStar(require("./plan"), exports);
__exportStar(require("./recap"), exports);
__exportStar(require("./alignment"), exports);
__exportStar(require("./commitment"), exports);
__exportStar(require("./tactic"), exports);
__exportStar(require("./welcome"), exports);
__exportStar(require("./setup"), exports);
__exportStar(require("./recoveryKey"), exports);
__exportStar(require("./demo"), exports);
__exportStar(require("./milestone"), exports);
// Map of session types to their schemas
exports.sessionSchemas = {
    general: general_1.generalSessionSchema,
    impulse: impulse_1.impulseSessionSchema,
    timePlan: plan_1.timePlanSessionSchema,
    behavior: behavior_1.behaviorSessionSchema,
    recap: recap_1.recapSessionSchema,
    locationPlan: plan_1.locationPlanSessionSchema,
    adjustment: adjustment_1.adjustmentSessionSchema,
    alignment: alignment_1.alignmentSessionSchema,
    commitment: commitment_1.commitmentSessionSchema,
    tactic: tactic_1.tacticSessionSchema,
    welcome: welcome_1.welcomeSessionSchema,
    setup: setup_1.setupSessionSchema,
    recoveryKey: recoveryKey_1.recoveryKeySessionSchema,
    demo: demo_1.demoSessionSchema,
    milestone: milestone_1.milestoneSessionSchema,
};
// Discriminated union over type
exports.sessionSchema = zod_1.z.discriminatedUnion("type", [
    general_1.generalSessionSchema,
    impulse_1.impulseSessionSchema,
    behavior_1.behaviorSessionSchema,
    plan_1.timePlanSessionSchema,
    alignment_1.alignmentSessionSchema,
    recap_1.recapSessionSchema,
    plan_1.locationPlanSessionSchema,
    adjustment_1.adjustmentSessionSchema,
    commitment_1.commitmentSessionSchema,
    tactic_1.tacticSessionSchema,
    welcome_1.welcomeSessionSchema,
    setup_1.setupSessionSchema,
    recoveryKey_1.recoveryKeySessionSchema,
    demo_1.demoSessionSchema,
    milestone_1.milestoneSessionSchema,
]);
const sessionIsGeneralSession = (value) => value.type === "general";
exports.sessionIsGeneralSession = sessionIsGeneralSession;
const isValidGeneralSession = (value) => general_1.generalSessionSchema.safeParse(value).success;
exports.isValidGeneralSession = isValidGeneralSession;
const sessionIsImpulseSession = (value) => value.type === "impulse";
exports.sessionIsImpulseSession = sessionIsImpulseSession;
const isValidImpulseSession = (value) => impulse_1.impulseSessionSchema.safeParse(value).success;
exports.isValidImpulseSession = isValidImpulseSession;
const sessionIsTimePlanSession = (value) => value.type === "timePlan";
exports.sessionIsTimePlanSession = sessionIsTimePlanSession;
const isValidTimePlanSession = (value) => plan_1.timePlanSessionSchema.safeParse(value).success;
exports.isValidTimePlanSession = isValidTimePlanSession;
const sessionIsAlignmentSession = (value) => value.type === "alignment";
exports.sessionIsAlignmentSession = sessionIsAlignmentSession;
const isValidAlignmentSession = (value) => alignment_1.alignmentSessionSchema.safeParse(value).success;
exports.isValidAlignmentSession = isValidAlignmentSession;
const sessionIsRecapSession = (value) => value.type === "recap";
exports.sessionIsRecapSession = sessionIsRecapSession;
const isValidRecapSession = (value) => recap_1.recapSessionSchema.safeParse(value).success;
exports.isValidRecapSession = isValidRecapSession;
const sessionIsLocationPlanSession = (value) => value.type === "locationPlan";
exports.sessionIsLocationPlanSession = sessionIsLocationPlanSession;
const isValidLocationPlanSession = (value) => plan_1.locationPlanSessionSchema.safeParse(value).success;
exports.isValidLocationPlanSession = isValidLocationPlanSession;
const sessionIsBehaviorSession = (value) => value.type === "behavior";
exports.sessionIsBehaviorSession = sessionIsBehaviorSession;
const isValidBehaviorSession = (value) => behavior_1.behaviorSessionSchema.safeParse(value).success;
exports.isValidBehaviorSession = isValidBehaviorSession;
const sessionIsAdjustmentSession = (value) => value.type === "adjustment";
exports.sessionIsAdjustmentSession = sessionIsAdjustmentSession;
const isValidAdjustmentSession = (value) => adjustment_1.adjustmentSessionSchema.safeParse(value).success;
exports.isValidAdjustmentSession = isValidAdjustmentSession;
const sessionIsCommitmentSession = (value) => value.type === "commitment";
exports.sessionIsCommitmentSession = sessionIsCommitmentSession;
const isValidCommitmentSession = (value) => commitment_1.commitmentSessionSchema.safeParse(value).success;
exports.isValidCommitmentSession = isValidCommitmentSession;
const sessionIsTacticSession = (value) => value.type === "tactic";
exports.sessionIsTacticSession = sessionIsTacticSession;
const isValidTacticSession = (value) => tactic_1.tacticSessionSchema.safeParse(value).success;
exports.isValidTacticSession = isValidTacticSession;
const sessionIsWelcomeSession = (value) => value.type === "welcome";
exports.sessionIsWelcomeSession = sessionIsWelcomeSession;
const isValidWelcomeSession = (value) => welcome_1.welcomeSessionSchema.safeParse(value).success;
exports.isValidWelcomeSession = isValidWelcomeSession;
const sessionIsRecoveryKeySession = (value) => value.type === "recoveryKey";
exports.sessionIsRecoveryKeySession = sessionIsRecoveryKeySession;
const isValidRecoveryKeySession = (value) => recoveryKey_1.recoveryKeySessionSchema.safeParse(value).success;
exports.isValidRecoveryKeySession = isValidRecoveryKeySession;
const sessionIsDemoSession = (value) => value.type === "demo";
exports.sessionIsDemoSession = sessionIsDemoSession;
const isValidDemoSession = (value) => demo_1.demoSessionSchema.safeParse(value).success;
exports.isValidDemoSession = isValidDemoSession;
const sessionIsMilestoneSession = (value) => value.type === "milestone";
exports.sessionIsMilestoneSession = sessionIsMilestoneSession;
const isValidMilestoneSession = (value) => milestone_1.milestoneSessionSchema.safeParse(value).success;
exports.isValidMilestoneSession = isValidMilestoneSession;
const noSummarizeSessionTypes = [
    "adjustment",
    "setup",
    "tactic",
    "welcome",
    "recoveryKey",
    "demo",
    "milestone",
];
function shouldSummarizeSession(session) {
    return !noSummarizeSessionTypes.includes(session.type);
}
