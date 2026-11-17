# syntax=docker/dockerfile:1

FROM node:26

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN npm install -g yarn && yarn install

COPY . .

CMD ["yarn", "run", "dev"]
