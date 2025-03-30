import * as yup from "yup";

export const userTimezoneSchema = yup.object({
  timezone: yup.string().required(),
});
export type UserTimezones = yup.InferType<typeof userTimezoneSchema>;
