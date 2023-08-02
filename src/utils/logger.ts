import chalk from 'chalk';

export const logger = {
  info: (...message: unknown[]) => console.log(chalk.cyan(...message)),
};
