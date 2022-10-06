"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
const exception_base_1 = require("./exception.base");
const exception_types_1 = require("./exception.types");
class DomainException extends exception_base_1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = exception_types_1.Exceptions.domainException;
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map