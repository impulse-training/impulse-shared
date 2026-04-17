import { z } from "zod";
import { Timestamp } from "../types/firebase";
import { timestampSchema } from "../utils/timestampSchema";

export const coachingApplicationSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  urgePattern: z.string().optional(),
  note: z.string().optional(),
  timezone: z.string().optional(),
  sourceIpHash: z.string().optional(),
  status: z.enum(["new", "reviewed", "contacted", "enrolled", "declined"])
    .default("new"),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type CoachingApplication = z.infer<typeof coachingApplicationSchema> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
