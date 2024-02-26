import { Module } from '@nestjs/common';
import { ZitadelStrategy } from './zitadel.strategy';
import { ConfigurableModuleClass } from './zitade.auth.module-definition';

@Module({
  imports: [],
  providers: [ZitadelStrategy],
  exports: [ZitadelStrategy],
})
export class ZitadelAuthModule extends ConfigurableModuleClass {}
