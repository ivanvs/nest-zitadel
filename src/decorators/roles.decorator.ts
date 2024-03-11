import { SetMetadata } from '@nestjs/common';

export const ROLES_METADATA = 'zest_roles';

export const Roles = (...args: string[]) => SetMetadata(ROLES_METADATA, args);
