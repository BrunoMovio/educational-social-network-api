import { ArgumentNotProvidedException } from '../exceptions';
import { Guard } from '../guard';
import { convertPropsToObject } from '../utils';

export type Primitives = string | number | boolean;
export interface DomainPrimitive<T extends Primitives | Date> {
  value: T;
}

type ValueObjectProps<T> = T extends Primitives | Date ? DomainPrimitive<T> : T;

export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    // this.checkIfEmpty(props);
    this.validate(props);
    this.props = props;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected validate(props: ValueObjectProps<T>): void {}

  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject;
  }

  /**
   *  Check if two Value Objects are equal. Checks structural equality.
   * @param vo ValueObject
   */
  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(vo);
  }

  /**
   * Get raw props object or value.
   */
  public getRawProps(): T {
    if (this.isDomainPrimitive(this.props)) {
      return this.props.value;
    }

    const propsCopy = convertPropsToObject(this.props);

    return Object.freeze(propsCopy);
  }

  private checkIfEmpty(props: ValueObjectProps<T>): void {
    if (
      Guard.isEmpty(props) ||
      (this.isDomainPrimitive(props) && Guard.isEmpty(props.value))
    ) {
      throw new ArgumentNotProvidedException('Property cannot be empty');
    }
  }

  private isDomainPrimitive(
    obj: unknown,
  ): obj is DomainPrimitive<T & (Primitives | Date)> {
    if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
      return true;
    }
    return false;
  }
}
