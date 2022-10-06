"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Week = void 0;
const value_object_base_1 = require("../base-classes/value-object.base");
const day_vo_1 = require("./day.vo");
const week_day_vo_1 = require("./week-day.vo");
class Week extends value_object_base_1.ValueObject {
    constructor(props) {
        const weekDay = props.startDay.weekDay;
        if (!weekDay.equals(week_day_vo_1.WeekDay.MONDAY)) {
            throw new Error('Week must start on Monday');
        }
        super({
            startDay: props.startDay,
        });
    }
    get startDay() {
        return this.props.startDay;
    }
    get endDay() {
        return this.startDay.setWeekDay(week_day_vo_1.WeekDay.SUNDAY);
    }
    add(numberOfWeeks) {
        const daysInWeek = 7;
        return new Week({
            startDay: this.startDay.add(numberOfWeeks * daysInWeek),
        });
    }
    getDay(weekDay) {
        return this.startDay.setWeekDay(weekDay);
    }
    static current() {
        return new Week({
            startDay: day_vo_1.Day.today().setWeekDay(week_day_vo_1.WeekDay.MONDAY),
        });
    }
    next() {
        return this.add(1);
    }
    static fromDay(day) {
        return new Week({
            startDay: day.setWeekDay(week_day_vo_1.WeekDay.MONDAY),
        });
    }
    static fromDayString(dayString) {
        return Week.fromDay(new day_vo_1.Day(dayString));
    }
    equals(other) {
        return this.startDay.equals(other.startDay);
    }
    isDayInWeek(day) {
        return day.isBetween(this.startDay, this.endDay);
    }
}
exports.Week = Week;
//# sourceMappingURL=week.vo.js.map