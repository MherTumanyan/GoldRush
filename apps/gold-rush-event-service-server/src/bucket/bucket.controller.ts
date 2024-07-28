import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BucketService } from "./bucket.service";
import { BucketControllerBase } from "./base/bucket.controller.base";

@swagger.ApiTags("buckets")
@common.Controller("buckets")
export class BucketController extends BucketControllerBase {
  constructor(
    protected readonly service: BucketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
