import {config} from 'dotenv';

const {NODE_ENV = 'production'} = process.env;

const resolveFileName = (env: string): string => {
  if (env.trim().toLowerCase() === 'test') {
    return '.env.test';
  }
  return '.env';
};

export default config({path: resolveFileName(NODE_ENV)});
