import { CHANGE_STAGE_OPTIONS, changeStageSoundsLike } from "./changeStage";
import { proposeChangeStageTaskSchema } from "../schemas/task";

describe("changeStageSoundsLike", () => {
  it("has a phrase for every stage, naming the behavior", () => {
    for (const { value } of CHANGE_STAGE_OPTIONS) {
      expect(changeStageSoundsLike(value, "Vaping")).toContain("Vaping");
    }
  });
  it("reads as second person", () => {
    expect(changeStageSoundsLike("preparation", "Vaping")).toBe("you're getting ready to change Vaping");
  });
});

describe("proposeChangeStageTaskSchema", () => {
  const base = {
    type: "propose_change_stage",
    userId: "u",
    behaviorId: "b",
    toStage: "preparation",
    streakDays: 0,
    status: "open",
    title: "t",
    instructions: "i",
    category: "deterministic",
    createdAt: { seconds: 0, nanoseconds: 0 },
    updatedAt: { seconds: 0, nanoseconds: 0 },
  };
  it("accepts a proposal from the user's words", () => {
    const r = proposeChangeStageTaskSchema.safeParse({ ...base, said: { quote: "i wanna stop", sessionId: "s" } });
    expect(r.success).toBe(true);
  });
  it("rejects an empty quote", () => {
    const r = proposeChangeStageTaskSchema.safeParse({ ...base, said: { quote: "", sessionId: "s" } });
    expect(r.success).toBe(false);
  });
});
