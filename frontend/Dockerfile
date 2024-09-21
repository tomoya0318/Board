FROM node:18.17.0-alpine

WORKDIR /front

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

# 3000ポートで起動
CMD ["npm", "run", "dev"]
