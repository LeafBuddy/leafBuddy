## Build layer
FROM node:16.0.0 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run prod:webpack

## Production layer
FROM alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build/
COPY --from=builder /app/server ./server/
COPY --from=builder /app/server ./server/
COPY --from=builder /app/haproxy.cfg ./
RUN apk add --update bash nodejs npm haproxy curl openssl openssh
RUN curl https://get.acme.sh | sh -s email=admin@leafbuddy.io
RUN npm install
RUN addgroup -S app && adduser -S prod -G app
USER prod
CMD ["npm", "run", "prod:express"]