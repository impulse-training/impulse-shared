import { z } from "zod";
import { AdjustmentSession, adjustmentSessionSchema } from "./adjustment";
import { BehaviorSession, behaviorSessionSchema } from "./behavior";
import { GeneralSession, generalSessionSchema } from "./general";
import { ImpulseSession, impulseSessionSchema } from "./impulse";
import {
  LocationPlanSession,
  locationPlanSessionSchema,
  TimePlanSession,
  timePlanSessionSchema,
} from "./plan";
import { RecapSession, recapSessionSchema } from "./recap";
import { AlignmentSession, alignmentSessionSchema } from "./alignment";
import { CommitmentSession, commitmentSessionSchema } from "./commitment";
import { TacticSession, tacticSessionSchema } from "./tactic";
import { WelcomeSession, welcomeSessionSchema } from "./welcome";
import { SetupSession, setupSessionSchema } from "./setup";
import {
  RecoveryKeySession,
  recoveryKeySessionSchema,
} from "./recoveryKey";
import { DemoSession, demoSessionSchema } from "./demo";
import { MilestoneSession, milestoneSessionSchema } from "./milestone";

export * from "../sessionSummary";
export * from "./adjustment";
export * from "./behavior";
export * from "./general";
export * from "./impulse";
export * from "./phase";
export * from "./plan";
export * from "./recap";
export * from "./alignment";
export * from "./commitment";
export * from "./tactic";
export * from "./welcome";
export * from "./setup";
export * from "./recoveryKey";
export * from "./demo";
export * from "./milestone";

// Map of session types to their schemas
export const sessionSchemas: Record<string, z.ZodTypeAny> = {
  general: generalSessionSchema,
  impulse: impulseSessionSchema,
  timePlan: timePlanSessionSchema,
  behavior: behaviorSessionSchema,
  recap: recapSessionSchema,
  locationPlan: locationPlanSessionSchema,
  adjustment: adjustmentSessionSchema,
  alignment: alignmentSessionSchema,
  commitment: commitmentSessionSchema,
  tactic: tacticSessionSchema,
  welcome: welcomeSessionSchema,
  setup: setupSessionSchema,
  recoveryKey: recoveryKeySessionSchema,
  demo: demoSessionSchema,
  milestone: milestoneSessionSchema,
};

// Discriminated union over type
export const sessionSchema: z.ZodDiscriminatedUnion<"type", [typeof generalSessionSchema, typeof impulseSessionSchema, typeof behaviorSessionSchema, typeof timePlanSessionSchema, typeof alignmentSessionSchema, typeof recapSessionSchema, typeof locationPlanSessionSchema, typeof adjustmentSessionSchema, typeof commitmentSessionSchema, typeof tacticSessionSchema, typeof welcomeSessionSchema, typeof setupSessionSchema, typeof recoveryKeySessionSchema, typeof demoSessionSchema, typeof milestoneSessionSchema]> = z.discriminatedUnion("type", [
  generalSessionSchema,
  impulseSessionSchema,
  behaviorSessionSchema,
  timePlanSessionSchema,
  alignmentSessionSchema,
  recapSessionSchema,
  locationPlanSessionSchema,
  adjustmentSessionSchema,
  commitmentSessionSchema,
  tacticSessionSchema,
  welcomeSessionSchema,
  setupSessionSchema,
  recoveryKeySessionSchema,
  demoSessionSchema,
  milestoneSessionSchema,
]);

export const sessionIsGeneralSession = (
  value: Session,
): value is GeneralSession => value.type === "general";
export const isValidGeneralSession = (
  value: unknown,
): value is GeneralSession => generalSessionSchema.safeParse(value).success;

export const sessionIsImpulseSession = (
  value: Session,
): value is ImpulseSession => value.type === "impulse";
export const isValidImpulseSession = (
  value: unknown,
): value is ImpulseSession => impulseSessionSchema.safeParse(value).success;

export const sessionIsTimePlanSession = (
  value: Session,
): value is TimePlanSession => value.type === "timePlan";
export const isValidTimePlanSession = (
  value: unknown,
): value is TimePlanSession => timePlanSessionSchema.safeParse(value).success;

export const sessionIsAlignmentSession = (
  value: Session,
): value is AlignmentSession => value.type === "alignment";
export const isValidAlignmentSession = (
  value: unknown,
): value is AlignmentSession => alignmentSessionSchema.safeParse(value).success;

export const sessionIsRecapSession = (value: Session): value is RecapSession =>
  value.type === "recap";
export const isValidRecapSession = (value: unknown): value is RecapSession =>
  recapSessionSchema.safeParse(value).success;

export const sessionIsLocationPlanSession = (
  value: Session,
): value is LocationPlanSession => value.type === "locationPlan";
export const isValidLocationPlanSession = (
  value: unknown,
): value is LocationPlanSession =>
  locationPlanSessionSchema.safeParse(value).success;

export const sessionIsBehaviorSession = (
  value: Session,
): value is BehaviorSession => value.type === "behavior";
export const isValidBehaviorSession = (
  value: unknown,
): value is BehaviorSession => behaviorSessionSchema.safeParse(value).success;

export const sessionIsAdjustmentSession = (
  value: Session,
): value is AdjustmentSession => value.type === "adjustment";
export const isValidAdjustmentSession = (
  value: unknown,
): value is AdjustmentSession =>
  adjustmentSessionSchema.safeParse(value).success;

export const sessionIsCommitmentSession = (
  value: Session,
): value is CommitmentSession => value.type === "commitment";
export const isValidCommitmentSession = (
  value: unknown,
): value is CommitmentSession =>
  commitmentSessionSchema.safeParse(value).success;

export const sessionIsTacticSession = (
  value: Session,
): value is TacticSession => value.type === "tactic";
export const isValidTacticSession = (
  value: unknown,
): value is TacticSession => tacticSessionSchema.safeParse(value).success;

export const sessionIsWelcomeSession = (
  value: Session,
): value is WelcomeSession => value.type === "welcome";
export const isValidWelcomeSession = (
  value: unknown,
): value is WelcomeSession => welcomeSessionSchema.safeParse(value).success;

export const sessionIsRecoveryKeySession = (
  value: Session,
): value is RecoveryKeySession => value.type === "recoveryKey";
export const isValidRecoveryKeySession = (
  value: unknown,
): value is RecoveryKeySession =>
  recoveryKeySessionSchema.safeParse(value).success;

export const sessionIsDemoSession = (
  value: Session,
): value is DemoSession => value.type === "demo";
export const isValidDemoSession = (
  value: unknown,
): value is DemoSession => demoSessionSchema.safeParse(value).success;

export const sessionIsMilestoneSession = (
  value: Session,
): value is MilestoneSession => value.type === "milestone";
export const isValidMilestoneSession = (
  value: unknown,
): value is MilestoneSession => milestoneSessionSchema.safeParse(value).success;

const noSummarizeSessionTypes: Session["type"][] = [
  "adjustment",
  "setup",
  "tactic",
  "welcome",
  "recoveryKey",
  "demo",
  "milestone",
];

export function shouldSummarizeSession(
  session: Pick<Session, "type">,
): boolean {
  return !noSummarizeSessionTypes.includes(session.type);
}

export type Session = z.infer<typeof sessionSchema>;
