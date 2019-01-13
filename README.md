# cidhookd [![Build Status](https://travis-ci.org/JChanceHud/cidhookd.svg?branch=master)](https://travis-ci.org/JChanceHud/cidhookd) [![](https://img.shields.io/npm/v/cidhookd.svg)](https://www.npmjs.com/package/cidhookd)

A server for easily pinning IPFS cids from ephemeral IPFS nodes (like on CI, local machine, etc).

## Install

Install the server with `npm install -g cidhookd`.

## Usage

Once installed the server can be run with the `cidhookd` command.

The docker image [`jchancehud/cidhookd`](https://cloud.docker.com/u/jchancehud/repository/docker/jchancehud/cidhook) can also be used.

## API

`cidhookd` http servers have 2 endpoints:

- `/:cid` - `POST` - Pins the supplied IPFS cid
- `/:cid` - `DELETE` - Unpins the supplied IPFS cid

The `cidhookd` server runs a [`jsipfs`](https://github.com/ipfs/js-ipfs) node with requested content pinned.

### CLI

The [`cidhook`](https://github.com/jchancehud/cidhook) package can be used to interact with `cidhookd` servers.

## License

MIT
