import * as yup from "yup";

export const insightSchema = yup.object({
  userId: yup.string().required(),
  text: yup.string().required(),
});
export type Insight = yup.InferType<typeof insightSchema>;
