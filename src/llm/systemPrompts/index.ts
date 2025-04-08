import { Thread } from "../../schemas";
import { DocumentSnapshotLike, FirestoreInstance } from "../../types";
import { generateImpulseSystemPrompt } from "./impulse";
import { generateOnboardingSystemPrompt } from "./onboarding";

export async function generateSystemPrompt(
  db: FirestoreInstance,
  thread: DocumentSnapshotLike<Thread>
): Promise<string> {
  if (thread.data()!.type === "onboarding") {
    return generateOnboardingSystemPrompt(db, thread);
  }
  return generateImpulseSystemPrompt(db, thread);
}
