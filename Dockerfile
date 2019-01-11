FROM alpine:latest
MAINTAINER Chance Hudson

RUN apk add --no-cache nodejs nodejs-npm git python g++ make

COPY . /src
WORKDIR /src
RUN npm ci

FROM alpine:latest

RUN apk add --no-cache nodejs
COPY --from=0 /src /src

CMD ["node", "/src"]
