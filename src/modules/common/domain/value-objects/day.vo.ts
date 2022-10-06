import * as dayjs from 'dayjs';
import { ValueObject } from '../base-classes/value-object.base';
import { DateVO } from './date.vo';
import { DayTimeVO } from './day-time.vo';
import { WeekDay } from './week-day.vo';
import { Week } from './week.vo';

export class Day extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
  }

  toString() {
    return this.props.value;
  }

  toDate() {
    return new Date(this.props.value);
  }

  static fromDate(date: Date) {
    return new Day(dayjs(date).format('YYYY-MM-DD'));
  }

  add(numberOfDays: number) {
    return new Day(
      dayjs(this.toString()).add(numberOfDays, 'day').format('YYYY-MM-DD'),
    );
  }

  addBusinessDays(numberOfDays: number) {
    const nextDay = new Day(
      dayjs(this.toString()).add(numberOfDays, 'day').format('YYYY-MM-DD'),
    );

    if (
      nextDay.weekDay.equals(WeekDay.SATURDAY) ||
      nextDay.weekDay.equals(WeekDay.SUNDAY)
    ) {
      return nextDay.addBusinessDays(1);
    }

    return nextDay;
  }

  subtract(numberOfDays: number) {
    return new Day(
      dayjs(this.toString()).subtract(numberOfDays, 'day').format('YYYY-MM-DD'),
    );
  }

  get weekDay() {
    const num = dayjs(this.toString()).day();
    return WeekDay.fromNumber(num);
  }

  setWeekDay(weekDay: WeekDay) {
    // Week on our domain should start on Monday,
    // but in dayjs it starts on sunday
    if (weekDay.equals(WeekDay.SUNDAY)) {
      return new Day(
        dayjs(this.toString())
          .day(weekDay.toNumber())
          .add(1, 'week')
          .format('YYYY-MM-DD'),
      );
    }
    if (this.weekDay.equals(WeekDay.SUNDAY)) {
      return new Day(
        dayjs(this.toString())
          .day(weekDay.toNumber())
          .subtract(1, 'week')
          .format('YYYY-MM-DD'),
      );
    }

    return new Day(
      dayjs(this.toString()).day(weekDay.toNumber()).format('YYYY-MM-DD'),
    );
  }

  isBetween(start: Day, end: Day) {
    return dayjs(this.toString()).isBetween(start.toString(), end.toString());
  }

  isBefore(day: Day) {
    return dayjs(this.toString()).isBefore(day.toString());
  }

  isEqualOrBefore(day: Day) {
    return (
      dayjs(this.toString()).isBefore(day.toString()) ||
      dayjs(this.toString()).isSame(day.toString(), 'day')
    );
  }

  getWeek() {
    return new Week({ startDay: this.setWeekDay(WeekDay.MONDAY) });
  }

  static today() {
    return new Day(dayjs().format('YYYY-MM-DD'));
  }

  public setDayTime(dayTime: DayTimeVO | string, timezone?: string) {
    const time =
      typeof dayTime === 'string'
        ? DayTimeVO.fromDayTimeString(dayTime)
        : dayTime;

    return new DateVO(
      dayjs(this.props.value)
        .hour(time.hour)
        .minute(time.minute)
        .second(0)
        .millisecond(0),
    ).setTimezone(timezone);
  }
}
