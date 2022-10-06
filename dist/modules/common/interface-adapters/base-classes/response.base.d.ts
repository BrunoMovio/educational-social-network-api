import { BaseEntityProps } from "../../domain/base-classes/entity.base";
import { IdResponse } from "../dto/id.response.dto";
export declare class ResponseBase extends IdResponse {
    constructor(entity: BaseEntityProps);
    createdAt: string;
    updatedAt: string;
}
