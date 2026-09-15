import { AI_DATA_CONSENT_PROVIDERS } from "./aiDataConsent";
import { PRIVACY_POLICY_SECTIONS } from "./privacyPolicy";

describe("privacy policy", () => {
  // The consent screen and the policy must name the same processors.
  it("names every AI provider the consent screen names", () => {
    const text = PRIVACY_POLICY_SECTIONS.flatMap((s) => s.paragraphs).join("\n");
    for (const provider of AI_DATA_CONSENT_PROVIDERS) {
      expect(text).toContain(provider === "ElevenLabs" ? "Eleven Labs Inc." : provider);
    }
  });
});
