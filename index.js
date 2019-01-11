const express = require('express');
const app = express();

const IPFS = require('ipfs');
const node = new IPFS();

app.post('/:cid', async (req, res) => {
  try {
    // Pin the path
    await node.pin.add(req.params.cid, {
      recursive: true
    });
    console.log(`Pinned cid ${req.params.cid}`);
    res.status(204).end();
  } catch (err) {
    res.end(err);
  }
});
app.delete('/:cid', async (req, res) => {
  try {
    await node.pin.rm(req.params.cid, {
      recursive: true
    });
    console.log(`Unpinned cid ${req.params.cid}`);
    res.status(204).end();
  } catch (err) {
    res.end(err);
  }
});

node.on('ready', () => {
  app.listen(3000, () => console.log(`cidhook listening on port 3000!`));
});
