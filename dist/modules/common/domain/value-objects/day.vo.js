"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = void 0;
const dayjs = require("dayjs");
const value_object_base_1 = require("../base-classes/value-object.base");
const date_vo_1 = require("./date.vo");
const day_time_vo_1 = require("./day-time.vo");
const week_day_vo_1 = require("./week-day.vo");
const week_vo_1 = require("./week.vo");
class Day extends value_object_base_1.ValueObject {
    constructor(value) {
        super({ value });
    }
    toString() {
        return this.props.value;
    }
    toDate() {
        return new Date(this.props.value);
    }
    static fromDate(date) {
        return new Day(dayjs(date).format('YYYY-MM-DD'));
    }
    add(numberOfDays) {
        return new Day(dayjs(this.toString()).add(numberOfDays, 'day').format('YYYY-MM-DD'));
    }
    addBusinessDays(numberOfDays) {
        const nextDay = new Day(dayjs(this.toString()).add(numberOfDays, 'day').format('YYYY-MM-DD'));
        if (nextDay.weekDay.equals(week_day_vo_1.WeekDay.SATURDAY) ||
            nextDay.weekDay.equals(week_day_vo_1.WeekDay.SUNDAY)) {
            return nextDay.addBusinessDays(1);
        }
        return nextDay;
    }
    subtract(numberOfDays) {
        return new Day(dayjs(this.toString()).subtract(numberOfDays, 'day').format('YYYY-MM-DD'));
    }
    get weekDay() {
        const num = dayjs(this.toString()).day();
        return week_day_vo_1.WeekDay.fromNumber(num);
    }
    setWeekDay(weekDay) {
        if (weekDay.equals(week_day_vo_1.WeekDay.SUNDAY)) {
            return new Day(dayjs(this.toString())
                .day(weekDay.toNumber())
                .add(1, 'week')
                .format('YYYY-MM-DD'));
        }
        if (this.weekDay.equals(week_day_vo_1.WeekDay.SUNDAY)) {
            return new Day(dayjs(this.toString())
                .day(weekDay.toNumber())
                .subtract(1, 'week')
                .format('YYYY-MM-DD'));
        }
        return new Day(dayjs(this.toString()).day(weekDay.toNumber()).format('YYYY-MM-DD'));
    }
    isBetween(start, end) {
        return dayjs(this.toString()).isBetween(start.toString(), end.toString());
    }
    isBefore(day) {
        return dayjs(this.toString()).isBefore(day.toString());
    }
    isEqualOrBefore(day) {
        return (dayjs(this.toString()).isBefore(day.toString()) ||
            dayjs(this.toString()).isSame(day.toString(), 'day'));
    }
    getWeek() {
        return new week_vo_1.Week({ startDay: this.setWeekDay(week_day_vo_1.WeekDay.MONDAY) });
    }
    static today() {
        return new Day(dayjs().format('YYYY-MM-DD'));
    }
    setDayTime(dayTime, timezone) {
        const time = typeof dayTime === 'string'
            ? day_time_vo_1.DayTimeVO.fromDayTimeString(dayTime)
            : dayTime;
        return new date_vo_1.DateVO(dayjs(this.props.value)
            .hour(time.hour)
            .minute(time.minute)
            .second(0)
            .millisecond(0)).setTimezone(timezone);
    }
}
exports.Day = Day;
//# sourceMappingURL=day.vo.js.map