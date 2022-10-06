import {
  DomainPrimitive,
  ValueObject,
} from '../base-classes/value-object.base';
import { ArgumentOutOfRangeException } from '../exceptions';

const days = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

export class WeekDay extends ValueObject<number> {
  private constructor(day: number) {
    super({ value: day });
  }

  toString(): string {
    return days[this.props.value];
  }

  toNumber(): number {
    return this.props.value;
  }

  equals(weekDay: WeekDay) {
    return this.props.value === weekDay.props.value;
  }

  static fromString(dayString: string) {
    return new WeekDay(days.indexOf(dayString));
  }

  static fromNumber(dayNumber: number) {
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

  validate(props: DomainPrimitive<number>) {
    if (props.value < 0 || props.value > 6) {
      throw new ArgumentOutOfRangeException(
        `Week Day must be number between 0 and 6`,
      );
    }
  }
}
