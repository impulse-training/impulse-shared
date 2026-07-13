import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";
import { answerSpecSchema } from "../question/answerSpec";

const debriefQuestionDataObjectSchema = z.object({
  debriefQuestionId: z.string().min(1),
  behaviorId: z.string().min(1),
  behaviorName: z.string().optional(),
  question: z.string().min(1),
  // How the user answers — shared with the question config and tactic steps.
  answerSpec: answerSpecSchema,
  taskId: z.string().min(1),
  // Choice answers.
  selectedOptionId: z.string().optional(),
  // multiChoice answers (one or more option ids, submitted together).
  selectedOptionIds: z.array(z.string()).optional(),
  // The user's effective reply text. For choice this is the picked option's
  // label; for text it mirrors `freeTextResponse`.
  selectedResponseText: z.string().optional(),
  // Free-form (text) answer.
  freeTextResponse: z.string().optional(),
  // 1–10 scale answer.
  sliderValue: z.number().int().min(1).max(10).optional(),
  respondedAt: timestampSchema.optional(),
});

/**
 * Lift legacy `debrief_question` log data into the unified `answerSpec` model.
 * Older logs carried a top-level `options` array (with `responseText`/`style`);
 * a brief intermediate shape carried a flat `answerType`. Map both on read.
 */
function liftLegacyDebriefQuestionData(val: unknown): unknown {
  if (!val || typeof val !== "object" || Array.isArray(val)) return val;
  const v = val as Record<string, unknown>;
  if (v.answerSpec !== undefined) return v;

  if (v.answerType === "text") {
    return { ...v, answerSpec: { type: "text" } };
  }
  if (Array.isArray(v.options) && v.options.length > 0) {
    const options = (v.options as Array<Record<string, unknown>>).map((o) => ({
      id: o.id,
      label: o.label,
    }));
    return { ...v, answerSpec: { type: "choice", options } };
  }
  return v;
}

export const debriefQuestionLogSchema = logBaseSchema.extend({
  type: z.literal("debrief_question"),
  isDisplayable: z.literal(true),
  data: z.preprocess(
    liftLegacyDebriefQuestionData,
    debriefQuestionDataObjectSchema,
  ),
});

export type DebriefQuestionLog = z.infer<typeof debriefQuestionLogSchema>;
