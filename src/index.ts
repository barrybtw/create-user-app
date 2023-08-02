#!/usr/bin/env node

import { logger } from './utils/logger.js';

const main = async () => {
  logger.info('Hello World! Create-User-App is alive!');

  process.exit(0);
};
main().catch((runtimeError) => {
  console.error(runtimeError);
  process.exit(1);
});
