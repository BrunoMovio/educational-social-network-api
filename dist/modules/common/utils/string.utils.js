"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeString = void 0;
const normalizeString = (text) => {
    return text === null || text === void 0 ? void 0 : text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\(\[][^\)\]]*[\)\]]/g, '');
};
exports.normalizeString = normalizeString;
//# sourceMappingURL=string.utils.js.map