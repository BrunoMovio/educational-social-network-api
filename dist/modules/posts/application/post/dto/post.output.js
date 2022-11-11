"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTagDTO = exports.PostDTO = void 0;
class PostDTO {
    constructor(props) {
        this.id = props.id.value;
        this.name = props.name;
        this.markdown = props.markdown;
        this.likes = props.likes;
        this.tags = props.tags;
        this.folderId = props.folderId.value;
        this.userId = props.userId.value;
    }
}
exports.PostDTO = PostDTO;
class PostTagDTO {
}
exports.PostTagDTO = PostTagDTO;
//# sourceMappingURL=post.output.js.map