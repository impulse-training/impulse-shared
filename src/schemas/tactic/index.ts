import * as yup from "yup";
import { ActionTactic, actionTacticSchema } from "./action";
import { AffirmationTactic, affirmationTacticSchema } from "./affirmation";
import { AudioTactic, audioTacticSchema } from "./audio";
import {
  BreathingExerciseTactic,
  breathingExerciseTacticSchema,
} from "./breathingExercise";
import { ImageTactic, imageTacticSchema } from "./image";
import { LinkTactic, linkTacticSchema } from "./link";
import { SupportGroupTactic, supportGroupTacticSchema } from "./supportGroup";
import { VideoTactic, videoTacticSchema } from "./video";

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

export const tacticIsActionTactic = (value: Tactic): value is ActionTactic =>
  value.type === "action";
export const isValidActionTactic = (value: unknown): value is ActionTactic => {
  try {
    actionTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
export const tacticIsAffirmationTactic = (
  value: Tactic
): value is AffirmationTactic => value.type === "affirmation";
export const isValidAffirmationTactic = (
  value: unknown
): value is AffirmationTactic => {
  try {
    affirmationTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const tacticIsAudioTactic = (value: Tactic): value is AudioTactic =>
  value.type === "audio";
export const isValidAudioTactic = (value: unknown): value is AudioTactic => {
  try {
    audioTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const tacticIsImageTactic = (value: Tactic): value is ImageTactic =>
  value.type === "image";
export const isValidImageTactic = (value: unknown): value is ImageTactic => {
  try {
    imageTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const tacticIsLinkTactic = (value: Tactic): value is LinkTactic =>
  value.type === "link";
export const isValidLinkTactic = (value: unknown): value is LinkTactic => {
  try {
    linkTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
export const tacticIsSupportGroupTactic = (
  value: Tactic
): value is SupportGroupTactic => value.type === "supportGroup";
export const isValidSupportGroupTactic = (
  value: unknown
): value is SupportGroupTactic => {
  try {
    supportGroupTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const tacticIsBreathingExerciseTactic = (
  value: Tactic
): value is BreathingExerciseTactic => value.type === "breathingExercise";
export const isValidBreathingExerciseTactic = (
  value: unknown
): value is BreathingExerciseTactic => {
  try {
    breathingExerciseTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const tacticIsVideoTactic = (value: Tactic): value is VideoTactic =>
  value.type === "video";
export const isValidVideoTactic = (value: unknown): value is VideoTactic => {
  try {
    videoTacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export type Tactic =
  | ActionTactic
  | AffirmationTactic
  | AudioTactic
  | ImageTactic
  | LinkTactic
  | SupportGroupTactic
  | VideoTactic
  | BreathingExerciseTactic;
