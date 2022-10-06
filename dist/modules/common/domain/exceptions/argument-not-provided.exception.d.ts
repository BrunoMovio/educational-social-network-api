import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.types';
export declare class ArgumentNotProvidedException extends ExceptionBase {
    readonly name = Exceptions.argumentNotProvided;
}
