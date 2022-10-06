"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.final = void 0;
function final(target) {
    return class Final extends target {
        constructor(...args) {
            if (new.target !== Final) {
                throw new Error(`Cannot extend a final class "${target.name}"`);
            }
            super(...args);
        }
    };
}
exports.final = final;
//# sourceMappingURL=final.decorator.js.map