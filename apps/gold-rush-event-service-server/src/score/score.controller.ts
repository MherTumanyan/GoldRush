import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScoreService } from "./score.service";
import { ScoreControllerBase } from "./base/score.controller.base";

@swagger.ApiTags("scores")
@common.Controller("scores")
export class ScoreController extends ScoreControllerBase {
  constructor(
    protected readonly service: ScoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
