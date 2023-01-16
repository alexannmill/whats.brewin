FROM node:16

WORKDIR /client

COPY package*.json ./

COPY . . 

RUN npm install

ENV PORT=7001

EXPOSE 7001

CMD ["npm", "start"]