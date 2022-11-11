"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(props, folder) {
        console.log(folder);
        this.id = props.id.value;
        this.name = props.name;
        this.nickname = props.nickname;
        this.email = props.email;
        this.role = props.role;
        this.city = props.city;
        this.state = props.state;
        this.country = props.country;
        this.description = props.description;
        this.career = props.career;
        this.folderId = folder && folder.id;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.output.js.map