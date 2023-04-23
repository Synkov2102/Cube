FROM node:18-alpine AS deps
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install --network-timeout 100000
RUN yarn add file: ckeditor5
RUN yarn build
CMD ["yarn", "start"]