"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseStartedLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.impulseStartedLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("impulse_started"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
        // True when the user pressed the impulse button again while an existing
        // recent impulse session was reused (instead of a new session being
        // created). Signals the backend to respond — the urge is back/ongoing.
        repress: zod_1.z.boolean().optional(),
    }),
});
