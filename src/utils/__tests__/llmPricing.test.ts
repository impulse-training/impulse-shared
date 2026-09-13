import { costUsdFor, realtimeCostUsdFor, priceForModel, realtimePriceForModel } from "../llmPricing";

describe("chat pricing", () => {
  it("bills cached input at the cached rate and does not double-count it", () => {
    // gpt-5.4: $2.50 fresh, $0.25 cached, $15 out.
    const cost = costUsdFor({
      model: "gpt-5.4",
      inputTokens: 1_000_000,
      cachedInputTokens: 600_000,
      outputTokens: 100_000,
    });
    // fresh 400k*2.50 + cached 600k*0.25 + out 100k*15, per 1M
    expect(cost).toBeCloseTo(1 + 0.15 + 1.5, 6);
  });

  it("prices a dated snapshot like its base model", () => {
    expect(priceForModel("gpt-5.4-2026-03-05")).toBe(priceForModel("gpt-5.4"));
  });

  it("returns null rather than zero for an unknown model", () => {
    expect(costUsdFor({ model: "mystery", inputTokens: 9e6, cachedInputTokens: 0, outputTokens: 0 })).toBeNull();
  });

  // Calibration: OpenAI billed $13.97 on 2026-09-12 against 12,062,724 input
  // (4,766,017 uncached) and 210,317 output, dominated by gpt-5.4. A misread
  // rate or a cached/fresh mix-up shows up here as a number unlike the bill.
  it("lands near a real invoice", () => {
    const input = 12_062_724;
    const cost = costUsdFor({
      model: "gpt-5.4",
      inputTokens: input,
      cachedInputTokens: input - 4_766_017,
      outputTokens: 210_317,
    })!;
    expect(cost).toBeGreaterThan(10);
    expect(cost).toBeLessThan(20);
  });
});

describe("realtime pricing", () => {
  const model = "gpt-realtime-2.1";

  it("prices audio and text at their own rates, not a blend", () => {
    // 1M fresh audio in ($32) + 1M text in ($4), no cache, no output.
    const cost = realtimeCostUsdFor({
      model,
      input: { audioTokens: 1_000_000, textTokens: 1_000_000, cachedTokens: 0 },
      output: { audioTokens: 0, textTokens: 0 },
    });
    expect(cost).toBeCloseTo(36, 6);
  });

  // The difference that decides whether a long call is affordable: cached
  // audio is $0.40/1M against $32/1M fresh.
  it("bills cached audio at the cached rate", () => {
    const cost = realtimeCostUsdFor({
      model,
      input: { audioTokens: 1_000_000, textTokens: 0, cachedTokens: 900_000 },
      output: { audioTokens: 0, textTokens: 0 },
    });
    // fresh 100k*32 + cached 900k*0.40, per 1M
    expect(cost).toBeCloseTo(3.2 + 0.36, 6);
  });

  it("uses the modality split when the response gives one", () => {
    const cost = realtimeCostUsdFor({
      model,
      input: {
        audioTokens: 1_000_000,
        textTokens: 1_000_000,
        cachedTokens: 1_000_000,
        cachedTokensDetails: { audioTokens: 500_000, textTokens: 500_000, imageTokens: 0 },
      },
      output: { audioTokens: 0, textTokens: 0 },
    });
    // audio: 500k*32 + 500k*0.40 ; text: 500k*4 + 500k*0.40
    expect(cost).toBeCloseTo(16 + 0.2 + 2 + 0.2, 6);
  });

  it("bills audio output at the audio output rate", () => {
    const cost = realtimeCostUsdFor({
      model,
      input: { audioTokens: 0, textTokens: 0, cachedTokens: 0 },
      output: { audioTokens: 1_000_000, textTokens: 1_000_000 },
    });
    expect(cost).toBeCloseTo(64 + 24, 6);
  });

  it("does not price a realtime model it has never heard of", () => {
    expect(realtimePriceForModel("gpt-realtime-9")).toBeNull();
  });
});
