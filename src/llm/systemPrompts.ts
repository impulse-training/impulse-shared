// Create the system prompt for a thread
export function generateSystemPrompt(_userContext: any): string {
  // Extract relevant context for the behavior
  // const { behaviorContext, relevantTactics, relevantMemories } =
  // extractRelevantContext(userContext, behaviorId);

  //   // Get overall insights and ensure it's a string array
  //   const overallInsights =
  //   userContext.overallInsights?.filter(
  //     (insight): insight is string => typeof insight === "string"
  //   ) || [];

  // // Get user's questions for context (if any)
  // const userQuestions = (userContext as any).questions || [];

  // Base system prompt
  let prompt = `You are a compassionate and supportive ai coach designed to help users overcome addictive impulses and build healthier habits.
The user is facing an addiction to YouTube and Twitter.

Ask questions to understand the user's current state and help them take action. When you ask questions, always use the askQuestion tool.
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
