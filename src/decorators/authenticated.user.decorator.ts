import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ZitadelUser } from '../interfaces';

/**
 * Retrieves the current Zitadel logged-in user.
 */
export const AuthenticatedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ZitadelUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
