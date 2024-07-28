import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BucketServiceBase } from "./base/bucket.service.base";

@Injectable()
export class BucketService extends BucketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
