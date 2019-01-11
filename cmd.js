#!/usr/bin/env node

const fetch = require('node-fetch');
const [ _, __, _domain, cid, method ] = process.argv;

const domain = _domain.indexOf('http') === 0 ? _domain : `https://${_domain}`;

fetch(`${domain}/${cid}`, {
  method: method || 'POST'
})
  .then(res => {
    if (res.status !== 204) throw new Error('Non-204 response received');
    console.log(`cid ${cid} successfully ${method === 'DELETE' ? 'un-' : ''}hooked`)
  })
  .catch(err => console.log('Error', err));
