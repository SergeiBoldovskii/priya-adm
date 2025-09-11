export default {
  routes: [
    { method: 'GET', path: '/listings', handler: 'listing.find' },
    { method: 'GET', path: '/listings/:id', handler: 'listing.findOne' },
    { method: 'POST', path: '/listings', handler: 'listing.create' },
    { method: 'PUT', path: '/listings/:id', handler: 'listing.update' },
    { method: 'DELETE', path: '/listings/:id', handler: 'listing.delete' }
  ]
};
