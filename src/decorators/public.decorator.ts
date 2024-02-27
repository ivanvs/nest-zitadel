import { SetMetadata, applyDecorators } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Allow user to use routes that do not need authentication.
 */
export const Public = () => applyDecorators(SetMetadata(IS_PUBLIC_KEY, true));
