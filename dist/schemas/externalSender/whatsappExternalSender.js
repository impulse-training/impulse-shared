"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsappExternalSender = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.whatsappExternalSender = (0, base_1.externalSenderBaseSchema)("whatsapp").extend({
    phoneNumber: zod_1.z.string(),
    // Default system message for new sessions
    defaultSystemMessage: zod_1.z.string(),
});
