import { json } from 'body-parser';
import cors from 'cors';
import Express, { urlencoded } from 'express';
import pinoLogger from 'express-pino-logger';
import rateLimit from 'express-rate-limit';
import requestId from 'express-request-id';
import helmet from 'helmet';
import { appConfig, bodyParserConfig, corsConfig, pinoConfig, rateLimitConfig } from './config';
import { router } from './router';

const main = async () => {
  const app = Express();

  // Apply middleware
  app.use(json(bodyParserConfig));
  app.use(cors(corsConfig));
  app.use(requestId());
  app.use(pinoLogger(pinoConfig));
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(rateLimit(rateLimitConfig));

  // Apply routes
  app.use('/api', router);

  const { env, version, name, host, port } = appConfig;

  app.listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.info(`${name}@${version} server listening on ${host}:${port}, in ${env}`);
  });
};

// eslint-disable-next-line no-console
main().catch((error) => console.error(error));
