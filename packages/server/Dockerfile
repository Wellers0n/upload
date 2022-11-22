FROM node:14-alpine

WORKDIR /usr/app
ENV port=3001
EXPOSE 3001

ADD ./package.json .
RUN npm install

RUN npm i -g nodemon

ADD . .

CMD npm start
