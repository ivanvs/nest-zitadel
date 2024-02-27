# nest-zitadel

![GitHub](https://img.shields.io/github/license/ivanvs/nest-zitadel)
![npm](https://img.shields.io/npm/v/nest-zitadel)
![npm](https://img.shields.io/npm/dw/nest-zitadel)
![npm](https://img.shields.io/npm/dt/nest-zitadel)

> Nest.js module that setup authentication with Zitadel for Nest.js application

This library is higly inspired by [https://github.com/ehwplus/zitadel-nodejs-nestjs](https://github.com/ehwplus/zitadel-nodejs-nestjs)

## Installation

```bash
npm install --save passport-zitadel nest-zitadel @nestjs/passport
```

## Getting Started

Registering the module:

```typescript
ZitadelAuthModule.forRoot({
        authority: 'http://localhost:8080',
        authorization: {
        type: 'jwt-profile',
        profile: {
            type: 'application',
            keyId: 'key-id',
            key: 'key',
            appId: 'app-id',
            clientId: 'client-id',
        },
        },
    }),
```

Registering the module with configuration from `ConfigurationService`:

```typescript
ZitadelAuthModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          authority: configService.getOrThrow('ZITADEL_AUTHORITY'),
          authorization: {
            type: 'jwt-profile',
            profile: {
              type: 'application',
              keyId: configService.getOrThrow('ZITADEL_KEY_ID'),
              key: configService.getOrThrow('ZITADEL_KEY'),
              appId: configService.getOrThrow('ZITADEL_APP_ID'),
              clientId: configService.getOrThrow('ZITADEL_CLIENT_ID'),
            },
          },
        };
      },
    }),
```

## Guards

Register any of the guards either globally, or scoped in your controller.

By default, it will throw a 401 unauthorized when it is unable to verify the JWT token or Bearer header is missing.

```typescript
@Controller('cats')
@UseGuards(ZitadelAuthGuard)
export class CatsController {}
```

## Decorators

### ZitadelAuthGuard

Retrieves the current Zitadel logged-in user.

```typescript
@Controller('users')
@UseGuards(ZitadelAuthGuard)
export class UsersController {
  @Get()
  getCurrentUser(@AuthenticatedUser() user: ZitadelUser) {
    return user;
  }
}
```

# License

react-twitter-auth is released under [MIT License](https://opensource.org/licenses/MIT).
