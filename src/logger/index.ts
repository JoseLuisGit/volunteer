import {createLogger, format, transports} from 'winston';
import _ from 'lodash';

import context from '@app/logger/context';

const consoleTransport = new transports.Console({
  level: process.env.LOG_LEVEL,
});

export function cleanValue(value: unknown | undefined): string | undefined{
  if(!value) {
    return undefined;
  }
  if(_.isString(value)) {
    return value.replaceAll('"', "'");
  }
  return _.toString(value);
}

function contextToString(contextObject: ArrayLike<unknown>): string {
  let output = '';
  for (const [key, value] of Object.entries(contextObject)) {
    if (key == 'id' || key.startsWith('_')) {
      continue;
    }
    output += ` ${key}="${cleanValue(value)}"`;
  }
  return output.trim();
}

const logLineFormat = format.printf(({level, message, timestamp}) => {
  const namespace = context.getContext();
  let logLine = `@timestamp=${timestamp} level=${level} message="${cleanValue(message)}"`;
  if (namespace && namespace.active) {
    logLine += ' ' + contextToString(namespace.active);
  }
  return logLine;
});

const logger = createLogger({
  transports: [consoleTransport],
  format: format.combine(format.timestamp(), logLineFormat),
});

export default logger;
