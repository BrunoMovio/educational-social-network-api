import { ArgumentInvalidException } from '../exceptions';
import { ValueObject } from '../base-classes/value-object.base';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import * as weekOfYear from 'dayjs/plugin/weekOfYear';
import * as isBetween from 'dayjs/plugin/isBetween';
import { DayTimeVO } from './day-time.vo';
import { WeekDay } from './week-day.vo';
import { Day } from './day.vo';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);

interface DateVOProps {
  value: dayjs.Dayjs;
}

export class DateVO extends ValueObject<DateVOProps> {
  constructor(
    value?: Date | string | number | undefined | null | DateVO | dayjs.Dayjs
  ) {
    if (value instanceof DateVO) {
      super({ value: dayjs(value.value) });
      return;
    }
    const date = value ? dayjs(value) : dayjs();
    super({ value: date });
  }

  public get value(): Date {
    return this.props.value.toDate();
  }

  public static now(): DateVO {
    return new DateVO(Date.now());
  }

  public getTimestamp() {
    return this.props.value.unix();
  }

  public getDay() {
    return this.props.value.day();
  }

  public getWeekInYear() {
    return this.props.value.week();
  }

  public getYear() {
    return this.props.value.year();
  }

  public getWeekDay() {
    return WeekDay.fromNumber(this.props.value.day());
  }

  public getWeeksDiff(date: DateVO) {
    // TODO Fix for different years
    if (this.getYear() !== date.getYear()) {
      throw new Error('Weeks diff for different years not implemented');
    }

    return date.getWeekInYear() - this.getWeekInYear();
  }

  public toDayVO() {
    return new Day(this.props.value.toString());
  }

  public toDayTimeVO() {
    return new DayTimeVO({
      hour: this.props.value.hour(),
      minute: this.props.value.minute(),
    });
  }

  public addDays(days: number) {
    return new DateVO(this.props.value.add(days, 'days'));
  }

  public add(value: number, unit: dayjs.ManipulateType) {
    return new DateVO(this.props.value.add(value, unit));
  }

  public addBusinessDays(days: number) {
    const nextDay = this.addDays(days);
    if (
      nextDay.getWeekDay().equals(WeekDay.SATURDAY) ||
      nextDay.getWeekDay().equals(WeekDay.SUNDAY)
    ) {
      return nextDay.addBusinessDays(1);
    }

    return nextDay;
  }

  public subtract(value: number, unit: dayjs.ManipulateType) {
    return new DateVO(this.props.value.subtract(value, unit));
  }

  public setHour(hour: number) {
    return new DateVO(this.props.value.hour(hour));
  }

  public setMinutes(minute: number) {
    return new DateVO(this.props.value.minute(minute));
  }

  public setSeconds(second: number) {
    return new DateVO(this.props.value.second(second));
  }

  public setDayTime(dayTime: DayTimeVO | string, timezone?: string) {
    const time =
      typeof dayTime === 'string'
        ? DayTimeVO.fromDayTimeString(dayTime)
        : dayTime;

    return new DateVO(
      this.props.value
        .hour(time.hour)
        .minute(time.minute)
        .second(0)
        .millisecond(0)
    ).setTimezone(timezone);
  }

  public setDay(day: number) {
    return new DateVO(this.props.value.day(day));
  }

  public setTimezone(tz: string) {
    return new DateVO(
      // This will set the timezone keeping the date and time that are already set
      dayjs.tz(this.props.value.format('YYYY-MM-DDTHH:mm:ss'), tz)
    );
  }

  public getFridayFromPastWeek(date: DateVO) {
    const pastWeek = date.subtract(1, 'week');
    return pastWeek.setDay(5);
  }

  public getSundayFromWeek(date: DateVO) {
    return date.setDay(0);
  }

  public getMondayFromWeek(date: DateVO) {
    return date.setDay(1);
  }

  public setWeekDay(day: WeekDay) {
    return this.setDay(day.toNumber());
  }

  public getSundayFromNextWeek(date: DateVO) {
    const nextWeek = date.add(1, 'week');
    return nextWeek.setDay(0);
  }

  protected validate({ value }: DateVOProps): void {
    if (!value.isValid()) {
      throw new ArgumentInvalidException('Incorrect date');
    }
  }

  public isBetween(start: string, end: string) {
    return dayjs(this.props.value).isBetween(
      dayjs(start),
      dayjs(end),
      'minute',
      '[]'
    );
  }

  public absoluteDiff(date: DateVO) {
    return Math.abs(date.props.value.diff(this.props.value));
  }
}
