import { DomainPrimitive, ValueObject } from "../base-classes/value-object.base";
export declare class ID extends ValueObject<string> {
    constructor(value: string);
    get value(): string;
    static generate(): ID;
    protected validate({ value }: DomainPrimitive<string>): void;
}
