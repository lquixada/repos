FROM node:8

ENV NODE_ENV production

EXPOSE 3000

WORKDIR /app

RUN apt-get update

RUN apt-get install -y htop vim

RUN yarn global add pm2

RUN yarn add dotenv

RUN mkdir -p ./logs ./web

COPY .process.yml .

COPY web/node.js ./web

CMD ["pm2", "start", ".process.yml", "--no-daemon"]
