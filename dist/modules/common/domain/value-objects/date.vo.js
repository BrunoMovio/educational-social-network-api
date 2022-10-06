"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateVO = void 0;
const exceptions_1 = require("../exceptions");
const value_object_base_1 = require("../base-classes/value-object.base");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const weekOfYear = require("dayjs/plugin/weekOfYear");
const isBetween = require("dayjs/plugin/isBetween");
const day_time_vo_1 = require("./day-time.vo");
const week_day_vo_1 = require("./week-day.vo");
const day_vo_1 = require("./day.vo");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);
class DateVO extends value_object_base_1.ValueObject {
    constructor(value) {
        if (value instanceof DateVO) {
            super({ value: dayjs(value.value) });
            return;
        }
        const date = value ? dayjs(value) : dayjs();
        super({ value: date });
    }
    get value() {
        return this.props.value.toDate();
    }
    static now() {
        return new DateVO(Date.now());
    }
    getTimestamp() {
        return this.props.value.unix();
    }
    getDay() {
        return this.props.value.day();
    }
    getWeekInYear() {
        return this.props.value.week();
    }
    getYear() {
        return this.props.value.year();
    }
    getWeekDay() {
        return week_day_vo_1.WeekDay.fromNumber(this.props.value.day());
    }
    getWeeksDiff(date) {
        if (this.getYear() !== date.getYear()) {
            throw new Error('Weeks diff for different years not implemented');
        }
        return date.getWeekInYear() - this.getWeekInYear();
    }
    toDayVO() {
        return new day_vo_1.Day(this.props.value.toString());
    }
    toDayTimeVO() {
        return new day_time_vo_1.DayTimeVO({
            hour: this.props.value.hour(),
            minute: this.props.value.minute(),
        });
    }
    addDays(days) {
        return new DateVO(this.props.value.add(days, 'days'));
    }
    add(value, unit) {
        return new DateVO(this.props.value.add(value, unit));
    }
    addBusinessDays(days) {
        const nextDay = this.addDays(days);
        if (nextDay.getWeekDay().equals(week_day_vo_1.WeekDay.SATURDAY) ||
            nextDay.getWeekDay().equals(week_day_vo_1.WeekDay.SUNDAY)) {
            return nextDay.addBusinessDays(1);
        }
        return nextDay;
    }
    subtract(value, unit) {
        return new DateVO(this.props.value.subtract(value, unit));
    }
    setHour(hour) {
        return new DateVO(this.props.value.hour(hour));
    }
    setMinutes(minute) {
        return new DateVO(this.props.value.minute(minute));
    }
    setSeconds(second) {
        return new DateVO(this.props.value.second(second));
    }
    setDayTime(dayTime, timezone) {
        const time = typeof dayTime === 'string'
            ? day_time_vo_1.DayTimeVO.fromDayTimeString(dayTime)
            : dayTime;
        return new DateVO(this.props.value
            .hour(time.hour)
            .minute(time.minute)
            .second(0)
            .millisecond(0)).setTimezone(timezone);
    }
    setDay(day) {
        return new DateVO(this.props.value.day(day));
    }
    setTimezone(tz) {
        return new DateVO(dayjs.tz(this.props.value.format('YYYY-MM-DDTHH:mm:ss'), tz));
    }
    getFridayFromPastWeek(date) {
        const pastWeek = date.subtract(1, 'week');
        return pastWeek.setDay(5);
    }
    getSundayFromWeek(date) {
        return date.setDay(0);
    }
    getMondayFromWeek(date) {
        return date.setDay(1);
    }
    setWeekDay(day) {
        return this.setDay(day.toNumber());
    }
    getSundayFromNextWeek(date) {
        const nextWeek = date.add(1, 'week');
        return nextWeek.setDay(0);
    }
    validate({ value }) {
        if (!value.isValid()) {
            throw new exceptions_1.ArgumentInvalidException('Incorrect date');
        }
    }
    isBetween(start, end) {
        return dayjs(this.props.value).isBetween(dayjs(start), dayjs(end), 'minute', '[]');
    }
    absoluteDiff(date) {
        return Math.abs(date.props.value.diff(this.props.value));
    }
}
exports.DateVO = DateVO;
//# sourceMappingURL=date.vo.js.map