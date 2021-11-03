FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

ENV NODE_ENV production

CMD [ "node", "dist/index.js" ]