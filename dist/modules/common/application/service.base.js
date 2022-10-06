"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(responseConstructor) {
        this.responseConstructor = responseConstructor;
    }
    entityToResponse(entity) {
        return new this.responseConstructor(entity);
    }
    entityListToResponseList(entities) {
        return entities.map((entity) => this.entityToResponse(entity));
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.base.js.map