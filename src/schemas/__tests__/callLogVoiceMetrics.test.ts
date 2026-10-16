import { callLogSchema } from "../index";

const base = {
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "user123",
  timestamp: new Date(),
  dateString: "2026-10-14",
  sessionId: "2026-10-14",
  type: "call" as const,
  isDisplayable: true as const,
};

describe("callLogSchema: ElevenLabs call metadata", () => {
  it("keeps voiceMetrics and provider-billed usage", () => {
    const data = {
      engine: "elevenlabs" as const,
      elevenlabsConversationId: "conv_1",
      voiceMetrics: {
        models: ["claude-sonnet-5-5"],
        agentVersionId: "agtvrsn_1",
        durationSecs: 135,
        terminationReason: "Client disconnected: 1000",
        respondedTurns: 8,
        responseLatencyMedianMs: 3053,
        responseLatencyMaxMs: 8423,
        llmTurns: 13,
        llmTtfbMedianMs: 954,
        llmTtfbMaxMs: 3452,
        toolCalls: 5,
        toolLatencyMedianMs: 844,
        toolLatencyMaxMs: 1311,
      },
      usage: {
        models: [
          {
            provider: "elevenlabs",
            model: "claude-sonnet-5-5",
            inputTextTokens: 178998,
            inputCachedTokens: 134184,
            inputCachedTextTokens: 134184,
            inputCacheWriteTextTokens: 22364,
            outputTextTokens: 1617,
          },
        ],
        costUsd: 0.32193449,
        credits: 1777,
        ratesVersion: "elevenlabs-charging",
      },
    };
    const result = callLogSchema.safeParse({ ...base, data });
    expect(result.success).toBe(true);
    expect(result.success && result.data.data).toEqual(data);
  });

  it("accepts a call log with none of it (every field is optional)", () => {
    expect(callLogSchema.safeParse({ ...base, data: { voiceMetrics: {} } }).success).toBe(true);
    expect(callLogSchema.safeParse({ ...base, data: {} }).success).toBe(true);
  });

  it("rejects a malformed latency", () => {
    expect(
      callLogSchema.safeParse({ ...base, data: { voiceMetrics: { responseLatencyMedianMs: "slow" } } }).success,
    ).toBe(false);
  });
});
