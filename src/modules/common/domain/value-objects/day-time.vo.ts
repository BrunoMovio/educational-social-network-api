import { ArgumentInvalidException } from '../exceptions';
import { ValueObject } from '../base-classes/value-object.base';

interface DayTimeVOProps {
  hour: number;
  minute: number;
}

interface CreateDayTimeVOProps {
  hour?: number;
  minute?: number;
}

export class DayTimeVO extends ValueObject<DayTimeVOProps> {
  constructor(props: CreateDayTimeVOProps) {
    super({
      hour: 0,
      minute: 0,
      ...props,
    });
  }

  public static fromDayTimeString(value?: string | number) {
    const [hour, minute] = String(value).split(':');
    return new DayTimeVO({
      hour: Number(hour || 0),
      minute: Number(minute || 0),
    });
  }

  public get hour() {
    return this.props.hour;
  }

  public get minute() {
    return this.props.minute;
  }

  public get hourFormatted() {
    return this.twoDigitFormat(this.props.hour);
  }

  public get minuteFormatted() {
    return this.twoDigitFormat(this.props.minute);
  }

  public toDayTimeString() {
    return `${this.hourFormatted}:${this.minuteFormatted}`;
  }

  public isBefore(dayTime: DayTimeVO) {
    if (this.hour < dayTime.hour) {
      return true;
    }

    if (this.hour === dayTime.hour && this.minute < dayTime.minute) {
      return true;
    }

    return false;
  }

  public isAfter(dayTime: DayTimeVO) {
    return !this.isBefore(dayTime);
  }

  public isEqual(dayTime: DayTimeVO) {
    return this.toDayTimeString() === dayTime.toDayTimeString();
  }

  public addHour(hourToAdd: number) {
    const newHour = this.hour + hourToAdd;
    return new DayTimeVO({ hour: newHour, minute: this.minute });
  }

  private twoDigitFormat(num: number) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  protected validate(props: DayTimeVOProps): void {
    if (!(props.hour >= 0 && props.hour <= 23)) {
      throw new ArgumentInvalidException('Hour out of range');
    }

    if (!(props.minute >= 0 && props.minute <= 59)) {
      throw new ArgumentInvalidException('Minute out of range');
    }
  }
}
