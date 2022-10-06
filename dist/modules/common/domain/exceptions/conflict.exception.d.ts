import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.types';
export declare class ConflictException extends ExceptionBase {
    readonly name = Exceptions.conflict;
}
