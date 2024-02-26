import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ZitadelAuthGuard extends AuthGuard('zitadel') {}
