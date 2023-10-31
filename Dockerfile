FROM node:18

WORKDIR /src/components/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["node","server/server", "--host=0.0.0.0", "--port=5173"]

# docker build -t spoofy .
# docker tag spoofy yossef7875/spoofy:spoofy
# docker push yossef7875/spoofy:spoofy