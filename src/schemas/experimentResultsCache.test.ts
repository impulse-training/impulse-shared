import { metricConfidenceFromReadings } from "./experimentResultsCache";

describe("metricConfidenceFromReadings", () => {
  it("is low when there is no baseline, regardless of readings", () => {
    expect(
      metricConfidenceFromReadings({ hasBaseline: false, postMilestoneReadings: 0 }),
    ).toBe("low");
    expect(
      metricConfidenceFromReadings({ hasBaseline: false, postMilestoneReadings: 3 }),
    ).toBe("low");
  });

  it("is low ('Building') with a baseline but no post-milestone readings", () => {
    expect(
      metricConfidenceFromReadings({ hasBaseline: true, postMilestoneReadings: 0 }),
    ).toBe("low");
  });

  it("is moderate ('Some signal') with a baseline and one reading", () => {
    expect(
      metricConfidenceFromReadings({ hasBaseline: true, postMilestoneReadings: 1 }),
    ).toBe("moderate");
  });

  it("is high ('Strong signal') once the change holds across a higher rung", () => {
    expect(
      metricConfidenceFromReadings({ hasBaseline: true, postMilestoneReadings: 2 }),
    ).toBe("high");
    expect(
      metricConfidenceFromReadings({ hasBaseline: true, postMilestoneReadings: 5 }),
    ).toBe("high");
  });
});
