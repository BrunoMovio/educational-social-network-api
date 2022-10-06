import { ObjectLiteral } from '../types';
import { Exceptions } from './exception.types';
export interface SerializedException {
    name: string;
    message: string;
    stack?: string;
    metadata?: ObjectLiteral;
}
export declare abstract class ExceptionBase extends Error {
    readonly message: string;
    readonly metadata?: ObjectLiteral;
    constructor(message: string, metadata?: ObjectLiteral);
    abstract name: Exceptions;
    toJSON(): SerializedException;
}
