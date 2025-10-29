import { z } from "zod";
import { objectOf } from "../../utils/objectOf";
import { emojiIdSchema } from "../emojiId";
import { userProfileSchema } from "../userProfile";
import { logBaseSchema } from "./base";

export const notifySupportGroupLogSchema = logBaseSchema.extend({
  type: z.literal("notify_support_group"),
  isDisplayable: z.literal(true),
  data: z.object({
    message: z.any(),
    // Snapshot of the sender's emoji identity (to avoid extra reads)
    emojiId: emojiIdSchema.optional(),
    // A snapshot of the support groups this thread was shared with at the time of notification,
    // including member details so clients can display who was notified.
    supportGroupsById: objectOf(
      z.object({
        id: z.string(),
        name: z.string(),
        membersById: objectOf(
          z.object({
            userId: z.string(),
            userProfile: userProfileSchema,
          })
        ),
      })
    ),
  }),
});

export type NotifySupportGroupLog = z.infer<typeof notifySupportGroupLogSchema>;
