"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const exceptions_1 = require("../exceptions");
const guard_1 = require("../guard");
const utils_1 = require("../utils");
const date_vo_1 = require("../value-objects/date.vo");
const id_1 = require("../value-objects/id");
class Entity {
    constructor(props, id = id_1.ID.generate()) {
        this.validateProps(props);
        this._id = id;
        const now = date_vo_1.DateVO.now();
        this._createdAt = now;
        this._updatedAt = now;
        this.props = props;
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    static isEntity(entity) {
        return entity instanceof Entity;
    }
    equals(object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!Entity.isEntity(object)) {
            return false;
        }
        return this.id ? this.id.equals(object.id) : false;
    }
    getPropsCopy() {
        const propsCopy = Object.assign({ id: this._id, createdAt: this._createdAt, updatedAt: this._updatedAt }, this.props);
        return Object.freeze(propsCopy);
    }
    toObject() {
        const propsCopy = (0, utils_1.convertPropsToObject)(this.props);
        const result = Object.assign({ id: this._id.value, createdAt: this._createdAt.value, updatedAt: this._updatedAt.value }, propsCopy);
        return Object.freeze(result);
    }
    validateProps(props) {
        const maxProps = 50;
        if (guard_1.Guard.isEmpty(props)) {
            throw new exceptions_1.ArgumentNotProvidedException("Entity props should not be empty");
        }
        if (typeof props !== "object") {
            throw new exceptions_1.ArgumentInvalidException("Entity props should be an object");
        }
        if (Object.keys(props).length > maxProps) {
            throw new exceptions_1.ArgumentOutOfRangeException(`Entity props should not have more then ${maxProps} properties`);
        }
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.base.js.map