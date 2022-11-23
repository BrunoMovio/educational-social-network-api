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
exports.PostFactory = void 0;
const common_1 = require("@nestjs/common");
const id_1 = require("../../../modules/common/domain/value-objects/id");
const posts_entity_1 = require("./posts.entity");
let PostFactory = class PostFactory {
    constructor() { }
    create(input) {
        const post = new posts_entity_1.Post(Object.assign(Object.assign({}, input), { userId: new id_1.ID(input.userId), folderId: new id_1.ID(input.folderId), likes: 0, usersLiked: [], verified: false }));
        return post;
    }
};
PostFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PostFactory);
exports.PostFactory = PostFactory;
//# sourceMappingURL=posts.factory.js.map