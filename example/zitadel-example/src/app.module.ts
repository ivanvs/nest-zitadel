import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { ZitadelAuthModule } from 'nest-zitadel';

@Module({
  imports: [
    PassportModule,
    ZitadelAuthModule.forRoot({
      authority: 'http://localhost:8080',
      authorization: {
        type: 'jwt-profile',
        profile: {
          type: 'application',
          keyId: 'KEY-ID',
          key: 'KEY',
          appId: 'APP-ID',
          clientId: 'CLIENT-ID',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
