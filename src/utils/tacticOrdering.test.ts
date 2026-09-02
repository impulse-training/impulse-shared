import {
  orderPlanTacticRefsLast,
  orderTerminalTacticsLast,
  tacticIsTerminal,
  terminalTacticsAreLast,
} from "./tacticOrdering";

describe("tacticIsTerminal", () => {
  it("is true only for device-restart completion", () => {
    expect(tacticIsTerminal({ completionTrigger: "device-restart" })).toBe(true);
    expect(tacticIsTerminal({})).toBe(false);
    expect(tacticIsTerminal(null)).toBe(false);
    expect(tacticIsTerminal(undefined)).toBe(false);
  });
});

describe("orderTerminalTacticsLast", () => {
  const isTerminal = (s: string) => s.startsWith("phone");

  it("moves terminal items to the end, keeping relative order", () => {
    expect(
      orderTerminalTacticsLast(["ground", "phone", "talk"], isTerminal),
    ).toEqual(["ground", "talk", "phone"]);
    expect(
      orderTerminalTacticsLast(["phone-a", "walk", "phone-b", "talk"], isTerminal),
    ).toEqual(["walk", "talk", "phone-a", "phone-b"]);
  });

  it("returns a copy when nothing is terminal or already last", () => {
    const input = ["a", "b"];
    const out = orderTerminalTacticsLast(input, isTerminal);
    expect(out).toEqual(input);
    expect(out).not.toBe(input);
    expect(orderTerminalTacticsLast(["a", "phone"], isTerminal)).toEqual([
      "a",
      "phone",
    ]);
  });
});

describe("terminalTacticsAreLast", () => {
  const isTerminal = (s: string) => s === "phone";
  it("detects a terminal tactic followed by a guided one", () => {
    expect(terminalTacticsAreLast(["a", "phone", "b"], isTerminal)).toBe(false);
    expect(terminalTacticsAreLast(["a", "b", "phone"], isTerminal)).toBe(true);
    expect(terminalTacticsAreLast(["phone"], isTerminal)).toBe(true);
    expect(terminalTacticsAreLast([], isTerminal)).toBe(true);
  });
});

describe("orderPlanTacticRefsLast", () => {
  const tacticsByPath = {
    "tactics/turn-off-phone": { completionTrigger: "device-restart" },
    "tactics/ground": {},
  };

  it("orders by the plan's tacticsByPath cache", () => {
    const refs = [
      { path: "tactics/turn-off-phone" },
      { path: "tactics/ground" },
      { path: "tactics/unknown" },
    ];
    expect(orderPlanTacticRefsLast(refs, tacticsByPath).map((r) => r.path)).toEqual([
      "tactics/ground",
      "tactics/unknown",
      "tactics/turn-off-phone",
    ]);
  });

  it("accepts string paths and passes through without a cache", () => {
    expect(
      orderPlanTacticRefsLast(["tactics/turn-off-phone", "tactics/ground"], tacticsByPath),
    ).toEqual(["tactics/ground", "tactics/turn-off-phone"]);
    expect(
      orderPlanTacticRefsLast(["tactics/turn-off-phone", "tactics/ground"], undefined),
    ).toEqual(["tactics/turn-off-phone", "tactics/ground"]);
  });
});
