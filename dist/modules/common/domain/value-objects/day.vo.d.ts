import { ValueObject } from '../base-classes/value-object.base';
import { DateVO } from './date.vo';
import { DayTimeVO } from './day-time.vo';
import { WeekDay } from './week-day.vo';
import { Week } from './week.vo';
export declare class Day extends ValueObject<string> {
    constructor(value: string);
    toString(): string;
    toDate(): Date;
    static fromDate(date: Date): Day;
    add(numberOfDays: number): Day;
    addBusinessDays(numberOfDays: number): any;
    subtract(numberOfDays: number): Day;
    get weekDay(): WeekDay;
    setWeekDay(weekDay: WeekDay): Day;
    isBetween(start: Day, end: Day): boolean;
    isBefore(day: Day): boolean;
    isEqualOrBefore(day: Day): boolean;
    getWeek(): Week;
    static today(): Day;
    setDayTime(dayTime: DayTimeVO | string, timezone?: string): DateVO;
}
