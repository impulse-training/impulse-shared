"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidationFn = makeValidationFn;
exports.yupErrorToErrorObject = yupErrorToErrorObject;
function makeValidationFn(schema) {
    return function validate(input) {
        try {
            schema.validateSync(input, { abortEarly: false });
            return {};
        }
        catch (error) {
            return yupErrorToErrorObject(error);
        }
    };
}
function yupErrorToErrorObject(err) {
    const object = {};
    err.inner.forEach((x) => {
        if (x.path !== undefined) {
            object[x.path] = x.errors;
        }
    });
    return object;
}
