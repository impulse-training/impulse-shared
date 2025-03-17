import { InferType } from "yup";
import { actionTacticSchema } from "../schemas/tactic/action";
import { affirmationTacticSchema } from "../schemas/tactic/affirmation";
import { audioTacticSchema } from "../schemas/tactic/audio";
import { imageTacticSchema } from "../schemas/tactic/image";
import { linkTacticSchema } from "../schemas/tactic/link";
import { supportGroupTacticSchema } from "../schemas/tactic/supportGroup";
import { tacticTypes } from "../schemas/tactic/types";
import { videoTacticSchema } from "../schemas/tactic/video";
export type TacticType = (typeof tacticTypes)[number];
export type ActionTactic = InferType<typeof actionTacticSchema>;
export type AffirmationTactic = InferType<typeof affirmationTacticSchema>;
export type AudioTactic = InferType<typeof audioTacticSchema>;
export type ImageTactic = InferType<typeof imageTacticSchema>;
export type LinkTactic = InferType<typeof linkTacticSchema>;
export type SupportGroupTactic = InferType<typeof supportGroupTacticSchema>;
export type VideoTactic = InferType<typeof videoTacticSchema>;
export type Tactic = ActionTactic | AffirmationTactic | AudioTactic | ImageTactic | LinkTactic | SupportGroupTactic | VideoTactic;
export declare const tacticIsActionTactic: (value: Tactic) => value is ActionTactic;
export declare const isValidActionTactic: (value: unknown) => value is ActionTactic;
export declare const tacticIsAffirmationTactic: (value: Tactic) => value is AffirmationTactic;
export declare const isValidAffirmationTactic: (value: unknown) => value is AffirmationTactic;
export declare const tacticIsAudioTactic: (value: Tactic) => value is AudioTactic;
export declare const isValidAudioTactic: (value: unknown) => value is AudioTactic;
export declare const tacticIsImageTactic: (value: Tactic) => value is ImageTactic;
export declare const isValidImageTactic: (value: unknown) => value is ImageTactic;
export declare const tacticIsLinkTactic: (value: Tactic) => value is LinkTactic;
export declare const isValidLinkTactic: (value: unknown) => value is LinkTactic;
export declare const tacticIsSupportGroupTactic: (value: Tactic) => value is SupportGroupTactic;
export declare const isValidSupportGroupTactic: (value: unknown) => value is SupportGroupTactic;
export declare const tacticIsVideoTactic: (value: Tactic) => value is VideoTactic;
export declare const isValidVideoTactic: (value: unknown) => value is VideoTactic;
