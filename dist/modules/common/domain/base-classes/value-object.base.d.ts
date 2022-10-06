export declare type Primitives = string | number | boolean;
export interface DomainPrimitive<T extends Primitives | Date> {
    value: T;
}
declare type ValueObjectProps<T> = T extends Primitives | Date ? DomainPrimitive<T> : T;
export declare abstract class ValueObject<T> {
    protected readonly props: ValueObjectProps<T>;
    constructor(props: ValueObjectProps<T>);
    protected validate(props: ValueObjectProps<T>): void;
    static isValueObject(obj: unknown): obj is ValueObject<unknown>;
    equals(vo?: ValueObject<T>): boolean;
    getRawProps(): T;
    private checkIfEmpty;
    private isDomainPrimitive;
}
export {};
