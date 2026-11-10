import { debriefQuestionSchema, debriefQuestionAsksInTheMoment } from "../debriefQuestion";

const base = {
  question: "What led to it?",
  behaviorIds: ["picking"],
  answerSpec: { type: "text" },
};

describe("debriefQuestion askWhen", () => {
  it("keeps a question pinned to a day worse than usual", () => {
    expect(debriefQuestionSchema.parse({ ...base, askWhen: "aboveUsual" }).askWhen).toBe("aboveUsual");
  });

  it("leaves askWhen absent on an ordinary question", () => {
    expect(debriefQuestionSchema.parse(base).askWhen).toBeUndefined();
  });

  it("rejects a trigger it does not know", () => {
    expect(() => debriefQuestionSchema.parse({ ...base, askWhen: "sometimes" })).toThrow();
  });

  // An aboveUsual question is asked in the recap of a day worse than usual,
  // never after a log in the moment.
  it("asks in the moment only when not pinned to a worse-than-usual day", () => {
    expect(debriefQuestionAsksInTheMoment(debriefQuestionSchema.parse(base))).toBe(true);
    expect(debriefQuestionAsksInTheMoment(debriefQuestionSchema.parse({ ...base, askWhen: "aboveUsual" }))).toBe(false);
  });
});
