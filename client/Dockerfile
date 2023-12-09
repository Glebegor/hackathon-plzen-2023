FROM node

WORKDIR ./client

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]