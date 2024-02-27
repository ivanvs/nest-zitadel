import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { extractRequest } from '../util';
import { ZitadelUser } from '../interfaces';

/**
 * Retrieves the current Zitadel logged-in user.
 */
export const AuthenticatedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ZitadelUser => {
    const [req] = extractRequest(ctx);
    return req.user as ZitadelUser;
  },
);
