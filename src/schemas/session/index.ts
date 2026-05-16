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
import { OnboardingSession, onboardingSessionSchema } from "./onboarding";
// TODO: Remove after 2026-05-26 — legacy import for "alignment" → "onboarding" rename
import { AlignmentSession, alignmentSessionSchema } from "./alignment";
import { TacticSession, tacticSessionSchema } from "./tactic";
import { WelcomeSession, welcomeSessionSchema } from "./welcome";
import { RecoveryKeySession, recoveryKeySessionSchema } from "./recoveryKey";
import { TasksSession, tasksSessionSchema } from "./tasks";
import { DemoSession, demoSessionSchema } from "./demo";
import { MilestoneSession, milestoneSessionSchema } from "./milestone";
import {
  ToolkitPlanningSession,
  toolkitPlanningSessionSchema,
} from "./toolkitPlanning";

export * from "../sessionSummary";
export * from "./adjustment";
export * from "./behavior";
export * from "./general";
export * from "./impulse";
export * from "./phase";
export * from "./plan";
export * from "./recap";
export * from "./onboarding";
// TODO: Remove after 2026-05-26 — legacy re-export for "alignment" → "onboarding" rename
export * from "./alignment";
export * from "./tactic";
export * from "./welcome";
export * from "./recoveryKey";
export * from "./tasks";
export * from "./demo";
export * from "./milestone";
export * from "./toolkitPlanning";

// Map of session types to their schemas
export const sessionSchemas: Record<string, z.ZodTypeAny> = {
  general: generalSessionSchema,
  impulse: impulseSessionSchema,
  timePlan: timePlanSessionSchema,
  behavior: behaviorSessionSchema,
  recap: recapSessionSchema,
  locationPlan: locationPlanSessionSchema,
  adjustment: adjustmentSessionSchema,
  onboarding: onboardingSessionSchema,
  // TODO: Remove after 2026-05-26 — legacy key for "alignment" → "onboarding" rename
  alignment: alignmentSessionSchema,
  tactic: tacticSessionSchema,
  welcome: welcomeSessionSchema,
  recoveryKey: recoveryKeySessionSchema,
  tasks: tasksSessionSchema,
  demo: demoSessionSchema,
  milestone: milestoneSessionSchema,
  toolkitPlanning: toolkitPlanningSessionSchema,
};

// Discriminated union over type
export const sessionSchema: z.ZodDiscriminatedUnion<
  "type",
  [
    typeof generalSessionSchema,
    typeof impulseSessionSchema,
    typeof behaviorSessionSchema,
    typeof timePlanSessionSchema,
    typeof onboardingSessionSchema,
    typeof alignmentSessionSchema,
    typeof recapSessionSchema,
    typeof locationPlanSessionSchema,
    typeof adjustmentSessionSchema,
    typeof tacticSessionSchema,
    typeof welcomeSessionSchema,
    typeof recoveryKeySessionSchema,
    typeof tasksSessionSchema,
    typeof demoSessionSchema,
    typeof milestoneSessionSchema,
    typeof toolkitPlanningSessionSchema,
  ]
> = z.discriminatedUnion("type", [
  generalSessionSchema,
  impulseSessionSchema,
  behaviorSessionSchema,
  timePlanSessionSchema,
  onboardingSessionSchema,
  // TODO: Remove after 2026-05-26 — legacy schema for "alignment" → "onboarding" rename
  alignmentSessionSchema,
  recapSessionSchema,
  locationPlanSessionSchema,
  adjustmentSessionSchema,
  tacticSessionSchema,
  welcomeSessionSchema,
  recoveryKeySessionSchema,
  tasksSessionSchema,
  demoSessionSchema,
  milestoneSessionSchema,
  toolkitPlanningSessionSchema,
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

export const sessionIsOnboardingSession = (
  value: Session,
): value is OnboardingSession =>
  value.type === "onboarding" || (value.type as string) === "alignment";
export const isValidOnboardingSession = (
  value: unknown,
): value is OnboardingSession =>
  onboardingSessionSchema.safeParse(value).success ||
  alignmentSessionSchema.safeParse(value).success;

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

export const sessionIsTacticSession = (
  value: Session,
): value is TacticSession => value.type === "tactic";
export const isValidTacticSession = (value: unknown): value is TacticSession =>
  tacticSessionSchema.safeParse(value).success;

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

export const sessionIsTasksSession = (
  value: Session,
): value is TasksSession => value.type === "tasks";
export const isValidTasksSession = (
  value: unknown,
): value is TasksSession => tasksSessionSchema.safeParse(value).success;

export const sessionIsDemoSession = (value: Session): value is DemoSession =>
  value.type === "demo";
export const isValidDemoSession = (value: unknown): value is DemoSession =>
  demoSessionSchema.safeParse(value).success;

export const sessionIsMilestoneSession = (
  value: Session,
): value is MilestoneSession => value.type === "milestone";
export const isValidMilestoneSession = (
  value: unknown,
): value is MilestoneSession => milestoneSessionSchema.safeParse(value).success;

export const sessionIsToolkitPlanningSession = (
  value: Session,
): value is ToolkitPlanningSession => value.type === "toolkitPlanning";
export const isValidToolkitPlanningSession = (
  value: unknown,
): value is ToolkitPlanningSession =>
  toolkitPlanningSessionSchema.safeParse(value).success;

const noSummarizeSessionTypes: Session["type"][] = [
  "adjustment",
  "tactic",
  "welcome",
  "recoveryKey",
  "tasks",
  "demo",
  "milestone",
  "toolkitPlanning",
];

export function shouldSummarizeSession(
  session: Pick<Session, "type">,
): boolean {
  return !noSummarizeSessionTypes.includes(session.type);
}

export type Session = z.infer<typeof sessionSchema>;
