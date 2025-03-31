import * as yup from "yup";

export const userTimezoneSchema = yup.object({
  timezone: yup.string().required(),
  timezoneOffset: yup.number().optional(),
  createdAt: yup.mixed().optional(),
  updatedAt: yup.mixed().optional(),
});

export type UserTimezones = yup.InferType<typeof userTimezoneSchema>;
