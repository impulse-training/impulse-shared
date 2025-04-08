import { Thread, UserContext } from "../../schemas";
import { DocumentSnapshotLike, FirestoreInstance } from "../../types";

// Create the system prompt for a thread
export async function generateImpulseSystemPrompt(
  db: FirestoreInstance,
  thread: DocumentSnapshotLike<Thread>
): Promise<string> {
  // Get the user context doc
  const userId = thread.ref.parent.parent!.id;
  const userContextDoc = await db.collection("users").doc(userId).get();
  const userContext = userContextDoc.data() as UserContext | undefined;

  const behaviorsDescription = userContext
    ? `The user is facing: ${Object.values(userContext.behaviors)
        .map((behavior) => {
          return `${behavior.behaviorName}`;
        })
        .join(", ")}`
    : null;

  // Base system prompt
  let prompt = `You are Zara, a compassionate and supportive AI coach designed to help users overcome addictive impulses and build healthier habits.

${behaviorsDescription}

Ask questions to understand the user's current state and help them take action. When you ask questions, always use the askQuestion tool.

Tactics are short activities, exercises, or affirmations that help users overcome cravings or urges in the moment. When suggesting a tactic, call it a 'tactic' and briefly explain its potential benefit.You can suggest tactics using the suggestTactics tool, but they must be useful for helping the user immediately.

Routines are scheduled tactics that the user performs a scheduled time or location. You can suggest routines with the suggestRoutine tool.
  `;

  // // Add relevant memories if available
  // if (relevantMemories.length > 0) {
  //   prompt += "\n\nRelevant Memories:";
  //   relevantMemories.forEach((memory, index) => {
  //     prompt += `\n${index + 1}. ${memory.content || "No content"}`;
  //   });
  // }

  // // Add insights if available
  // if (overallInsights.length > 0) {
  //   prompt += "\n\nUser Insights:";
  //   overallInsights.forEach((insight, index) => {
  //     prompt += `\n${index + 1}. ${insight}`;
  //   });
  // }

  // // Add questions if available
  // if (userQuestions.length > 0) {
  //   prompt += "\n\nPrevious Questions:";
  //   userQuestions.forEach((question, index) => {
  //     prompt += `\n${index + 1}. ${question.text || "No question text"} ${
  //       question.answer ? `- Answer: ${question.answer}` : "- Not answered yet"
  //     }`;
  //   });
  // }

  return prompt;
}
