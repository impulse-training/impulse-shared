import { ALL_VOICE_OPENERS, voiceOpenerLine } from "./voiceOpeners";

/**
 * The id is a contract between three processes that deploy independently. A
 * device on last week's bundle can send an id this agent has never heard of,
 * and the agent's behaviour in that case decides whether the caller gets
 * greeted twice, not at all, or correctly.
 */
describe("voiceOpenerLine", () => {
  it("resolves every id in the catalogue", () => {
    for (const opener of ALL_VOICE_OPENERS) {
      expect(voiceOpenerLine(opener.id)).toBe(opener.line);
    }
  });

  it("returns null for an id it does not know", () => {
    // A device on a newer bundle than the agent. Null means "greet them
    // yourself" — the agent must never claim to have said a line it cannot
    // look up.
    expect(voiceOpenerLine("cold-99")).toBeNull();
  });

  it("returns null when no opener was played", () => {
    expect(voiceOpenerLine(undefined)).toBeNull();
    expect(voiceOpenerLine(null)).toBeNull();
    expect(voiceOpenerLine("")).toBeNull();
  });

  it("has no duplicate ids", () => {
    // Two openers sharing an id would make the agent's context depend on which
    // one the device happened to play.
    const ids = ALL_VOICE_OPENERS.map((o) => o.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
