FROM node:8

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY web ./web

COPY .process.yml .

COPY logs ./logs

EXPOSE 3000

CMD ["npm", "start"]
