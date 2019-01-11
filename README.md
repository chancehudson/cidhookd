# cidhook [![Build Status](https://travis-ci.org/JChanceHud/cidhook.svg?branch=master)](https://travis-ci.org/JChanceHud/cidhook) [![](https://img.shields.io/npm/v/cidhook.svg)](https://www.npmjs.com/package/cidhook)

A simple web server that listens for IPFS cids to pin via a tiny REST api.

## Install

Install with `npm install -g cidhook`

## Usage

The docker image [`jchancehud/cidhook`](https://cloud.docker.com/u/jchancehud/repository/docker/jchancehud/cidhook) can be used as a server.

## API

`cidhook` http servers have 2 endpoints:

- `/:cid` - `POST` - Pins the supplied IPFS cid
- `/:cid` - `DELETE` - Unpins the supplied IPFS cid

### CLI

The `cidhook` command can be used to interact with remote `cidhook` instances.

`cidhook <url> <cid> [pin|unpin]`
