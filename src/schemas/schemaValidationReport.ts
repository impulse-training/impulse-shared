import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Report produced by the daily schema-validation job (impulse-functions
 * `scheduled_validateSchemas`). It runs each registered document type's zod
 * schema over every doc and records good/bad counts plus a few sample failures
 * per type. Consumed by the admin dashboard's Schema Validation page.
 */

export const schemaValidationIssueSchema = z.object({
  // Dotted field path within the document, e.g. "steps.0.mode" ("(root)" if top-level)
  field: z.string(),
  // Zod issue code, e.g. "invalid_type", "invalid_union_discriminator"
  code: z.string(),
  message: z.string(),
});

export type SchemaValidationIssue = z.infer<typeof schemaValidationIssueSchema>;

export const schemaValidationSampleSchema = z.object({
  path: z.string(),
  // Owning user id when the doc lives under users/{uid}/...; null for global docs
  userId: z.string().nullable(),
  issues: z.array(schemaValidationIssueSchema),
});

export type SchemaValidationSample = z.infer<
  typeof schemaValidationSampleSchema
>;

export const schemaValidationTypeResultSchema = z.object({
  collectionGroup: z.string(),
  // Count of docs the schema applies to (valid + invalid). When a type scopes its
  // scan to one doc family (e.g. user-scoped tasks only), other families in the
  // same collection-group are counted under `skipped`, not here.
  total: z.number(),
  valid: z.number(),
  invalid: z.number(),
  // Docs in the collection-group this type's schema intentionally does not cover
  // (different doc family living under the same group name).
  skipped: z.number().optional(),
  // Up to a handful of failing docs for quick triage on the dashboard
  samples: z.array(schemaValidationSampleSchema),
  // Present if scanning this type threw (e.g. missing index) — total/valid/invalid are 0
  error: z.string().optional(),
});

export type SchemaValidationTypeResult = z.infer<
  typeof schemaValidationTypeResultSchema
>;

export const schemaValidationReportSchema = z.object({
  ranAt: timestampSchema,
  durationMs: z.number(),
  totalChecked: z.number(),
  totalInvalid: z.number(),
  // Keyed by document type, e.g. "tactic", "session"
  types: z.record(z.string(), schemaValidationTypeResultSchema),
});

export type SchemaValidationReport = z.infer<
  typeof schemaValidationReportSchema
>;

// Canonical Firestore location of the latest report.
export const SCHEMA_VALIDATION_REPORT_PATH = "systemReports/schemaValidation";
