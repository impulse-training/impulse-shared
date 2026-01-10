"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.widgetSetupLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// WidgetSetup Log Schema
exports.widgetSetupLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("widget_setup"),
    // WidgetSetup logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
});
