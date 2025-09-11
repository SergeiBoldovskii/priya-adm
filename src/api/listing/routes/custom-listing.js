'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/listings/ping', handler: 'listing.ping', config: { auth: false } }
  ],
};
