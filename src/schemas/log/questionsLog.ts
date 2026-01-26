import { z } from "zod";
import { behaviorSchema } from "../behavior";
import { goalComparisonEntrySchema } from "../daySummary";
import { questionSchema } from "../question";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

/** Schema for recap response value - includes behavior totals, goals, and behaviors snapshot */
export const recapResponseValueSchema = z.object({
  behaviorTotals: z.record(
    z.string(),
    z.object({
      value: z.number(),
      formattedValue: z.string(),
      behaviorName: z.string(),
    }),
  ),
  summaryText: z.string(),
  /** Goal comparison data keyed by behaviorId */
  goalComparisonByBehaviorId: z
    .record(z.string(), goalComparisonEntrySchema)
    .optional(),
  /** Snapshot of behaviors at the time of recap, keyed by behaviorId */
  behaviorsById: z.record(z.string(), behaviorSchema).optional(),
});
export type RecapResponseValue = z.infer<typeof recapResponseValueSchema>;

const responseSchema = z.object({
  responseType: z.enum([
    "text",
    "shortText",
    "emotion",
    "slider1To10",
    "behaviorSelection",
    "recap",
  ]),
  value: z.union([z.unknown(), z.array(z.unknown())]), // Support both single values and arrays
  formattedValue: z.string(),
  color: z.string().optional(),
});
export type Response = z.infer<typeof responseSchema>;

/** Single question with its response */
const questionEntrySchema = z.object({
  questionId: z.string().optional(),
  question: questionSchema,
  response: responseSchema.optional(),
});
export type QuestionEntry = z.infer<typeof questionEntrySchema>;

/** Commit strategy for questions - live auto-submits on change, explicit requires submit button */
export const commitStrategySchema = z.enum(["live", "explicit"]);
export type CommitStrategy = z.infer<typeof commitStrategySchema>;

/**
 * Multi-question log - supports multiple questions and their responses.
 * Used for experiment metrics and other multi-question scenarios.
 */
export const questionsLogSchema = logBaseSchema.extend({
  type: z.literal("questions"),
  isDisplayable: z.literal(true),
  /** Display text shown above the questions */
  text: z.string().optional(),
  /** Timestamp when all questions in this log were answered */
  answeredAt: timestampSchema.optional(),
  /** How responses are committed - "live" auto-submits on change, "explicit" shows submit button */
  commitStrategy: commitStrategySchema.optional(),
  data: z.object({
    /** Array of questions with their responses */
    questions: z.array(questionEntrySchema),
  }),
});

export type QuestionsLog = z.infer<typeof questionsLogSchema>;
