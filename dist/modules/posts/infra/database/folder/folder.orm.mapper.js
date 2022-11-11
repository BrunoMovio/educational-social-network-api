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
exports.FolderOrmMapper = void 0;
const common_1 = require("@nestjs/common");
const orm_mapper_base_1 = require("../../../../../modules/common/database/orm-mapper.base");
const id_1 = require("../../../../../modules/common/domain/value-objects/id");
const folder_entity_1 = require("../../../../../modules/posts/domain/folder/folder.entity");
const folder_orm_entity_1 = require("./folder.orm.entity");
let FolderOrmMapper = class FolderOrmMapper extends orm_mapper_base_1.OrmMapper {
    constructor() {
        super(folder_entity_1.Folder, folder_orm_entity_1.FolderOrm);
    }
    toOrmProps(entity) {
        const ormProps = {
            userId: entity.getPropsCopy().userId.value,
            name: entity.getPropsCopy().name,
        };
        return ormProps;
    }
    toDomainProps(ormEntity) {
        const props = {
            userId: new id_1.ID(ormEntity.userId),
            name: ormEntity.name,
        };
        return props;
    }
};
FolderOrmMapper = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FolderOrmMapper);
exports.FolderOrmMapper = FolderOrmMapper;
//# sourceMappingURL=folder.orm.mapper.js.map