import { Thread } from "../schemas/thread";

export type GenerateSystemPrompt = (
  db: any,
  threadDoc: {
    data(): Thread | undefined;
    ref: { update: (data: any) => Promise<any> };
  }
) => Promise<string>;

type ThreadDocLike = {
  data(): Thread | undefined;
  ref: { update: (data: any) => Promise<any> };
};

/**
 * Returns the correct system prompt for the given thread/mode, generating and caching it on the thread doc if missing.
 * - active => uses thread.defaultSystemPrompt
 * - chat   => uses thread.debriefSystemPrompt
 *
 * If mode is not provided, it will infer from thread.currentConverationMode (defaults to "active").
 */
export async function getSystemPromptForThread(
  db: any,
  threadDoc: ThreadDocLike,
  generateSystemPrompt: GenerateSystemPrompt
): Promise<string> {
  const thread = threadDoc.data()!;

  if (thread?.currentConverationMode === "debrief") {
    if (thread.debriefSystemPrompt) return thread.debriefSystemPrompt;
    const systemPrompt = await generateSystemPrompt(db, threadDoc);
    await threadDoc.ref.update({ debriefSystemPrompt: systemPrompt });
    return systemPrompt;
  } else {
    if (thread.defaultSystemPrompt) return thread.defaultSystemPrompt;
    const systemPrompt = await generateSystemPrompt(db, threadDoc);
    await threadDoc.ref.update({ defaultSystemPrompt: systemPrompt });
    return systemPrompt;
  }
}
