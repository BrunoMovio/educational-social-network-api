"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID = void 0;
const nanoid_1 = require("nanoid");
const exceptions_1 = require("../exceptions");
const value_object_base_1 = require("../base-classes/value-object.base");
class ID extends value_object_base_1.ValueObject {
    constructor(value) {
        super({ value });
    }
    get value() {
        return this.props.value;
    }
    static generate() {
        return new ID((0, nanoid_1.nanoid)(12));
    }
    validate({ value }) {
        if (value.includes(" ")) {
            throw new exceptions_1.ArgumentInvalidException("Incorrect ID format");
        }
    }
}
exports.ID = ID;
//# sourceMappingURL=id.js.map