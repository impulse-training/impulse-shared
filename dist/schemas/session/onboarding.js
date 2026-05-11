"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onboardingSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.onboardingSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("onboarding"),
    notificationsEnabled: zod_1.z.boolean().nullable(),
});
