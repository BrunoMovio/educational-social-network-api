"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayTimeVO = void 0;
const exceptions_1 = require("../exceptions");
const value_object_base_1 = require("../base-classes/value-object.base");
class DayTimeVO extends value_object_base_1.ValueObject {
    constructor(props) {
        super(Object.assign({ hour: 0, minute: 0 }, props));
    }
    static fromDayTimeString(value) {
        const [hour, minute] = String(value).split(':');
        return new DayTimeVO({
            hour: Number(hour || 0),
            minute: Number(minute || 0),
        });
    }
    get hour() {
        return this.props.hour;
    }
    get minute() {
        return this.props.minute;
    }
    get hourFormatted() {
        return this.twoDigitFormat(this.props.hour);
    }
    get minuteFormatted() {
        return this.twoDigitFormat(this.props.minute);
    }
    toDayTimeString() {
        return `${this.hourFormatted}:${this.minuteFormatted}`;
    }
    isBefore(dayTime) {
        if (this.hour < dayTime.hour) {
            return true;
        }
        if (this.hour === dayTime.hour && this.minute < dayTime.minute) {
            return true;
        }
        return false;
    }
    isAfter(dayTime) {
        return !this.isBefore(dayTime);
    }
    isEqual(dayTime) {
        return this.toDayTimeString() === dayTime.toDayTimeString();
    }
    addHour(hourToAdd) {
        const newHour = this.hour + hourToAdd;
        return new DayTimeVO({ hour: newHour, minute: this.minute });
    }
    twoDigitFormat(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }
    validate(props) {
        if (!(props.hour >= 0 && props.hour <= 23)) {
            throw new exceptions_1.ArgumentInvalidException('Hour out of range');
        }
        if (!(props.minute >= 0 && props.minute <= 59)) {
            throw new exceptions_1.ArgumentInvalidException('Minute out of range');
        }
    }
}
exports.DayTimeVO = DayTimeVO;
//# sourceMappingURL=day-time.vo.js.map