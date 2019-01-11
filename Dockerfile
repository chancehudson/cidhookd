FROM alpine:latest
MAINTAINER Chance Hudson

RUN apk add --no-cache nodejs nodejs-npm git python g++ make

COPY . .

RUN npm ci

CMD ["npm", "start"]
