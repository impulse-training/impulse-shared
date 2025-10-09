import { z } from "zod";
import { Timestamp } from "../types";
import {
  DocumentReferenceLike,
  documentReferenceSchema,
} from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

export interface ExternalSenderSession {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  expiresAt: Timestamp;
  systemMessage: string;
  // Timestamp that gets updated when files are added to the session
  filesUpdatedAt?: Timestamp;
  // Reference to a tactic where steps should be created from files
  targetTacticRef?: DocumentReferenceLike<any>;
}

export const externalSenderSessionSchema = z.object({
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  expiresAt: timestampSchema.optional(),
  systemMessage: z.string(),
  filesUpdatedAt: timestampSchema.optional(),
  senderName: z.string().optional(),
  targetTacticRef: documentReferenceSchema.optional(),
});
