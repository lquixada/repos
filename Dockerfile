FROM node:8

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn --production

COPY web ./web

COPY .process.yml .

COPY logs ./logs

EXPOSE 3000

CMD ["npm", "start"]
