/**
 * Tactic Schemas
 *
 * Defines Yup schemas for tactic data
 */
import * as yup from "yup";
import { actionTacticSchema } from "./action";
import { affirmationTacticSchema } from "./affirmation";
import { audioTacticSchema } from "./audio";
import { breathingExerciseTacticSchema } from "./breathingExercise";
import { imageTacticSchema } from "./image";
import { linkTacticSchema } from "./link";
import { supportGroupTacticSchema } from "./supportGroup";
import { videoTacticSchema } from "./video";

// Map of tactic types to their schemas
export const tacticSchemas = {
  action: actionTacticSchema,
  affirmation: affirmationTacticSchema,
  audio: audioTacticSchema,
  breathingExercise: breathingExerciseTacticSchema,
  image: imageTacticSchema,
  link: linkTacticSchema,
  supportGroup: supportGroupTacticSchema,
  video: videoTacticSchema,
};

// Dynamic schema that selects the appropriate schema based on the tactic type
export const tacticSchema = yup.lazy((value) => {
  if (typeof value?.type === "string" && value.type in tacticSchemas) {
    return tacticSchemas[value.type as keyof typeof tacticSchemas];
  }

  // Fallback schema for validation when type is missing or invalid
  return yup.object({
    type: yup
      .string()
      .oneOf(Object.keys(tacticSchemas))
      .required("Tactic type is required"),
  });
});
