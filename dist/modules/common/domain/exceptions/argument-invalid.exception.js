"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentInvalidException = void 0;
const exception_base_1 = require("./exception.base");
const exception_types_1 = require("./exception.types");
class ArgumentInvalidException extends exception_base_1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = exception_types_1.Exceptions.argumentInvalid;
    }
}
exports.ArgumentInvalidException = ArgumentInvalidException;
//# sourceMappingURL=argument-invalid.exception.js.map