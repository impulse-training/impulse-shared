import { mayProcessWithAi } from "./aiDataConsent";

describe("mayProcessWithAi", () => {
  it("allows a user who has consented", () => {
    expect(mayProcessWithAi({ aiDataConsent: { version: 1 } })).toBe(true);
  });

  it("refuses a current build that has not consented", () => {
    // The whole point: declining genuinely turns the coach off.
    expect(mayProcessWithAi({ device: { nativeVersion: "0.6" } })).toBe(false);
  });

  it("refuses the exact version that first asked", () => {
    expect(mayProcessWithAi({ device: { nativeVersion: "0.4" } })).toBe(false);
  });

  it("grandfathers a build too old to ask", () => {
    // Refusing these would break the coach for everyone already installed
    // rather than protect anyone — they were never given the choice.
    expect(mayProcessWithAi({ device: { nativeVersion: "0.3" } })).toBe(true);
  });

  it("grandfathers an account that has never booted on hardware", () => {
    expect(mayProcessWithAi({})).toBe(true);
    expect(mayProcessWithAi(undefined)).toBe(true);
  });

  it("grandfathers an unparseable version rather than guessing", () => {
    expect(mayProcessWithAi({ device: { nativeVersion: "nonsense" } })).toBe(true);
  });

  it("ignores the build suffix when comparing", () => {
    expect(mayProcessWithAi({ device: { nativeVersion: "0.6:abc123" } })).toBe(false);
    expect(mayProcessWithAi({ device: { nativeVersion: "0.3:abc123" } })).toBe(true);
  });

  it("refuses a consent version older than the current one", () => {
    expect(
      mayProcessWithAi({
        aiDataConsent: { version: 0 },
        device: { nativeVersion: "0.6" },
      }),
    ).toBe(false);
  });
});
