FROM node:16

WORKDIR /server

COPY package*.json ./

COPY . . 

RUN npm install

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]