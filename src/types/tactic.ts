import { InferType } from "yup";
import { actionTacticSchema } from "../schemas/tactic/action";
import { affirmationTacticSchema } from "../schemas/tactic/affirmation";
import { audioTacticSchema } from "../schemas/tactic/audio";
import { imageTacticSchema } from "../schemas/tactic/image";
import { linkTacticSchema } from "../schemas/tactic/link";
import { supportGroupTacticSchema } from "../schemas/tactic/supportGroup";
import { tacticTypes } from "../schemas/tactic/types";
import { videoTacticSchema } from "../schemas/tactic/video";

// Export activity type
export type TacticType = (typeof tacticTypes)[number];

// Export types inferred from schemas
export type ActionTactic = InferType<typeof actionTacticSchema>;
export type AffirmationTactic = InferType<typeof affirmationTacticSchema>;
export type AudioTactic = InferType<typeof audioTacticSchema>;
export type ImageTactic = InferType<typeof imageTacticSchema>;
export type LinkTactic = InferType<typeof linkTacticSchema>;
export type SupportGroupTactic = InferType<typeof supportGroupTacticSchema>;
export type VideoTactic = InferType<typeof videoTacticSchema>;

// Union type of all tactics
export type Tactic =
  | ActionTactic
  | AffirmationTactic
  | AudioTactic
  | ImageTactic
  | LinkTactic
  | SupportGroupTactic
  | VideoTactic;

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
