FROM node:10-alpine

RUN npm install -g yarn nodemon
RUN npm install -g nodemon yarn

RUN mkdir /src
WORKDIR /src

# RUN sh -c 'echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories && apk update'

ADD package.json /src/package.json
ADD yarn.lock /src/yarn.lock
RUN yarn install

CMD yarn dev
