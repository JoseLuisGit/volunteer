import {NextFunction, Request, Response} from 'express';

import context from '@app/logger/context';

export default (req: Request, res: Response, next: NextFunction): void => {
  const ctx = context.getContext() || context.createContext();
  ctx.bindEmitter(req);
  ctx.bindEmitter(res);

  ctx.run(() => {
    next();
  });
};
