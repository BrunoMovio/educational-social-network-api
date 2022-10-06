import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityProps } from "../../domain/base-classes/entity.base";
import { IdResponse } from "../dto/id.response.dto";

export class ResponseBase extends IdResponse {
  constructor(entity: BaseEntityProps) {
    super(entity.id?.value as string);
    this.createdAt = (entity.createdAt?.value as Date).toISOString();
    this.updatedAt = (entity.updatedAt?.value as Date).toISOString();
  }

  @ApiProperty({ example: "2020-11-24T17:43:15.970Z" })
  createdAt: string;

  @ApiProperty({ example: "2020-11-24T17:43:15.970Z" })
  updatedAt: string;
}
