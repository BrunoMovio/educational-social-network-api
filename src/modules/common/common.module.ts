import { Module } from "@nestjs/common";
import { BaseService } from "./application/service.base";

@Module({
  providers: [BaseService],
  exports: [BaseService],
})
export class CommonModule {}
