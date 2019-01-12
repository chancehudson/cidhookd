# cidhook [![Build Status](https://travis-ci.org/JChanceHud/cidhook.svg?branch=master)](https://travis-ci.org/JChanceHud/cidhook) [![](https://img.shields.io/npm/v/cidhook.svg)](https://www.npmjs.com/package/cidhook)

A tool for easily pinning IPFS cids from ephemeral environments (like CI, local machine, etc).

## Example CI

```yaml
script:
  - npm run build:production
  - jsipfs init
  - jsipfs daemon &
  - cidhook cidhook.commontheory.io $(jsipfs add -Qr ./static)
```

The script above assumes there is a `cidhook` server running at `https://cidhook.commontheory.io`. The directory `./static` is pinned to IPFS recursively on the current machine, then the `cidhook` command is used to ensure the remote server has pinned the content. Once the `cidhook` command finishes the current machine can be safely destroyed without content falling off the network.

This can be used to seed content into swarms of machines and the IPFS network more generally.

## Install

Install the cli with `npm install -g cidhook`

## Server

The docker image [`jchancehud/cidhook`](https://cloud.docker.com/u/jchancehud/repository/docker/jchancehud/cidhook) should be used as the server.

`cidhook` http servers have 2 endpoints:

- `/:cid` - `POST` - Pins the supplied IPFS cid
- `/:cid` - `DELETE` - Unpins the supplied IPFS cid

The `cidhook` server runs a [`jsipfs`](https://github.com/ipfs/js-ipfs) node with requested content pinned.

### CLI

The `cidhook` command can be used to interact with remote `cidhook` instances.

`cidhook <url> <cid> [pin|unpin]`

The CLI is a thin wrapper for making the actual http request.

## License

MIT
