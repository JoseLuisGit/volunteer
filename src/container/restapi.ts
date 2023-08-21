import { AwilixContainer, asFunction } from 'awilix';
import express, {Express, Router} from 'express';

import logger from '@app/logger';
import requestContextBinder from '@app/restapi/middleware/requestContextBinder';
import { requestLogger } from '@app/restapi/middleware/requestLogger';

export interface IRestAPICradle {
    router: Router;
    express: Express;
  }

function registerRestAPI(container: AwilixContainer<IRestAPICradle>): void {

    container.register({
        router: asFunction(() => {
            const router = Router();
            router.get('/', (req, res) => {
                logger.info('GET /api');
                res.send('Hello World!');
            });
            router.use(express.json());
            return router;
          }),
        express: asFunction(({router}) => {
            const app = express();
            app.use(requestContextBinder);
            app.use(requestLogger);
            app.use('/api', router);
            return app;
          }).singleton(),
    });
}

export default registerRestAPI;