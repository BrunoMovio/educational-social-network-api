import { ValueObject } from '../base-classes/value-object.base';
interface DayTimeVOProps {
    hour: number;
    minute: number;
}
interface CreateDayTimeVOProps {
    hour?: number;
    minute?: number;
}
export declare class DayTimeVO extends ValueObject<DayTimeVOProps> {
    constructor(props: CreateDayTimeVOProps);
    static fromDayTimeString(value?: string | number): DayTimeVO;
    get hour(): number;
    get minute(): number;
    get hourFormatted(): string;
    get minuteFormatted(): string;
    toDayTimeString(): string;
    isBefore(dayTime: DayTimeVO): boolean;
    isAfter(dayTime: DayTimeVO): boolean;
    isEqual(dayTime: DayTimeVO): boolean;
    addHour(hourToAdd: number): DayTimeVO;
    private twoDigitFormat;
    protected validate(props: DayTimeVOProps): void;
}
export {};
