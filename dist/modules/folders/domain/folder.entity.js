"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
const entity_base_1 = require("../../common/domain/base-classes/entity.base");
class Folder extends entity_base_1.Entity {
    get userId() {
        return this.props.userId;
    }
    get title() {
        return this.props.title;
    }
    get description() {
        return this.props.description;
    }
    updateFolder(props) {
        if (props.title)
            this.props.title = props.title;
        if (props.description)
            this.props.description = props.description;
    }
}
exports.Folder = Folder;
//# sourceMappingURL=folder.entity.js.map