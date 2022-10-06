import { ValueObject } from '../base-classes/value-object.base';
import { Day } from './day.vo';
import { WeekDay } from './week-day.vo';
interface WeekProps {
    startDay: Day;
}
export declare class Week extends ValueObject<WeekProps> {
    constructor(props: WeekProps);
    get startDay(): Day;
    get endDay(): Day;
    add(numberOfWeeks: number): Week;
    getDay(weekDay: WeekDay): Day;
    static current(): Week;
    next(): Week;
    static fromDay(day: Day): Week;
    static fromDayString(dayString: string): Week;
    equals(other: Week): boolean;
    isDayInWeek(day: Day): boolean;
}
export {};
