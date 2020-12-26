import { Module } from '@nestjs/common'
import { AdminRepository } from './servise/admin.repository'

@Module({
  providers: [AdminRepository],
  exports: [AdminRepository],
})
export class AdminModule {}
