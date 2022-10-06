import { ValueObject } from '../base-classes/value-object.base';
import * as dayjs from 'dayjs';
import { DayTimeVO } from './day-time.vo';
import { WeekDay } from './week-day.vo';
import { Day } from './day.vo';
interface DateVOProps {
    value: dayjs.Dayjs;
}
export declare class DateVO extends ValueObject<DateVOProps> {
    constructor(value?: Date | string | number | undefined | null | DateVO | dayjs.Dayjs);
    get value(): Date;
    static now(): DateVO;
    getTimestamp(): number;
    getDay(): number;
    getWeekInYear(): number;
    getYear(): number;
    getWeekDay(): WeekDay;
    getWeeksDiff(date: DateVO): number;
    toDayVO(): Day;
    toDayTimeVO(): DayTimeVO;
    addDays(days: number): DateVO;
    add(value: number, unit: dayjs.ManipulateType): DateVO;
    addBusinessDays(days: number): any;
    subtract(value: number, unit: dayjs.ManipulateType): DateVO;
    setHour(hour: number): DateVO;
    setMinutes(minute: number): DateVO;
    setSeconds(second: number): DateVO;
    setDayTime(dayTime: DayTimeVO | string, timezone?: string): DateVO;
    setDay(day: number): DateVO;
    setTimezone(tz: string): DateVO;
    getFridayFromPastWeek(date: DateVO): DateVO;
    getSundayFromWeek(date: DateVO): DateVO;
    getMondayFromWeek(date: DateVO): DateVO;
    setWeekDay(day: WeekDay): DateVO;
    getSundayFromNextWeek(date: DateVO): DateVO;
    protected validate({ value }: DateVOProps): void;
    isBetween(start: string, end: string): boolean;
    absoluteDiff(date: DateVO): number;
}
export {};
