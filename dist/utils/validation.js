"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidationFn = makeValidationFn;
exports.zodErrorToErrorObject = zodErrorToErrorObject;
function makeValidationFn(schema) {
    return function validate(input) {
        const result = schema.safeParse(input);
        if (result.success)
            return {};
        return zodErrorToErrorObject(result.error);
    };
}
function zodErrorToErrorObject(err) {
    const object = {};
    for (const issue of err.issues) {
        const path = issue.path.join(".");
        if (!object[path])
            object[path] = [];
        object[path].push(issue.message);
    }
    return object;
}
