![node-react-boilerplate.png](https://github.com/kkamara/useful/blob/main/node-react-boilerplate.png?raw=true)

# node-react-boilerplate [![Run CI](https://github.com/kkamara/node-react-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/kkamara/node-react-boilerplate/actions/workflows/node.js.yml)

Nodejs, Mysql, Redis, Reactjs.

## Installation

* [Node.js](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/).

```bash
  cp .env.example .env
  yarn install
```

## Usage

#### Run database migrations

```bash
  yarn node src/index.js
```

```bash
  yarn start # Runs Start-script `yarn node src/app.js`
```

## Using docker?

* [docker](https://docs.docker.com/engine/install/) 
* [docker-compose](https://docs.docker.com/compose/install/).

```bash
  docker-compose up --build -d
```

## To run api tests

```bash
  yarn test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
