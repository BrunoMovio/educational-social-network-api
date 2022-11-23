"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(props) {
        this.id = props.user.id.value;
        this.name = props.user.name;
        this.nickname = props.user.nickname;
        this.email = props.user.email;
        this.role = props.user.role;
        this.city = props.user.city;
        this.state = props.user.state;
        this.country = props.user.country;
        this.description = props.user.description;
        this.career = props.user.career;
        this.folderId = props.firstFolderId;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.output.js.map