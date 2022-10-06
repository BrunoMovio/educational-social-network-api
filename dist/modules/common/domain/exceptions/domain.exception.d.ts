import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.types';
export declare class DomainException extends ExceptionBase {
    readonly name = Exceptions.domainException;
}
