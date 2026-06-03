FROM node:22-slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY src/ ./src/
COPY tsconfig.json ./
RUN yarn build


FROM node:22-slim

RUN groupadd --system app && useradd --system --gid app app

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

USER app

EXPOSE 3000

CMD ["node", "dist/server.js"]
