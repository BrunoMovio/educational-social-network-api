"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frozen = void 0;
function frozen(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
exports.frozen = frozen;
//# sourceMappingURL=frozen.decorator.js.map