import { Module } from '@nestjs/common'
import { AdminModule } from '../admin/admin.module'
import { AuthService } from './service/auth.service'
import { LocalStrategy } from './service/local.strategy'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './controller/auth.controller'

@Module({
  controllers: [AuthController],
  imports: [AdminModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
