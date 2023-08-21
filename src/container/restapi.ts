import { AwilixContainer, asFunction } from 'awilix';
import express, {Express, Router} from 'express';

export interface IRestAPICradle {
    router: Router;
    express: Express;
  }

function registerRestAPI(container: AwilixContainer<IRestAPICradle>): void {

    container.register({
        router: asFunction(() => {
            const router = Router();
            router.use(express.json());
            return router;
          }),
        express: asFunction(({router}) => {
            const app = express();
            app.use('/api', router);
            return app;
          }).singleton(),
    });
}

export default registerRestAPI;