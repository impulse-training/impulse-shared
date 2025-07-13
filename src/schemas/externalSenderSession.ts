import * as yup from "yup";
import { Timestamp } from "../types";
import {
  DocumentReferenceLike,
  documentReferenceSchema,
  timestampSchema,
} from "../utils";
import { Folder } from "./folder";

export interface ExternalSenderSession {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  expiresAt: Timestamp;
  systemMessage: string;
  // Timestamp that gets updated when files are added to the session
  filesUpdatedAt?: Timestamp;
  // Reference to a strategy/folder where tactics should be created from files
  targetFolderRef?: DocumentReferenceLike<Folder>;
}

export const externalSenderSessionSchema = yup.object().shape({
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  expiresAt: timestampSchema.required(),
  systemMessage: yup.string().required(),
  filesUpdatedAt: timestampSchema,
  targetFolderRef: documentReferenceSchema,
});
