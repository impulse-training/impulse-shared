"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldChanged = fieldChanged;
const lodash_1 = require("lodash");
/**
 * Checks if any of the specified fields have changed between two objects
 *
 * @param dataBefore The object state before changes
 * @param dataAfter The object state after changes
 * @param fieldPaths Field paths to check (can be nested paths, e.g. "foo.bar.wizz")
 * @returns True if any of the specified fields have changed
 */
function fieldChanged(dataBefore, dataAfter, 
// These can be nested paths, e.g. "foo.bar.wizz"
...fieldPaths) {
    return fieldPaths.some((fieldPath) => {
        const fieldWas = (0, lodash_1.get)(dataBefore || {}, fieldPath);
        const fieldIs = (0, lodash_1.get)(dataAfter || {}, fieldPath);
        return !(0, lodash_1.isEqual)(fieldWas, fieldIs);
    });
}
