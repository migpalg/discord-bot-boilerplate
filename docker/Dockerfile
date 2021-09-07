FROM node:current-alpine as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

RUN yarn run build

FROM node:current-alpine as production

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production --frozen-lockfile

COPY --from=build /usr/src/app/build .

EXPOSE 8081

CMD [ "node", "./server.js" ]
