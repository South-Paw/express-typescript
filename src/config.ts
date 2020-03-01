import { OptionsJson } from 'body-parser';
import { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import { Options as RateLimitOptions } from 'express-rate-limit';

const { name, version } = require('../package.json');

dotenv.config();

export const appConfig = {
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || name,
  version,
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.APP_PORT ? Number.parseInt(process.env.APP_PORT, 10) : 7070,
};

// express cors config
// https://github.com/expressjs/cors
export const corsConfig: CorsOptions = {
  origin: '*',
  methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
};

// express body-parser config
// https://github.com/expressjs/body-parser
export const bodyParserConfig: OptionsJson = {
  limit: '1mb',
};

// express-rate-limit config
// https://github.com/nfriedly/express-rate-limit
export const rateLimitConfig: RateLimitOptions = {
  windowMs: 5 * 60 * 1000, // 5 minute window
  max: 500,
};
