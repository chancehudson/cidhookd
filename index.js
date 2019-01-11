const express = require('express');
const app = express();

const IPFS = require('ipfs');
const node = new IPFS();

app.get('/:cid', handler);

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // Pin the path
      await node.pin.add(req.params.cid, {
        recursive: true
      });
      console.log(`Pinned cid ${req.params.cid}`);
      res.status(204).end();
    } else if (req.method === 'DELETE') {
      // Remove the pin
      await node.pin.rm(req.params.cid, {
        recursive: true
      });
      console.log(`Unpinned cid ${req.params.cid}`);
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.end(err);
  }
}

node.on('ready', () => {
  app.listen(3000, () => console.log(`cidhook listening on port 3000!`));
});
