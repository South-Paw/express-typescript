import { json } from 'body-parser';
import cors from 'cors';
import express, { urlencoded } from 'express';
import pinoLogger from 'express-pino-logger';
import rateLimit from 'express-rate-limit';
import requestId from 'express-request-id';
import helmet from 'helmet';
import { appConfig, bodyParserConfig, corsConfig, rateLimitConfig } from './config';
import { router } from './router';

const app = express();

// Apply middleware
app.use(json(bodyParserConfig));
app.use(cors(corsConfig));
app.use(requestId());
app.use(pinoLogger());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(rateLimit(rateLimitConfig));

// Apply routes
app.use(router);

const { env, version, name, host, port } = appConfig;

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.info(`${name}@${version} server listening on ${host}:${port}, in ${env}`);
});
