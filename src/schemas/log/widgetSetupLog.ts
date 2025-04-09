import * as yup from "yup";
import { logBaseSchema } from "./base";

// WidgetSetup Log Schema
export const widgetSetupLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["widget_setup"]).required(),
  // WidgetSetup logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      impulseWidgetInstalled: yup.boolean().required(),
    })
    .required(),
});

export type WidgetSetupLog = yup.InferType<typeof widgetSetupLogSchema>;
