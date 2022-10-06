"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const groupBy = (list, iteratee) => list.reduce((acc, item) => (Object.assign(Object.assign({}, acc), { [iteratee(item)]: [...(acc[iteratee(item)] || []), item] })), {});
exports.groupBy = groupBy;
//# sourceMappingURL=array.utils.js.map