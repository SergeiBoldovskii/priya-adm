'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/listings/ping', handler: 'listing.ping', config: { auth: false } },
    { method: 'GET', path: '/debug/cts',     handler: 'listing.cts',  config: { auth: false } }
  ],
};
