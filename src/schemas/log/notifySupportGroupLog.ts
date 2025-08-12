import { ChatCompletionUserMessageParam } from "openai/resources";
import * as yup from "yup";
import { objectOf } from "../../utils";
import { userProfileSchema } from "../userProfile";
import { logBaseSchema } from "./base";

export const notifySupportGroupLogSchema = logBaseSchema.shape({
  type: yup
    .mixed<"notify_support_group">()
    .oneOf(["notify_support_group"])
    .required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      message: yup.mixed<ChatCompletionUserMessageParam>().required(),
      // A snapshot of the support groups this thread was shared with at the time of notification,
      // including member details so clients can display who was notified.
      supportGroupsById: objectOf(
        yup.object({
          id: yup.string().required(),
          name: yup.string().required(),
          membersById: objectOf(
            yup.object({
              userId: yup.string().required(),
              userProfile: userProfileSchema,
            })
          ),
        })
      ),
    })
    .required(),
});

export type NotifySupportGroupLog = yup.InferType<
  typeof notifySupportGroupLogSchema
>;
