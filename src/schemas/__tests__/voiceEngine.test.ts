import {
  callLogEngine,
  resolveVoiceEngine,
  voiceEngineBucket,
  voiceEngineConfigSchema,
} from "../voiceEngine";

const config = (raw: unknown) => voiceEngineConfigSchema.parse(raw);

describe("resolveVoiceEngine", () => {
  it("falls back to livekit without a config", () => {
    expect(resolveVoiceEngine(undefined, { userId: "u1", kind: "impulse" })).toEqual({
      engine: "livekit",
      reason: "no-config",
    });
  });

  it("uses the default when nothing more specific matches", () => {
    expect(resolveVoiceEngine(config({ default: "elevenlabs" }), { userId: "u1", kind: "general" })).toEqual({
      engine: "elevenlabs",
      reason: "default",
    });
  });

  it("prefers the kind's engine over the default", () => {
    const c = config({ default: "livekit", byKind: { morningCheckIn: "elevenlabs" } });
    expect(resolveVoiceEngine(c, { userId: "u1", kind: "morningCheckIn" }).engine).toBe("elevenlabs");
    expect(resolveVoiceEngine(c, { userId: "u1", kind: "impulse" }).engine).toBe("livekit");
  });

  // A user override is per kind: Michael's morning can be on ElevenLabs while
  // his impulse calls stay on the engine that runs them. Overrides live on the
  // user's own doc, so the app can resolve its engine without a round trip.
  it("applies a user override only to its kind", () => {
    const c = config({ default: "livekit" });
    const userOverrides = { morningCheckIn: "elevenlabs" as const };
    expect(resolveVoiceEngine(c, { userId: "u1", kind: "morningCheckIn", userOverrides })).toEqual({
      engine: "elevenlabs",
      reason: "user-override",
    });
    expect(resolveVoiceEngine(c, { userId: "u1", kind: "impulse", userOverrides }).engine).toBe("livekit");
    expect(resolveVoiceEngine(c, { userId: "u2", kind: "morningCheckIn" }).engine).toBe("livekit");
  });

  it("applies a user override even without a config doc", () => {
    expect(
      resolveVoiceEngine(undefined, { userId: "u1", kind: "impulse", userOverrides: { impulse: "elevenlabs" } }),
    ).toEqual({ engine: "elevenlabs", reason: "user-override" });
  });

  it("puts a user override ahead of a split", () => {
    const c = config({
      default: "livekit",
      splits: { impulse: { engine: "elevenlabs", percent: 100 } },
    });
    expect(
      resolveVoiceEngine(c, { userId: "u1", kind: "impulse", userOverrides: { impulse: "livekit" } }).reason,
    ).toBe("user-override");
    expect(resolveVoiceEngine(c, { userId: "u2", kind: "impulse" })).toEqual({ engine: "elevenlabs", reason: "split" });
  });

  it("splits users by bucket, the rest falling through to the kind", () => {
    const c = config({
      default: "livekit",
      byKind: { impulse: "livekit" },
      splits: { impulse: { engine: "elevenlabs", percent: 50 } },
    });
    const users = Array.from({ length: 1000 }, (_, i) => `user${i}`);
    const results = users.map((userId) => resolveVoiceEngine(c, { userId, kind: "impulse" }));
    const inSplit = results.filter((r) => r.reason === "split").length;
    expect(inSplit).toBeGreaterThan(400);
    expect(inSplit).toBeLessThan(600);
    expect(results.filter((r) => r.reason !== "split").every((r) => r.reason === "kind" && r.engine === "livekit")).toBe(
      true,
    );
  });

  it("puts nobody in a 0% split and everybody in a 100% split", () => {
    const zero = config({ default: "livekit", splits: { general: { engine: "elevenlabs", percent: 0 } } });
    const all = config({ default: "livekit", splits: { general: { engine: "elevenlabs", percent: 100 } } });
    for (let i = 0; i < 100; i++) {
      expect(resolveVoiceEngine(zero, { userId: `u${i}`, kind: "general" }).engine).toBe("livekit");
      expect(resolveVoiceEngine(all, { userId: `u${i}`, kind: "general" }).engine).toBe("elevenlabs");
    }
  });
});

describe("voiceEngineBucket", () => {
  it("is stable and in range", () => {
    const b = voiceEngineBucket("impulse", "MzbhPTBFLwUqL1mYnKAL9GGxp3z2");
    expect(b).toBe(voiceEngineBucket("impulse", "MzbhPTBFLwUqL1mYnKAL9GGxp3z2"));
    expect(b).toBeGreaterThanOrEqual(0);
    expect(b).toBeLessThan(100);
  });
});

describe("voiceEngineConfigSchema", () => {
  // Readable by every signed-in user, so it must not list anyone.
  it("drops per-user overrides from the shared config", () => {
    expect(config({ default: "livekit", userOverrides: { u1: { impulse: "elevenlabs" } } })).not.toHaveProperty(
      "userOverrides",
    );
  });

  it("rejects an unknown engine", () => {
    expect(voiceEngineConfigSchema.safeParse({ default: "vapi" }).success).toBe(false);
  });

  it("rejects a split over 100%", () => {
    expect(
      voiceEngineConfigSchema.safeParse({ default: "livekit", splits: { impulse: { engine: "elevenlabs", percent: 101 } } })
        .success,
    ).toBe(false);
  });
});

describe("callLogEngine", () => {
  it("reads the stamped engine", () => {
    expect(callLogEngine({ engine: "elevenlabs" })).toBe("elevenlabs");
    expect(callLogEngine({ engine: "livekit", elevenlabsAgentId: "agent_1" })).toBe("livekit");
  });

  it("recognises calls from before the stamp by their vendor fields", () => {
    expect(callLogEngine({ elevenlabsAgentId: "agent_1" })).toBe("elevenlabs");
    expect(callLogEngine({})).toBe("livekit");
    expect(callLogEngine(undefined)).toBe("livekit");
  });
});
