import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { logBaseSchema } from "./base";

export enum TourIcon {
  DockBehaviorsButton = "dockBehaviorsButton",
  DockMetricsButton = "dockMetricsButton",
}

export const tourStepSchema = yup.object({
  elementRefName: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  confirmButtonLabel: yup.string().required().default("Ok"),
  nextOnImpulseButtonPress: yup.boolean(),
  borderRadius: yup.number(),
  innerPadding: yup.number(),
});
export type TourStep = yup.InferType<typeof tourStepSchema>;

export const showTourLogSchema = logBaseSchema.shape({
  type: yup.mixed<"show_tour">().oneOf(["show_tour"]).required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  text: yup.string().required(),
  data: yup.object({
    steps: yup.array().of(tourStepSchema).required(),
    firstNavigateToRoute: yup.string(),
    startButtonLabel: yup.string(),
    completedAt: timestampSchema,
  }),
});

export type ShowTourLog = yup.InferType<typeof showTourLogSchema>;
