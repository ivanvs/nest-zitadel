import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {
  AuthenticatedUser,
  Public,
  ZitadelAuthGuard,
  ZitadelUser,
} from 'nest-zitadel';

@UseGuards(ZitadelAuthGuard)
@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    this.logger.log('Requesting hello');
    return this.appService.getHello();
  }

  @Get('protected')
  getProtectedHello(): string {
    this.logger.log('Requesting protected hello');
    return this.appService.getHello();
  }

  @Get('current-user')
  @UseGuards(ZitadelAuthGuard)
  getCurrentUser(@AuthenticatedUser() user: ZitadelUser): ZitadelUser {
    return user;
  }
}
