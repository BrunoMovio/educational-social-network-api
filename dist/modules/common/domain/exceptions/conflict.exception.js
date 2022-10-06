"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
const exception_base_1 = require("./exception.base");
const exception_types_1 = require("./exception.types");
class ConflictException extends exception_base_1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = exception_types_1.Exceptions.conflict;
    }
}
exports.ConflictException = ConflictException;
//# sourceMappingURL=conflict.exception.js.map