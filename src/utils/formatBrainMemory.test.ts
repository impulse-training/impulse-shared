import { formatBrainMemoryForPrompt } from "./formatBrainMemory";
import type { BrainMemory, UserBrainMirror } from "../schemas/userContext";

const mem = (
  over: Partial<BrainMemory> & Pick<BrainMemory, "id" | "statement" | "category">,
): BrainMemory => ({ createdAt: "2026-08-01T00:00:00Z", ...over });

const mirror = (memories: BrainMemory[], summary = "You are working on X."): UserBrainMirror => ({
  summary,
  memories,
  syncedAt: new Date(0) as unknown as UserBrainMirror["syncedAt"],
});

describe("formatBrainMemoryForPrompt", () => {
  it("returns empty for nothing", () => {
    expect(formatBrainMemoryForPrompt(null)).toBe("");
    expect(formatBrainMemoryForPrompt(mirror([], ""))).toBe("");
  });

  it("groups by behavior, orders focus first, and renders categories in fixed order", () => {
    const out = formatBrainMemoryForPrompt(
      mirror([
        mem({ id: "1", statement: "General pattern.", category: "pattern" }),
        mem({ id: "2", statement: "Coffee trigger.", category: "trigger", behaviorId: "c", behaviorName: "Coffee" }),
        mem({ id: "3", statement: "Scroll works.", category: "what_works", behaviorId: "s", behaviorName: "Scrolling", createdAt: "2026-08-10T00:00:00Z" }),
        mem({ id: "4", statement: "Scroll trigger.", category: "trigger", behaviorId: "s", behaviorName: "Scrolling" }),
        mem({ id: "5", statement: "momentum keeps it going", category: "self_report", behaviorId: "s", behaviorName: "Scrolling", question: "What keeps it going?" }),
      ]),
      { behaviorOrder: ["c"] },
    );
    const coffeeIdx = out.indexOf("**Coffee:**");
    const scrollIdx = out.indexOf("**Scrolling:**");
    const generalIdx = out.indexOf("**In general:**");
    expect(coffeeIdx).toBeGreaterThan(-1);
    expect(coffeeIdx).toBeLessThan(scrollIdx);
    expect(scrollIdx).toBeLessThan(generalIdx);
    const scrollBlock = out.slice(scrollIdx, generalIdx);
    expect(scrollBlock.indexOf("Triggers:")).toBeLessThan(scrollBlock.indexOf("What works:"));
    expect(scrollBlock).toContain('Asked "What keeps it going?" → momentum keeps it going');
    expect(out).toContain("**Profile:**\nYou are working on X.");
  });

  it("caps per behavior while keeping every category represented", () => {
    const many: BrainMemory[] = [];
    for (let i = 0; i < 10; i++) {
      many.push(mem({ id: `p${i}`, statement: `Pattern ${i}.`, category: "pattern", behaviorId: "s", behaviorName: "S", createdAt: `2026-08-${10 + i}T00:00:00Z` }));
    }
    many.push(mem({ id: "w", statement: "Old what-works.", category: "what_works", behaviorId: "s", behaviorName: "S", createdAt: "2026-01-01T00:00:00Z" }));
    const out = formatBrainMemoryForPrompt(mirror(many, ""), { perBehaviorCap: 4 });
    expect(out).toContain("Old what-works.");
    expect((out.match(/^- /gm) ?? []).length).toBe(4);
  });

  it("drops behavior labels for ids outside behaviorIds and folds them into general", () => {
    const out = formatBrainMemoryForPrompt(
      mirror([mem({ id: "1", statement: "Archived thing.", category: "context", behaviorId: "gone", behaviorName: "Gone" })], ""),
      { behaviorIds: ["live"] },
    );
    expect(out).not.toContain("**Gone:**");
    expect(out).toContain("**In general:**");
    expect(out).toContain("Archived thing.");
  });
});
