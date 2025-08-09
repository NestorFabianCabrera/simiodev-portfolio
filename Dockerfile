FROM node:20 AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:alpine AS server

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html
