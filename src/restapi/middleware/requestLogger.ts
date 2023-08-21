import expressWinston from 'express-winston';

import logger from '@app/logger';

export const requestLogger = expressWinston.logger({
  winstonInstance: logger,
});

export const errorLogger = expressWinston.errorLogger({
  winstonInstance: logger,
});
