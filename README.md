# @south-paw/express-typescript

♨️ Simple boilerplate for a Express server with Typescript, ESLint, Prettier and Jest.

## About

A quick and simple boilerplate for that next Express project.

- Typescript, ESLint, Prettier and Jest are ready to roll
- Config has `.env` file support
- Simple `/health` route implemented

The following middleware are also implemented

- [body-parser](https://github.com/expressjs/body-parser) (for JSON)
- [cors](https://github.com/expressjs/cors)
- [express-pino-logger](https://github.com/pinojs/express-pino-logger)
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit)
- [express-request-id](https://github.com/floatdrop/express-request-id)
- [helmet](https://github.com/helmetjs/helmet)

You don't need to keep anything as you find it and hopefully it will save you a little time.

If you think theres some kind of improvement to be made, please raise a ticket or make a pull request.

## Issues and Bugs

If you manage to find any, please report them [here](https://github.com/South-Paw/react-vector-maps/issues) so they can be squashed.

## Development

Install [`Node.js`](https://nodejs.org/) and [`Yarn`](https://yarnpkg.com).

Open the project directory in your CLI and run the `yarn` command to install dependencies, after that you can run any of following commands

```bash
# Runs all watch tasks (TypeScript, Node)
yarn watch

# Runs all watch tasks with --inspect flag
yarn watch:debug

# Runs ESLint on project files
yarn lint

# Runs tests using Jest
yarn test

# Runs tests in watch mode
yarn test:watch

# Build the app
yarn build

# Starts the built app with node
yarn start

# Starts the built app in watch mode
yarn start:watch

# Starts the built app in watch mode with --inspect flag
yarn start:debug

# Compile all source .ts files to .js files in the dist folder
yarn ts

# Compile in watch mode
yarn ts:watch
```

## License

MIT, see the [LICENSE](./LICENSE) file.
