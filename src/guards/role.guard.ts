import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_METADATA } from 'src/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger: Logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.getAllAndMerge<string[]>(ROLES_METADATA, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    if (!user) {
      return false;
    }
    const rolesObj = user['urn:zitadel:iam:org:project:roles'];

    if (!rolesObj) {
      this.logger.debug('User does not contains any role');
      return false;
    }

    const userRoles = Object.keys(rolesObj);
    return roles.some((x) => userRoles.includes(x));
  }
}
