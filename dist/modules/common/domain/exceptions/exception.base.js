"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionBase = void 0;
class ExceptionBase extends Error {
    constructor(message, metadata) {
        super(message);
        this.message = message;
        this.metadata = metadata;
        Error.captureStackTrace(this, this.constructor);
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
            metadata: this.metadata,
        };
    }
}
exports.ExceptionBase = ExceptionBase;
//# sourceMappingURL=exception.base.js.map