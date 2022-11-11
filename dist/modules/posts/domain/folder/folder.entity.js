"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
const entity_base_1 = require("../../../common/domain/base-classes/entity.base");
class Folder extends entity_base_1.Entity {
    get userId() {
        return this.props.userId;
    }
    get name() {
        return this.props.name;
    }
    updateFolder(props) {
        if (props.name)
            this.props.name = props.name;
    }
}
exports.Folder = Folder;
//# sourceMappingURL=folder.entity.js.map