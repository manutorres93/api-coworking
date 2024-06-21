<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Coworking Riwi API - v1

Coworking Riwi API is an application backend developed in Node.js with the framework Nest.js, designed to reserve coworking spaces for a specific session to facilitate space occupancy management and improve user experience


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

To use this API on your local machine, please clone the repository and configure the necessary environment variables for the database

1. Clone the repository.
2. Install the necessary dependencies.

```bash
$ npm install
```
3.Copy the .env.example file into a new .env file on your local environment and configure the necessary variables. You can also copy the variables from here and paste it into your own .env file. You can modify the variables as you needed.

```bash
DB_CONNECTION = your_db_connection
DB_HOST = your_database_host
DB_USER =your_ database_user
DB_PASSWORD = your_database_password
DB_PORT=your_port
DB_NAME=your_database_name
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

```

## Postman resources

You can use the Riwi_coworking.postman_collection.json file, after importing the file into your postman application. Is also publised in https://documenter.getpostman.com/view/24858364/2sA3XWbdQE.

## Swagger resources

You can use the swagger documentation following the next link: http://localhost:3000/api-documentation if you are runing in your local machine or https://app-9157ced5-e667-4087-a64b-c15e2d229db7.cleverapps.io/api-documentation. Note that the port (3000) can change if you set a different one into your .env file.


## Deployment

You can interact with the app using the following URL:

[Test the API](https://app-9157ced5-e667-4087-a64b-c15e2d229db7.cleverapps.io/v1/api/sessions) 

NOTE: you should use the URL base https://app-9157ced5-e667-4087-a64b-c15e2d229db7.cleverapps.io/v1/api/ and then complement as you need according to the controllers.

This shows the latest update of the branch `main`.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Manuela Torres](https://github.com/manutorres93)


## License

Nest is [MIT licensed](LICENSE).
