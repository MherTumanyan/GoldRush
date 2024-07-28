import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BucketModuleBase } from "./base/bucket.module.base";
import { BucketService } from "./bucket.service";
import { BucketController } from "./bucket.controller";
import { BucketResolver } from "./bucket.resolver";

@Module({
  imports: [BucketModuleBase, forwardRef(() => AuthModule)],
  controllers: [BucketController],
  providers: [BucketService, BucketResolver],
  exports: [BucketService],
})
export class BucketModule {}
