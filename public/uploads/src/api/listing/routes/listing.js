'use strict';

module.exports = {
  routes: [
    // list
    { method: 'GET',    path: '/listings',        handler: 'listing.find',    config: { policies: [] } },
    // single by id
    { method: 'GET',    path: '/listings/:id',    handler: 'listing.findOne', config: { policies: [] } },
    // create
    { method: 'POST',   path: '/listings',        handler: 'listing.create',  config: { policies: [] } },
    // update
    { method: 'PUT',    path: '/listings/:id',    handler: 'listing.update',  config: { policies: [] } },
    // delete
    { method: 'DELETE', path: '/listings/:id',    handler: 'listing.delete',  config: { policies: [] } },
  ],
};
