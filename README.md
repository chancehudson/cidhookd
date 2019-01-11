# cidhook [![Build Status](https://travis-ci.org/JChanceHud/cidhook.svg?branch=master)](https://travis-ci.org/JChanceHud/cidhook) [![](https://img.shields.io/npm/v/cidhook.svg)](https://www.npmjs.com/package/cidhook)

A simple web server that listens for IPFS cids to pin.

## Install

Install with `npm install -g cidhook`

## Usage

Running the `cidhook` command creates an http server on port 3000 listening for requests at `/:cid`.

### Pinning

A `POST` request will pin the content:

`curl -X POST http://localhost:3000/QmTga2UJ6BkZbCPyz8YL2Pucxpwoyx4t27PnTNULeCrx4y`

### Unpinning

A `DELETE` request will unpin the content:

`curl -X DELETE http://localhost:3000/QmTga2UJ6BkZbCPyz8YL2Pucxpwoyx4t27PnTNULeCrx4y`
