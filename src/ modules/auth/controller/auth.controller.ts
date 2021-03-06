import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '../service/auth.service'
import { AdminRepository } from '../../admin/servise/admin.repository'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private adminRepository: AdminRepository,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  GetProfile(@Request() req) {
    return req.user
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.adminRepository.find(req.user.id)
    return this.authService.login(admin)
  }
}
