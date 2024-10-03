FROM node:21.6.1-alpine

WORKDIR /front

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]