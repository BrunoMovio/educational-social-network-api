import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
declare const ApiKeyStrategy_base: new (...args: any[]) => HeaderAPIKeyStrategy;
export declare class ApiKeyStrategy extends ApiKeyStrategy_base {
    constructor();
    validate(apiKey: any, done: any): boolean;
}
export {};
