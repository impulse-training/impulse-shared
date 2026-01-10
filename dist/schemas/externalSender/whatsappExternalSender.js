"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsappExternalSender = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.whatsappExternalSender = (0, base_1.externalSenderBaseSchema)("whatsapp").extend({
    phoneNumber: zod_1.default.string(),
    // Default system message for new sessions
    defaultSystemMessage: zod_1.default.string(),
});
