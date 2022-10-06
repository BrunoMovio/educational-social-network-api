"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(props) {
        this.id = props.id.value;
        this.name = props.name;
        this.description = props.description;
        this.birthday = props.birthday.value.toLocaleDateString();
        this.avatar = props.avatar;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.output.js.map