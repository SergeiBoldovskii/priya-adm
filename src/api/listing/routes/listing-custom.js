'use strict';

module.exports = {
  routes: [
    // диагностика
    { method: 'GET', path: '/listings/ping', handler: 'listing.ping', config: { auth: false } },
    { method: 'GET', path: '/listings/cts',  handler: 'listing.cts',  config: { auth: false } },

    // явные REST-роуты
    { method: 'GET', path: '/listings',      handler: 'listing.find',    config: { auth: false } },
    { method: 'GET', path: '/listings/:id',  handler: 'listing.findOne', config: { auth: false } },
  ],
};
