import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ZitadelAuthModuleConfig } from './interfaces';

// https://docs.nestjs.com/fundamentals/dynamic-modules#configurable-module-builder
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ZitadelAuthModuleConfig>().build();
