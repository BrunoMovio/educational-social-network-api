import { ValueObject } from '../base-classes/value-object.base';
import { Day } from './day.vo';
import { WeekDay } from './week-day.vo';

interface WeekProps {
  startDay: Day;
}

export class Week extends ValueObject<WeekProps> {
  constructor(props: WeekProps) {
    const weekDay = props.startDay.weekDay;

    // weeks start on monday because projects may be delivered on sunday
    if (!weekDay.equals(WeekDay.MONDAY)) {
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
    return this.startDay.setWeekDay(WeekDay.SUNDAY);
  }

  add(numberOfWeeks: number) {
    const daysInWeek = 7;
    return new Week({
      startDay: this.startDay.add(numberOfWeeks * daysInWeek),
    });
  }

  getDay(weekDay: WeekDay) {
    return this.startDay.setWeekDay(weekDay);
  }

  static current() {
    return new Week({
      startDay: Day.today().setWeekDay(WeekDay.MONDAY),
    });
  }

  next() {
    return this.add(1);
  }

  static fromDay(day: Day) {
    return new Week({
      startDay: day.setWeekDay(WeekDay.MONDAY),
    });
  }

  static fromDayString(dayString: string) {
    return Week.fromDay(new Day(dayString));
  }

  equals(other: Week) {
    return this.startDay.equals(other.startDay);
  }

  isDayInWeek(day: Day) {
    return day.isBetween(this.startDay, this.endDay);
  }
}
