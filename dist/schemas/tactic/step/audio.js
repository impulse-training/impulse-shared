"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioStepSchema = void 0;
const zod_1 = require("zod");
const attachment_1 = require("../../attachment");
const base_1 = require("./base");
exports.audioStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("audio"),
    /** Audio attachment — optional when tactic is pending generation */
    audio: attachment_1.attachmentSchema.optional(),
    /** @deprecated Use tactic-level generationProviderJobId instead */
    generationJobId: zod_1.z.string().optional(),
    /** Auto-play the audio when the step is presented */
    autoplay: zod_1.z.boolean().optional(),
    /** Number of times to loop playback (undefined = no loop) */
    loopCount: zod_1.z.number().int().positive().optional(),
});
