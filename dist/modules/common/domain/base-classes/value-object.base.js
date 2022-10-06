"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const exceptions_1 = require("../exceptions");
const guard_1 = require("../guard");
const utils_1 = require("../utils");
class ValueObject {
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) { }
    static isValueObject(obj) {
        return obj instanceof ValueObject;
    }
    equals(vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        return JSON.stringify(this) === JSON.stringify(vo);
    }
    getRawProps() {
        if (this.isDomainPrimitive(this.props)) {
            return this.props.value;
        }
        const propsCopy = (0, utils_1.convertPropsToObject)(this.props);
        return Object.freeze(propsCopy);
    }
    checkIfEmpty(props) {
        if (guard_1.Guard.isEmpty(props) ||
            (this.isDomainPrimitive(props) && guard_1.Guard.isEmpty(props.value))) {
            throw new exceptions_1.ArgumentNotProvidedException('Property cannot be empty');
        }
    }
    isDomainPrimitive(obj) {
        if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
            return true;
        }
        return false;
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=value-object.base.js.map