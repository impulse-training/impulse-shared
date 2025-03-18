import * as yup from "yup";
import { logBaseSchema } from "./base";

// Define outcome types for debrief
export const debriefOutcomes = ["setback", "partial", "success"] as const;
export type DebriefOutcome = typeof debriefOutcomes[number];

// Schema for debrief answer logs
export const debriefAnswerLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["debrief_answer"]).required(),
  isDisplayable: yup.boolean().default(true).required(),
  data: yup.object({
    questionId: yup.string().required(),
    question: yup.string().required(),
    answer: yup.string().required(),
  }).required(),
});

// Schema for debrief outcome logs
export const debriefOutcomeLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["debrief_outcome"]).required(),
  isDisplayable: yup.boolean().default(true).required(),
  data: yup.object({
    outcome: yup.string().oneOf(debriefOutcomes).required(),
  }).required(),
});

// Schema for debrief summary request logs
export const debriefSummaryRequestLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["debrief_summary_request"]).required(),
  isDisplayable: yup.boolean().default(false).required(),
  data: yup.object({
    message: yup.string().required(),
  }).required(),
});

// Schema for debrief summary logs
export const debriefSummaryLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["debrief_summary"]).required(),
  isDisplayable: yup.boolean().default(true).required(),
  data: yup.object({
    summary: yup.string().required(),
  }).required(),
});

// Schema for debrief edited summary logs
export const debriefSummaryEditedLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["debrief_summary_edited"]).required(),
  isDisplayable: yup.boolean().default(true).required(),
  data: yup.object({
    summary: yup.string().required(),
  }).required(),
});

// Export types inferred from schemas
export type DebriefAnswerLog = yup.InferType<typeof debriefAnswerLogSchema>;
export type DebriefOutcomeLog = yup.InferType<typeof debriefOutcomeLogSchema>;
export type DebriefSummaryRequestLog = yup.InferType<typeof debriefSummaryRequestLogSchema>;
export type DebriefSummaryLog = yup.InferType<typeof debriefSummaryLogSchema>;
export type DebriefSummaryEditedLog = yup.InferType<typeof debriefSummaryEditedLogSchema>;
