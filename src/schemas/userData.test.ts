import { getActiveClosingReflectionPrompt } from "./userData";

describe("getActiveClosingReflectionPrompt", () => {
  const withConfig = (closingReflection: unknown) =>
    ({ recap: { closingReflection } }) as Parameters<
      typeof getActiveClosingReflectionPrompt
    >[0];

  it("returns the trimmed prompt when enabled and non-empty", () => {
    expect(
      getActiveClosingReflectionPrompt(
        withConfig({ enabled: true, prompt: "  What went well today?  " }),
      ),
    ).toBe("What went well today?");
  });

  it("is off when disabled, even with a prompt written", () => {
    expect(
      getActiveClosingReflectionPrompt(
        withConfig({ enabled: false, prompt: "What went well today?" }),
      ),
    ).toBeNull();
  });

  // Enabled-but-blank is reachable from the UI (toggle on, clear the text), and
  // an empty frame would leave the assistant improvising its own question —
  // exactly what this feature exists to avoid.
  it("is off when enabled with no prompt", () => {
    expect(
      getActiveClosingReflectionPrompt(withConfig({ enabled: true })),
    ).toBeNull();
  });

  it("is off when enabled with a whitespace-only prompt", () => {
    expect(
      getActiveClosingReflectionPrompt(
        withConfig({ enabled: true, prompt: "   " }),
      ),
    ).toBeNull();
  });

  it("is off for users with no recap config at all", () => {
    expect(getActiveClosingReflectionPrompt(undefined)).toBeNull();
    expect(getActiveClosingReflectionPrompt({})).toBeNull();
    expect(getActiveClosingReflectionPrompt({ recap: {} })).toBeNull();
  });
});
