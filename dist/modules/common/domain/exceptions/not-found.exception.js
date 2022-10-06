"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const exception_base_1 = require("./exception.base");
const exception_types_1 = require("./exception.types");
class NotFoundException extends exception_base_1.ExceptionBase {
    constructor(message = 'Not found') {
        super(message);
        this.message = message;
        this.name = exception_types_1.Exceptions.notFound;
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=not-found.exception.js.map