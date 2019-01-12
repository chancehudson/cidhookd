#!/usr/bin/env node

const fetch = require('node-fetch');
const [ _, __, _domain, cid, _method ] = process.argv;

const { CIDHOOK_SECRET } = process.env;

if (process.argv.length < 3) {
  console.log('\nUsage: cidhook <url> <cid> [pin|unpin]\n');
  process.exit(0);
}

const domain = _domain.indexOf('http') === 0 ? _domain : `https://${_domain}`;
const method = _method === 'unpin' ? 'DELETE' : 'POST';

fetch(`${domain}/${cid}`, {
  method,
  headers: {
    'Authorization': CIDHOOK_SECRET
  }
})
  .then(res => {
    if (res.status !== 204) {
      console.log(`Non-204 response received: ${res.status})`);
      process.exit(1);
    }
    console.log(`cid ${cid} successfully ${method === 'DELETE' ? 'un-' : ''}pinned`)
  })
  .catch(err => {
    console.log('Error', err);
    process.exit(1);
  });
