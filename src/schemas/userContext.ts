import * as yup from "yup";
import { timestampSchema } from "../utils";
import { objectOf } from "../utils/objectOf";

export const behaviorContextSchema = yup.object({
  behaviorId: yup.string().required(),
  behaviorName: yup.string().required(),
  trackingType: yup.string().oneOf(["counter", "timer", "boolean"]).required(),
  streakDays: yup.number().default(0),
  totalTracked: yup.number().default(0),
  insights: yup.array().of(yup.string()).default([]),
  effectiveTactics: yup.array().of(yup.string()).default([]),
  gameplanTacticIds: yup.array().of(yup.string()).default([]),
});

export const tacticContextSchema = yup.object({
  tacticId: yup.string().required(),
  tacticTitle: yup.string().required(),
  tacticType: yup.string().required(),
  completedCount: yup.number().default(0),
  effectiveness: yup.number().min(1).max(10).default(5),
});

export const aiMemorySchema = yup.object({
  id: yup.string().required(),
  content: yup.string().required(),
  source: yup.string().required(),
  createdAt: timestampSchema,
});

export const userContextSchema = yup.object({
  behaviors: objectOf(behaviorContextSchema),
  tactics: objectOf(tacticContextSchema),
  aiMemories: yup.array().of(aiMemorySchema).default([]),
  overallInsights: yup.array().of(yup.string()).default([]),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
