import { Thread } from "../schemas/thread";

export type GenerateSystemPrompt = (
  db: any,
  threadDoc: { data(): Thread | undefined; ref: { update: (data: any) => Promise<any> } }
) => Promise<string>;

type ThreadDocLike = {
  data(): Thread | undefined;
  ref: { update: (data: any) => Promise<any> };
};

/**
 * Returns the correct system prompt for the given thread/mode, generating and caching it on the thread doc if missing.
 * - active => uses thread.activeSystemPrompt
 * - chat   => uses thread.chatSystemPrompt
 *
 * If mode is not provided, it will infer from thread.currentConverationMode (defaults to "active").
 */
export async function getSystemPromptForThread(
  db: any,
  threadDoc: ThreadDocLike,
  generateSystemPrompt: GenerateSystemPrompt,
  mode?: "active" | "chat"
): Promise<string> {
  const thread = threadDoc.data()!;
  const resolvedMode = mode ?? thread.currentConverationMode ?? "active";

  if (resolvedMode === "chat") {
    if (thread.chatSystemPrompt) return thread.chatSystemPrompt;
    const systemPrompt = await generateSystemPrompt(db, threadDoc);
    await threadDoc.ref.update({ chatSystemPrompt: systemPrompt });
    return systemPrompt;
  } else {
    if (thread.activeSystemPrompt) return thread.activeSystemPrompt;
    const systemPrompt = await generateSystemPrompt(db, threadDoc);
    await threadDoc.ref.update({ activeSystemPrompt: systemPrompt });
    return systemPrompt;
  }
}
