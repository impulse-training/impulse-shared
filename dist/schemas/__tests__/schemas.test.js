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
                benefits: ["Hydration"],
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
                benefits: ["Health"],
                drawbacks: [],
                activePlanId: "plan123",
                userId: "user123",
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const result = index_1.behaviorSchema.safeParse(validBehavior);
            expect(result.success).toBe(true);
        });
    });
    describe("Session Schema", () => {
        it("should validate a general session", () => {
            const validSession = {
                type: "general",
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
        it("should validate an impulse session", () => {
            const validSession = {
                type: "impulse",
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
                recapRequirementsMetAt: null,
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
