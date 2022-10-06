"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const entity_base_1 = require("../../common/domain/base-classes/entity.base");
class User extends entity_base_1.Entity {
    get name() {
        return this.props.name;
    }
    get birthday() {
        return this.props.birthday;
    }
    get description() {
        return this.props.description;
    }
    get avatar() {
        return this.props.avatar;
    }
    updateUser(props) {
        if (props.name)
            this.props.name = props.name;
        if (props.description)
            this.props.description = props.description;
        if (props.avatar)
            this.props.avatar = props.avatar;
        if (props.birthday)
            this.props.birthday = props.birthday;
    }
}
exports.User = User;
//# sourceMappingURL=users.entity.js.map