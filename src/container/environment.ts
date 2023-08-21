import {AwilixContainer, asValue} from 'awilix';

export type EnvConfig = {
  PORT: string;
  NODE_ENV: string;
};

export interface IEnvCradle {
  config: EnvConfig;
}


const registerEnvironment = (container: AwilixContainer<IEnvCradle>): void => {
  container.register({
    config: asValue({
      PORT: process.env.INTERNAL_APPLICATION_PORT!,
      NODE_ENV: process.env.NODE_ENV!
    }),
  });
};

export default registerEnvironment;
