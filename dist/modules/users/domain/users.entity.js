"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRoles = void 0;
const entity_base_1 = require("../../common/domain/base-classes/entity.base");
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "ADMIN";
    UserRoles["NORMAL"] = "NORMAL";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
class User extends entity_base_1.Entity {
    get name() {
        return this.props.name;
    }
    get email() {
        return this.props.email;
    }
    get nickname() {
        return this.props.nickname;
    }
    get description() {
        return this.props.description;
    }
    get role() {
        return this.props.role;
    }
    get city() {
        return this.props.city;
    }
    get state() {
        return this.props.state;
    }
    get country() {
        return this.props.country;
    }
    get career() {
        return this.props.career;
    }
    updateUser(props) {
        if (props.name)
            this.props.name = props.name;
        if (props.email)
            this.props.email = props.email;
        if (props.nickname)
            this.props.nickname = props.nickname;
        if (props.description)
            this.props.description = props.description;
        if (props.role)
            this.props.role = props.role;
        if (props.state)
            this.props.state = props.state;
        if (props.country)
            this.props.country = props.country;
        if (props.career)
            this.props.career = props.career;
        if (props.city)
            this.props.city = props.city;
    }
}
exports.User = User;
//# sourceMappingURL=users.entity.js.map