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
RUN apk add --update nodejs npm haproxy acme-client openssl openssh
RUN rc-update add sshd
RUN /etc/init.d/sshd start
RUN npm install
RUN addgroup -S app && adduser -S prod -G app
USER prod
CMD ["npm", "run", "prod:express"]