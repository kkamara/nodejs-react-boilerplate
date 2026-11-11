![nodejs-react-boilerplate.png](https://raw.githubusercontent.com/kkamara/useful/refs/heads/main/nodejs-react-boilerplate.png)

![nodejs-react-boilerplate2.png](https://raw.githubusercontent.com/kkamara/useful/refs/heads/main/nodejs-react-boilerplate2.png)

# nodejs-react-boilerplate [![Tests Pipeline](https://github.com/kkamara/nodejs-react-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/kkamara/nodejs-react-boilerplate/actions/workflows/node.js.yml)

(22-Jun-2021) An MVC NodeJS boilerplate with React 19 Redux SPA.

* [Using Postman?](#postman)

* [Installation](#installation)

* [Usage](#usage)

* [Using Docker?](#using-docker)

* [Mail Server With Docker](#mail-server-with-docker)

* [API Tests](#api-tests)

* [Contributing](#contributing)

* [License](#license)

<a name="postman"></a>
## Using Postman?

[Get Postman HTTP client](https://www.postman.com).

[Postman API Collection for NodeJS React Boilerplate](./nodejs-react-boilerplate.postman_collection.json).

[Postman API Environment for NodeJS React Boilerplate](./nodejs-react-boilerplate.postman_environment.json).

## Installation

* [NodeJS](https://nodejs.org/en/).

```bash
# Configure your database credentials in config.json
# (and also .env for Docker)
cp .config.example.json config.json
cp .env.example .env
npm install --global yarn
yarn
yarn migrate
yarn seed:all
```

#### Running frontend

```bash
cd frontend
cp .env.example .env
yarn
yarn dev
```

#### Sequelize reference

See the [Sequelize migration documentation](https://sequelize.org/docs/v6/other-topics/migrations/) for interacting with the application's database.

See [package.json](./package.json) for helpful commands related to using the database. For example:

```bash
yarn seed:generate --name create-admin-user
```

## Usage

```bash
yarn start # Runs Start-script `yarn node src/app.js`
# Serves app to http://localhost:8000 .
# Serves API to http://localhost:8000/api/v1 .
#   Example API route: http://localhost:8000/api/health .
```

#### Reload server on project files change

```bash
yarn dev
```

#### Reload server and frontend app on project files change

```bash
yarn dev:frontend
```

<a name="using-docker"></a>
## Using docker?

* [Docker](https://docs.docker.com/engine/install/) 
* [Docker Compose](https://docs.docker.com/compose/install/).

```bash
cp .config.example.json config.json
cp .env.example .env
docker-compose --build -d
```

## Mail Server With Docker

![docker-mailhog.png](https://raw.githubusercontent.com/kkamara/useful/main/docker-mailhog.png)

The [Mailhog](https://github.com/mailhog/MailHog) Docker image runs at `http://localhost:8025`in this app.

## API Tests

```bash
NODE_ENV=test yarn test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
