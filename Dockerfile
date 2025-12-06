FROM node:25

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY jest.config.cjs ./
COPY test ./test