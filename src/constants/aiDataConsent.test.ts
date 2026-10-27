import { AI_DATA_CONSENT_REQUIRED_MESSAGE, mayProcessWithAi } from "./aiDataConsent";

describe("mayProcessWithAi", () => {
  it("allows a user who has consented", () => {
    expect(mayProcessWithAi({ aiDataConsent: { version: 1 } })).toBe(true);
  });

  it("refuses a current build that has not consented", () => {
    // The whole point: declining genuinely turns the coach off.
    expect(mayProcessWithAi({ device: { nativeVersion: "0.6" } })).toBe(false);
  });

  // SSB ZLtWYy9f (Michael, 2026-10-27): no consent means no AI processing,
  // whatever the build. The app gates on hasAiDataConsent alone, so the old
  // grandfathering let the server answer users the app showed as coach-off.
  it("refuses a build that predates the consent screen", () => {
    expect(mayProcessWithAi({ device: { nativeVersion: "0.3" } })).toBe(false);
  });

  it("refuses an account with no recorded native version", () => {
    expect(mayProcessWithAi({})).toBe(false);
    expect(mayProcessWithAi(undefined)).toBe(false);
    expect(mayProcessWithAi(null)).toBe(false);
  });

  it("refuses an unparseable version", () => {
    expect(mayProcessWithAi({ device: { nativeVersion: "nonsense" } })).toBe(false);
  });

  it("refuses a consent version older than the minimum", () => {
    expect(
      mayProcessWithAi({
        aiDataConsent: { version: 0 },
        device: { nativeVersion: "0.6" },
      }),
    ).toBe(false);
  });
});

describe("AI_DATA_CONSENT_REQUIRED_MESSAGE", () => {
  // SSB YnqBkUqC: it pointed to "Privacy and data handling", which is not a
  // Settings row; the row is PRIVACY > "AI and your data".
  it("names the Settings row that actually exists", () => {
    expect(AI_DATA_CONSENT_REQUIRED_MESSAGE).toContain("AI and your data");
    expect(AI_DATA_CONSENT_REQUIRED_MESSAGE).not.toContain("Privacy and data handling");
  });
});
