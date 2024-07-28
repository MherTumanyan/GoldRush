import { Injectable } from "@nestjs/common";
import { ScoreDto } from "../scoreModule/ScoreDto";

@Injectable()
export class ScoreModuleService {
  constructor() {}
  async ScoreReporting(args: ScoreDto): Promise<ScoreDto> {
    throw new Error("Not implemented");
  }
}
