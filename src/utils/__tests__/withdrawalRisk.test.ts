import { behaviorTemplateSchema } from "../../schemas/behaviorTemplate";
import {
  WITHDRAWAL_CAUTION,
  hasWithdrawalRisk,
  nameSuggestsWithdrawalRisk,
  withdrawalSafetyNote,
} from "../withdrawalRisk";

describe("withdrawalRisk", () => {
  it("is a flag a behavior template can carry", () => {
    const parsed = behaviorTemplateSchema.parse({
      name: "Alcohol",
      trackingType: "counter",
      trackingUnit: "drinks",
      withdrawalRisk: true,
    });
    expect(parsed.withdrawalRisk).toBe(true);
  });

  it("is true only when a behavior carries the flag", () => {
    expect(hasWithdrawalRisk([{ withdrawalRisk: true }, {}])).toBe(true);
    expect(hasWithdrawalRisk([{}, { withdrawalRisk: false }])).toBe(false);
    expect(hasWithdrawalRisk([])).toBe(false);
  });

  it("writes no note when no behavior carries the flag", () => {
    expect(withdrawalSafetyNote([])).toBe("");
  });

  it("names the behaviors, steps down, and sends stopping to a doctor", () => {
    const note = withdrawalSafetyNote(["Alcohol"]);
    expect(note).toContain("Alcohol");
    expect(note).toMatch(/doctor/i);
    expect(note).toMatch(/gradual/i);
    expect(note).toMatch(/withdrawal/i);
  });

  it("keeps each step small and asks how their body feels the day after one", () => {
    const note = withdrawalSafetyNote(["Beer"]);
    expect(note).toMatch(/one or two fewer/);
    expect(note).toMatch(/bigger cut in one day .* is one a doctor guides/);
    expect(note).toMatch(/how their body feels/);
  });

  it("has a short caution for the screen, with no em dash", () => {
    expect(WITHDRAWAL_CAUTION).toMatch(/doctor/i);
    expect(WITHDRAWAL_CAUTION).not.toContain("—");
  });

  it("recognises a withdrawal-risk substance from what the behavior is called", () => {
    for (const name of ["Alcohol", "Drinking", "Beer", "wine at night", "Day drinking", "Xanax", "Benzos", "Opioids", "Oxycodone"]) {
      expect([name, nameSuggestsWithdrawalRisk(name)]).toEqual([name, true]);
    }
    for (const name of ["Coffee", "Vaping", "Energy drinks", "Soft drinks", "Cannabis", "Smoking cigarettes", "Doom scrolling", ""]) {
      expect([name, nameSuggestsWithdrawalRisk(name)]).toEqual([name, false]);
    }
  });
});
