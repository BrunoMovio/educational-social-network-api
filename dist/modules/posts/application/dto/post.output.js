"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTagDTO = exports.PostDTO = void 0;
class PostDTO {
    constructor(props) {
        this.id = props.post.id.value;
        this.title = props.post.title;
        this.subtitle = props.post.subtitle;
        this.text = props.post.text;
        this.image = props.post.image;
        this.tags = props.post.tags;
        this.verified = props.post.verified;
        this.verifiedBy = props.post.verifiedBy;
        this.likes = props.post.likes;
        this.usersLiked = props.post.usersLiked.map((userLiked) => userLiked.value);
        this.userId = props.user.id;
        this.nickname = props.user.nickname;
        this.repositoryId = props.folder.id;
        this.repositoryTitle = props.folder.title;
        this.creationDate = props.post.createdAt.value.toLocaleDateString("fr-CA");
        this.lastUpdateDate =
            props.post.updatedAt.value.toLocaleDateString("fr-CA");
    }
}
exports.PostDTO = PostDTO;
class PostTagDTO {
}
exports.PostTagDTO = PostTagDTO;
//# sourceMappingURL=post.output.js.map