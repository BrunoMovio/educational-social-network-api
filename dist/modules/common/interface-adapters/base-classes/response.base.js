"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBase = void 0;
const swagger_1 = require("@nestjs/swagger");
const id_response_dto_1 = require("../dto/id.response.dto");
class ResponseBase extends id_response_dto_1.IdResponse {
    constructor(entity) {
        var _a, _b, _c;
        super((_a = entity.id) === null || _a === void 0 ? void 0 : _a.value);
        this.createdAt = ((_b = entity.createdAt) === null || _b === void 0 ? void 0 : _b.value).toISOString();
        this.updatedAt = ((_c = entity.updatedAt) === null || _c === void 0 ? void 0 : _c.value).toISOString();
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2020-11-24T17:43:15.970Z" }),
    __metadata("design:type", String)
], ResponseBase.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2020-11-24T17:43:15.970Z" }),
    __metadata("design:type", String)
], ResponseBase.prototype, "updatedAt", void 0);
exports.ResponseBase = ResponseBase;
//# sourceMappingURL=response.base.js.map