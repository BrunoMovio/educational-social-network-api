"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const entity_base_1 = require("../../common/domain/base-classes/entity.base");
class Post extends entity_base_1.Entity {
    get userId() {
        return this.props.userId;
    }
    get name() {
        return this.props.name;
    }
    get markdown() {
        return this.props.markdown;
    }
    get likes() {
        return this.props.likes;
    }
    get tags() {
        return this.props.tags;
    }
    like() {
        this.props.likes++;
    }
    deslike() {
        this.props.likes--;
    }
    updatePost(props) {
        if (props.name)
            this.props.name = props.name;
        if (props.markdown)
            this.props.markdown = props.markdown;
        if (props.likes)
            this.props.likes = props.likes;
        if (props.tags)
            this.props.tags = props.tags;
    }
}
exports.Post = Post;
//# sourceMappingURL=posts.entity.js.map