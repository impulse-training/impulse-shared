import { getGptPayload } from "./getGptPayload";
import { Log } from "../schemas/log";

const ts = (seconds: number) => ({ seconds, nanoseconds: 0 }) as any;

const callLog = (data: Record<string, unknown>): Log =>
  ({
    type: "call",
    isDisplayable: true,
    data,
  }) as unknown as Log;

describe("getGptPayload — call logs", () => {
  it("returns nothing for a call that hasn't ended", () => {
    const log = callLog({ agentConnectedAt: ts(100) });
    expect(getGptPayload(log, false)).toEqual([]);
  });

  it("uses the summary when it has landed", () => {
    const log = callLog({
      endedAt: ts(200),
      summary: "You talked about the gym.",
    });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>Previous call summary: You talked about the gym.</SYSTEM>",
    );
  });

  it("falls back to the full transcript when the summary hasn't landed", () => {
    const log = callLog({
      endedAt: ts(200),
      transcriptItems: [
        { role: "assistant", text: "What's going on?", ts: ts(150), type: "final" },
        { role: "user", text: "Feeling an urge to scroll.", ts: ts(160), type: "final" },
        { role: "user", text: "Feeling an ur", ts: ts(155), type: "partial" },
        { role: "assistant", text: "   ", ts: ts(165), type: "final" },
      ],
    });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>The user had a voice call with the assistant. A summary isn't available yet — full transcript:\n" +
        "Assistant: What's going on?\n" +
        "User: Feeling an urge to scroll.</SYSTEM>",
    );
  });

  it("prefers the summary over a hydrated transcript", () => {
    const log = callLog({
      endedAt: ts(200),
      summary: "Short recap.",
      transcriptItems: [
        { role: "user", text: "Hello", ts: ts(150), type: "final" },
      ],
    });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>Previous call summary: Short recap.</SYSTEM>",
    );
  });

  it("keeps the generic line when there's no summary and no transcript", () => {
    const log = callLog({ endedAt: ts(200) });
    const [message] = getGptPayload(log, false);
    expect(message.content).toBe(
      "<SYSTEM>User had a previous call with the assistant</SYSTEM>",
    );
  });
});
