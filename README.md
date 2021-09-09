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

## 🧪 Testing

We use `jest` as testing framework to test all components in the application, to run all the tests execute the following command:

```bash
yarn test
```

If you want to run the tests when code changes, you can use:

```
yarn test --watch
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

## 🛳 CI/CD

In order to automate tasks and validate code quality we created a simple `.travis.yml` file to create your pipelines and run into `Travis`, if you want to use another provider just delete that file and create the corresponding file for the provider that you want.

## 📝 IaC

We recommend to use `terraform` as a IaC platform, we created some example files that are production-ready for your bot, just deploy the stacks and let the `CI/CD` integration do the deployment
