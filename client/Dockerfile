FROM node:22-alpine
WORKDIR /app

COPY client/package.json client/yarn.lock ./client/
RUN cd client && yarn install --frozen-lockfile

COPY client/ ./client/
COPY shared/ ./shared/

WORKDIR /app/client
EXPOSE 3001
CMD ["yarn", "dev"]
