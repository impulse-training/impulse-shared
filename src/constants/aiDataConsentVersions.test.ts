import {
  AI_DATA_CONSENT_ELEVENLABS_MIN_VERSION,
  AI_DATA_CONSENT_MIN_VERSION,
  AI_DATA_CONSENT_PROVIDERS,
  AI_DATA_CONSENT_VERSION,
  AI_DATA_CONSENT_AGREE_LABEL,
  AI_DATA_CONSENT_INTRO,
  hasAiDataConsent,
  isAiDataConsentCurrent,
} from "./aiDataConsent";

describe("consent versions", () => {
  // Version 2 names Anthropic and ElevenLabs. Consent to version 1 (OpenAI
  // only) still covers what it described, so the coach keeps working for
  // everyone while they are asked again.
  it("keeps an earlier consent valid for processing", () => {
    expect(hasAiDataConsent({ version: AI_DATA_CONSENT_MIN_VERSION })).toBe(true);
    expect(hasAiDataConsent({ version: AI_DATA_CONSENT_VERSION })).toBe(true);
    expect(hasAiDataConsent({ version: AI_DATA_CONSENT_MIN_VERSION - 1 })).toBe(false);
    expect(hasAiDataConsent(null)).toBe(false);
  });

  it("asks again until the user has agreed to the current disclosure", () => {
    expect(isAiDataConsentCurrent({ version: AI_DATA_CONSENT_MIN_VERSION })).toBe(false);
    expect(isAiDataConsentCurrent({ version: AI_DATA_CONSENT_VERSION })).toBe(true);
    expect(isAiDataConsentCurrent(undefined)).toBe(false);
  });

  it("requires the disclosure that names ElevenLabs before an ElevenLabs call", () => {
    expect(AI_DATA_CONSENT_ELEVENLABS_MIN_VERSION).toBe(AI_DATA_CONSENT_VERSION);
    expect(AI_DATA_CONSENT_ELEVENLABS_MIN_VERSION).toBeGreaterThan(AI_DATA_CONSENT_MIN_VERSION);
  });

  it("names every provider in the disclosure and the agreement", () => {
    for (const provider of AI_DATA_CONSENT_PROVIDERS) {
      expect(AI_DATA_CONSENT_INTRO).toContain(provider);
      expect(AI_DATA_CONSENT_AGREE_LABEL).toContain(provider);
    }
    expect(AI_DATA_CONSENT_PROVIDERS).toEqual(expect.arrayContaining(["OpenAI", "Anthropic", "ElevenLabs"]));
  });
});
