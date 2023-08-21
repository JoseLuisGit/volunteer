import {AwilixContainer, InjectionMode, createContainer} from 'awilix';
import registerRestAPI, {IRestAPICradle} from './restapi';
import registerEnvironment, { IEnvCradle } from './environment';

export interface ContainerCradle extends IEnvCradle, IRestAPICradle {}

const configureContainer = (): AwilixContainer<ContainerCradle> => {
  const container = createContainer<ContainerCradle>({
    injectionMode: InjectionMode.PROXY,
  });
  registerEnvironment(container);
  registerRestAPI(container);
  
  return container;
};
export default configureContainer;
