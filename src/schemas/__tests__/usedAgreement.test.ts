import { behaviorSchema, triggerSchema } from "../index";

const used = {
  tacticId: "t1",
  tacticRefPath: "users/u1/tactics/t1",
  tacticTitle: "Vape goes to the kitchen",
  agreedAt: new Date("2026-10-27T20:00:00Z"),
  usedAt: new Date("2026-10-28T09:15:00Z"),
};

describe("lastUsedAgreement", () => {
  it("is kept on a behavior once its agreement is used up", () => {
    const parsed = behaviorSchema.parse({
      name: "Vaping",
      trackingType: "counter",
      trackingUnit: "times",
      description: "",
      benefits: [],
      drawbacks: [],
      userId: "u1",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastUsedAgreement: used,
    });
    expect(parsed.lastUsedAgreement?.tacticTitle).toBe("Vape goes to the kitchen");
    expect(parsed.lastUsedAgreement?.usedAt).toEqual(used.usedAt);
  });

  it("is kept on a trigger once its agreement is used up", () => {
    const parsed = triggerSchema.parse({
      text: "I notice the vape in my hand, anywhere",
      tags: {},
      lastUsedAgreement: used,
    });
    expect(parsed.lastUsedAgreement?.tacticId).toBe("t1");
  });

  it("needs usedAt", () => {
    const { usedAt: _usedAt, ...noUsedAt } = used;
    expect(
      triggerSchema.safeParse({ text: "x", tags: {}, lastUsedAgreement: { ...noUsedAt, usedAt: 5 } })
        .success,
    ).toBe(false);
  });
});
