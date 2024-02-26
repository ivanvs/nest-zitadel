# nest-zitadel

![GitHub](https://img.shields.io/github/license/ivanvs/nest-zitadel)
![npm](https://img.shields.io/npm/v/nest-zitadel)
![npm](https://img.shields.io/npm/dw/nest-zitadel)
![npm](https://img.shields.io/npm/dt/nest-zitadel)

> The Passport strategy module for ZITADEL (v2)

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

### Guards

```typescript
@Controller('cats')
@UseGuards(ZitadelAuthGuard)
export class CatsController {}
```

# License

react-twitter-auth is released under [MIT License](https://opensource.org/licenses/MIT).
