#!/usr/bin/env node

const fetch = require('node-fetch');
const [ _, __, _domain, cid, _method ] = process.argv;

if (process.argv.length < 3) {
  console.log('\nUsage: cidhook <url> <cid> [pin|unpin]\n');
  process.exit(0);
}

const domain = _domain.indexOf('http') === 0 ? _domain : `https://${_domain}`;
const method = _method === 'unpin' ? 'DELETE' : 'POST';

fetch(`${domain}/${cid}`, {
  method
})
  .then(res => {
    if (res.status !== 204) throw new Error('Non-204 response received');
    console.log(`cid ${cid} successfully ${method === 'DELETE' ? 'un-' : ''}hooked`)
  })
  .catch(err => console.log('Error', err));
