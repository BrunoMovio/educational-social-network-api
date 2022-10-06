"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentOutOfRangeException = void 0;
const exception_base_1 = require("./exception.base");
const exception_types_1 = require("./exception.types");
class ArgumentOutOfRangeException extends exception_base_1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = exception_types_1.Exceptions.argumentOutOfRange;
    }
}
exports.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
//# sourceMappingURL=argument-out-of-range.exception.js.map