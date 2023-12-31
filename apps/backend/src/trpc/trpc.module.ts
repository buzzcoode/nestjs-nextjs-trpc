import { Module } from '@nestjs/common'
import { TrpcService } from '@backend/trpc/trpc.service'
import { TrpcRouter } from '@backend/trpc/trpc.router'

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
