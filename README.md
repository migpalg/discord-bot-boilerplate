# 🤖 Discord Bot Bolerplate

[![Travis](https://app.travis-ci.com/migpalg/discord-bot-boilerplate.svg?branch=main)](https://app.travis-ci.com/migpalg/discord-bot-boilerplate)

This is a base project to build your discord bots!

## 🚀 Getting Started

This project uses `discord.js` package to manage bot messages and commands, you'll need `node 16+` to run this project. Also uses `Typescript` for a better development process. 

Install the dependencies with the following command:

```bash
yarn
```

Then you can make a production build

```bash
yarn run build
```

And serve it in your `localhost`:

```bash
node ./build/server.js
```

## 🐳 Docker

You can run this project using `docker` and `docker-compose`

### ⚒️ Building a Docker Image

To create an image of the project run the following command

```bash
docker build -f docker/Dockerfile -t niubot-service:latest .
```

And then you can create containers with the created image:

```bash
docker container run -d -p 8081:8081 --name niubot-instance niubot-service:latest
```

### 💡 Using `docker-compose`

You can use `docker-compose` to deploy both development and production stacks.

#### Development builds

To develop with this tool, run the following command:

```bash
docker-compose -f docker-compose.dev.yml run --build
```

This command will create a development environment with docker compose that have hot reload

#### Production build

To build and host a production build of the application run the following command:

```bash
docker-compose up -d --build
```
