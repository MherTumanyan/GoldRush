import { Module } from "@nestjs/common";
import { EventModuleService } from "./eventmodule.service";
import { EventModuleController } from "./eventmodule.controller";
import { EventModuleResolver } from "./eventmodule.resolver";

@Module({
  controllers: [EventModuleController],
  providers: [EventModuleService, EventModuleResolver],
  exports: [EventModuleService],
})
export class EventModuleModule {}
