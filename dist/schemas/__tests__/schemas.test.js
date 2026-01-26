"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("Schema Validation", () => {
    describe("Question Schema", () => {
        it("should validate a text question", () => {
            const validQuestion = {
                responseType: "text",
                text: "How are you feeling?",
                scope: "impulse",
            };
            const result = index_1.questionSchema.safeParse(validQuestion);
            expect(result.success).toBe(true);
        });
        it("should validate a slider1To10 question", () => {
            const validQuestion = {
                responseType: "slider1To10",
                text: "Rate your urge",
                scope: "impulse",
                sliderConfig: {
                    minLabel: "Low",
                    maxLabel: "High",
                },
            };
            const result = index_1.questionSchema.safeParse(validQuestion);
            expect(result.success).toBe(true);
        });
        it("should reject invalid question type", () => {
            const invalidQuestion = {
                responseType: "invalid",
                text: "Test",
            };
            const result = index_1.questionSchema.safeParse(invalidQuestion);
            expect(result.success).toBe(false);
        });
    });
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
    describe("Thread Schema", () => {
        it("should validate a general thread", () => {
            const validThread = {
                type: "general",
                date: new Date(),
                userId: "user123",
                dateString: "2025-01-01",
                mode: "text",
                sharedWithUserIds: [],
                sharedWithSupportGroups: [],
                emojiId: null,
                archiveAfter: new Date(),
            };
            const result = index_1.threadSchema.safeParse(validThread);
            expect(result.success).toBe(true);
        });
        it("should validate an impulse thread", () => {
            const validThread = {
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
                archiveAfter: new Date(),
            };
            const result = index_1.threadSchema.safeParse(validThread);
            expect(result.success).toBe(true);
        });
    });
    describe("DaySummary Schema", () => {
        it("should validate a day summary", () => {
            const validDaySummary = {
                userId: "user123",
                impulseThreadOutcomesById: {},
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
