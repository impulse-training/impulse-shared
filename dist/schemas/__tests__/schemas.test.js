"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("Schema Validation", () => {
    describe("Behavior Schema", () => {
        it("should validate a counter behavior", () => {
            const validBehavior = {
                name: "Water",
                trackingType: "counter",
                trackingUnit: "glasses",
                description: "Drinking water",
                benefits: [{ text: "Hydration", need: "pleasure" }],
                drawbacks: [],
                activePlanId: "plan123",
                userId: "user123",
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const result = index_1.behaviorSchema.safeParse(validBehavior);
            expect(result.success).toBe(true);
        });
        it("should validate a timer behavior", () => {
            const validBehavior = {
                name: "Exercise",
                trackingType: "timer",
                description: "Daily exercise",
                benefits: [{ text: "Health" }],
                drawbacks: [],
                activePlanId: "plan123",
                userId: "user123",
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const result = index_1.behaviorSchema.safeParse(validBehavior);
            expect(result.success).toBe(true);
        });
        it("should normalize legacy string benefits on parse", () => {
            const legacyBehavior = {
                name: "Scrolling",
                trackingType: "timer",
                description: "Late night scrolling",
                benefits: ["Winding down", { text: "Escape", need: "escape" }],
                drawbacks: ["Staying up late"],
                userId: "user123",
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const result = index_1.behaviorSchema.safeParse(legacyBehavior);
            expect(result.success).toBe(true);
            if (result.success) {
                expect(result.data.benefits).toEqual([
                    { text: "Winding down" },
                    { text: "Escape", need: "escape" },
                ]);
            }
        });
        it("should reject an unknown benefit need", () => {
            const invalidBehavior = {
                name: "Scrolling",
                trackingType: "timer",
                description: "Late night scrolling",
                benefits: [{ text: "Winding down", need: "vibes" }],
                drawbacks: [],
                userId: "user123",
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            expect(index_1.behaviorSchema.safeParse(invalidBehavior).success).toBe(false);
        });
    });
    describe("Behavior benefits helpers", () => {
        it("normalizeBehaviorBenefits handles legacy, structured, and junk input", () => {
            expect((0, index_1.normalizeBehaviorBenefits)(undefined)).toEqual([]);
            expect((0, index_1.normalizeBehaviorBenefits)([
                "  Winding down  ",
                "",
                { text: "Escape", need: "escape" },
                { text: "Old entry", need: "not-a-need" },
                { need: "control" },
                42,
            ])).toEqual([
                { text: "Winding down" },
                { text: "Escape", need: "escape" },
                { text: "Old entry" },
            ]);
        });
        it("formatBenefitsForPrompt renders gives/costs lines", () => {
            expect((0, index_1.formatBenefitsForPrompt)([{ text: "helps me switch off", need: "relaxation" }, "a treat"], ["staying up past 2am"])).toEqual([
                'What it gives them: relaxation: "helps me switch off"; "a treat"',
                "What it costs them: staying up past 2am",
            ]);
            expect((0, index_1.formatBenefitsForPrompt)([], [])).toEqual([]);
            expect((0, index_1.formatBenefitsForPrompt)([{ text: "fills time", need: "boredom_relief" }], undefined)).toEqual(['What it gives them: boredom relief: "fills time"']);
        });
    });
    describe("Session Schema", () => {
        it("should validate a general session", () => {
            const validSession = {
                type: "general",
                title: "",
                date: new Date(),
                userId: "user123",
                dateString: "2025-01-01",
                mode: "text",
                sharedWithUserIds: [],
                sharedWithSupportGroups: [],
                emojiId: null,
            };
            const result = index_1.sessionSchema.safeParse(validSession);
            expect(result.success).toBe(true);
        });
        it("round-trips the chats-list fields through safeParse", () => {
            const session = {
                type: "general",
                title: "",
                date: new Date(),
                userId: "user123",
                dateString: "2025-01-01",
                mode: "text",
                sharedWithUserIds: [],
                sharedWithSupportGroups: [],
                emojiId: null,
                lastMessageAt: new Date(),
                lastMessagePreview: "sounds like it's how you switch off",
                hiddenFromHomeAt: new Date(),
            };
            const result = index_1.sessionSchema.safeParse(session);
            expect(result.success).toBe(true);
            if (result.success) {
                // Declared fields must survive a parse-and-write-back cycle — an
                // undeclared field would be silently stripped here.
                expect(result.data.lastMessagePreview).toBe(session.lastMessagePreview);
                expect(result.data.lastMessageAt).toBeDefined();
                expect(result.data.hiddenFromHomeAt).toBeDefined();
            }
        });
        it("should validate an impulse session", () => {
            const validSession = {
                type: "impulse",
                title: "",
                date: new Date(),
                userId: "user123",
                dateString: "2025-01-01",
                mode: "text",
                sharedWithUserIds: [],
                sharedWithSupportGroups: [],
                behaviorDocs: [],
                emojiId: null,
                debriefFinishedAt: null,
            };
            const result = index_1.sessionSchema.safeParse(validSession);
            expect(result.success).toBe(true);
        });
    });
    describe("DaySummary Schema", () => {
        it("should validate a day summary", () => {
            const validDaySummary = {
                userId: "user123",
                impulseSessionOutcomesById: {},
                behaviorDataTotalByBehaviorId: {},
                dayTotalsConfirmedAt: null,
                summaryText: null,
                supportGroupSummariesById: {},
                sharedWithUserIds: [],
                goalComparisonByBehaviorId: {},
            };
            const result = index_1.daySummarySchema.safeParse(validDaySummary);
            expect(result.success).toBe(true);
        });
    });
});
