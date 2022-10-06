import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.types';
export declare class ArgumentInvalidException extends ExceptionBase {
    readonly name = Exceptions.argumentInvalid;
}
