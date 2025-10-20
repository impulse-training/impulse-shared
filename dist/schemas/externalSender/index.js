"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalSenderSchema = exports.externalSenderSchemas = void 0;
const zod_1 = require("zod");
const whatsappExternalSender_1 = require("./whatsappExternalSender");
__exportStar(require("./whatsappExternalSender"), exports);
// Map is retained for compatibility if referenced elsewhere
exports.externalSenderSchemas = {
    whatsapp: whatsappExternalSender_1.whatsappExternalSender,
};
exports.externalSenderSchema = zod_1.z.discriminatedUnion("type", [
    exports.externalSenderSchemas.whatsapp,
]);
