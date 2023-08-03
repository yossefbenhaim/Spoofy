FROM node:lts-alpine

WORKDIR /src/components/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]

