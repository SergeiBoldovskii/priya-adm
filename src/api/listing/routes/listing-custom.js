'use strict';

module.exports = {
  routes: [
    { method: 'GET', path: '/listings/ping', handler: 'listing.ping', config: { auth: false } },
    { method: 'GET', path: '/listings/cts',  handler: 'listing.cts',  config: { auth: false } },

    // на всякий случай даём явный роут на получение списка,
    // даже если core-роутер должен был его зарегистрировать
    { method: 'GET', path: '/listings', handler: 'listing.find', config: { auth: false } },
    { method: 'GET', path: '/listings/:id', handler: 'listing.findOne', config: { auth: false } },
  ],
};
