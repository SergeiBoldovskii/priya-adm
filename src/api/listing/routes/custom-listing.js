'use strict';
module.exports = {
  routes: [
    { method: 'GET', path: '/listings/ping', handler: 'listing.find', config: { auth: false } }
  ],
};
