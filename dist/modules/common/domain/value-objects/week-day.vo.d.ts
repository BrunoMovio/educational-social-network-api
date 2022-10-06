import { DomainPrimitive, ValueObject } from '../base-classes/value-object.base';
export declare class WeekDay extends ValueObject<number> {
    private constructor();
    toString(): string;
    toNumber(): number;
    equals(weekDay: WeekDay): boolean;
    static fromString(dayString: string): WeekDay;
    static fromNumber(dayNumber: number): WeekDay;
    static get SUNDAY(): WeekDay;
    static get MONDAY(): WeekDay;
    static get TUESDAY(): WeekDay;
    static get WEDNESDAY(): WeekDay;
    static get THURSDAY(): WeekDay;
    static get FRIDAY(): WeekDay;
    static get SATURDAY(): WeekDay;
    validate(props: DomainPrimitive<number>): void;
}
