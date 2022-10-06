import { ExceptionBase } from './exception.base';
import { Exceptions } from './exception.types';
export declare class NotFoundException extends ExceptionBase {
    readonly message: string;
    constructor(message?: string);
    readonly name = Exceptions.notFound;
}
