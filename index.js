const express = require('express');
const app = express();

const IPFS = require('ipfs');
const node = new IPFS();

const { CIDHOOK_SECRET } = process.env;

app.use((req, res, next) => {
  if (!CIDHOOK_SECRET) return next();
  if (req.get('Authorization') !== CIDHOOK_SECRET) {
    next(new Error('Invalid Authorization supplied'));
  } else {
    next();
  }
});

app.post('/:cid', async (req, res) => {
  try {
    console.log(`Pinning cid ${req.params.cid}`);
    await node.pin.add(req.params.cid, {
      recursive: true
    });
    res.status(204).end();
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.delete('/:cid', async (req, res) => {
  try {
    console.log(`Unpinning cid ${req.params.cid}`);
    await node.pin.rm(req.params.cid, {
      recursive: true
    });
  } catch (_) {
  } finally {
    res.status(204).end();
  }
});

node.on('ready', () => {
  app.listen(3000, () => console.log(`cidhook listening on port 3000!`));
});
