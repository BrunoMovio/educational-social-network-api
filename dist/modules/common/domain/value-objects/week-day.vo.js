"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekDay = void 0;
const value_object_base_1 = require("../base-classes/value-object.base");
const exceptions_1 = require("../exceptions");
const days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
];
class WeekDay extends value_object_base_1.ValueObject {
    constructor(day) {
        super({ value: day });
    }
    toString() {
        return days[this.props.value];
    }
    toNumber() {
        return this.props.value;
    }
    equals(weekDay) {
        return this.props.value === weekDay.props.value;
    }
    static fromString(dayString) {
        return new WeekDay(days.indexOf(dayString));
    }
    static fromNumber(dayNumber) {
        return new WeekDay(dayNumber);
    }
    static get SUNDAY() {
        return WeekDay.fromString('SUNDAY');
    }
    static get MONDAY() {
        return WeekDay.fromString('MONDAY');
    }
    static get TUESDAY() {
        return WeekDay.fromString('TUESDAY');
    }
    static get WEDNESDAY() {
        return WeekDay.fromString('WEDNESDAY');
    }
    static get THURSDAY() {
        return WeekDay.fromString('THURSDAY');
    }
    static get FRIDAY() {
        return WeekDay.fromString('FRIDAY');
    }
    static get SATURDAY() {
        return WeekDay.fromString('SATURDAY');
    }
    validate(props) {
        if (props.value < 0 || props.value > 6) {
            throw new exceptions_1.ArgumentOutOfRangeException(`Week Day must be number between 0 and 6`);
        }
    }
}
exports.WeekDay = WeekDay;
//# sourceMappingURL=week-day.vo.js.map