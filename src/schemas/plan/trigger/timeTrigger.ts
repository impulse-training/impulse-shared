import * as yup from "yup";

export const timeTriggerSchema = yup.object({
  hour: yup.number().required(),
  minute: yup.number().required(),
  weekdays: yup
    .array()
    .of(yup.number().min(0).max(6).required())
    .required()
    .min(1),
});

export type TimeTrigger = yup.InferType<typeof timeTriggerSchema>;
