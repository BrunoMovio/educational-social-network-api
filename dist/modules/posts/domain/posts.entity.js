"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const common_1 = require("@nestjs/common");
const entity_base_1 = require("../../common/domain/base-classes/entity.base");
class Post extends entity_base_1.Entity {
    get userId() {
        return this.props.userId;
    }
    get folderId() {
        return this.props.folderId;
    }
    get title() {
        return this.props.title;
    }
    get subtitle() {
        return this.props.subtitle;
    }
    get text() {
        return this.props.text;
    }
    get image() {
        return this.props.image;
    }
    get likes() {
        return this.props.likes;
    }
    get usersLiked() {
        return this.props.usersLiked;
    }
    get tags() {
        return this.props.tags;
    }
    get verified() {
        return this.props.verified;
    }
    get verifiedBy() {
        return this.props.verifiedBy;
    }
    like(userId) {
        const alreadyLiked = this.usersLiked.includes(userId);
        if (alreadyLiked)
            throw new Error("User already liked this post");
        this.props.usersLiked.push(userId);
        this.props.likes++;
    }
    deslike(userId) {
        const alreadyLiked = this.usersLiked.includes(userId);
        if (!alreadyLiked)
            throw new Error("User did not liked this post");
        this.props.usersLiked = this.props.usersLiked.filter((userLiked) => userLiked !== userId);
        this.props.likes--;
    }
    changeFolder(newFolderId) {
        this.props.folderId = newFolderId;
    }
    verify(userId, userRole, userNickname) {
        if (userRole !== "ADMIN")
            throw new common_1.UnauthorizedException("Only admin users could verify posts");
        if (userId === this.userId.value)
            throw new common_1.UnauthorizedException("Only other admins could verify your posts");
        this.props.verified = true;
        this.props.verifiedBy = userNickname;
    }
    updatePost(props) {
        if (props.title)
            this.props.title = props.title;
        if (props.subtitle)
            this.props.subtitle = props.subtitle;
        if (props.text)
            this.props.subtitle = props.text;
        if (props.image)
            this.props.subtitle = props.image;
        if (props.likes)
            this.props.likes = props.likes;
        if (props.tags)
            this.props.tags = props.tags;
    }
}
exports.Post = Post;
//# sourceMappingURL=posts.entity.js.map