import '@app/utils/loadenv';
import { AwilixContainer } from 'awilix';

import configureContainer, { ContainerCradle } from '@app/container';
import logger from '@app/logger';

const container: AwilixContainer<ContainerCradle> = configureContainer();
const expressApp = container.cradle.express;
const httpPort = container.cradle.config.PORT;
const nodeEnv = container.cradle.config.NODE_ENV;
async function main() {
    
    expressApp.listen(httpPort, () => {
        logger.info(`Server starting on port '${httpPort}' in '${nodeEnv!}' configuration!`);
    });
}

main();
