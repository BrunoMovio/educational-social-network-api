"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentNotProvidedException = void 0;
const exception_base_1 = require("./exception.base");
const exception_types_1 = require("./exception.types");
class ArgumentNotProvidedException extends exception_base_1.ExceptionBase {
    constructor() {
        super(...arguments);
        this.name = exception_types_1.Exceptions.argumentNotProvided;
    }
}
exports.ArgumentNotProvidedException = ArgumentNotProvidedException;
//# sourceMappingURL=argument-not-provided.exception.js.map