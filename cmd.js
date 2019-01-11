#!/usr/bin/env node

const fetch = require('node-fetch');
const [ _, __, _domain, cid, method ] = process.argv;

const domain = _domain.indexOf('http') === 0 ? _domain : `https://${_domain}`;
console.log(`${domain}/${cid}`);

fetch(`${domain}/${cid}`, {
  method: method || 'POST'
})
  .then(res => console.log(res))
  .catch(err => console.log('err', err));
