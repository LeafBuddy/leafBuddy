## Build layer
FROM node:16.0.0 AS builder 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run prod:webpack

## Production layer
FROM alpine
WORKDIR /app
COPY --from=builder /app/package*.json .
COPY --from=builder /app/build build
COPY --from=builder /app/server server
RUN apk add --update nodejs npm
RUN npm install --only=prod
RUN addgroup -S app && adduser -S prod -G app
USER prod
CMD ["npm", "run", "prod:express"]