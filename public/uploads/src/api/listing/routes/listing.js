'use strict';

module.exports = {
  routes: [
    { method: 'GET',    path: '/listings',        handler: 'listing.find',    config: { policies: [], middlewares: [] } },
    { method: 'GET',    path: '/listings/:id',    handler: 'listing.findOne', config: { policies: [], middlewares: [] } },
    { method: 'POST',   path: '/listings',        handler: 'listing.create',  config: { policies: [], middlewares: [] } },
    { method: 'PUT',    path: '/listings/:id',    handler: 'listing.update',  config: { policies: [], middlewares: [] } },
    { method: 'DELETE', path: '/listings/:id',    handler: 'listing.delete',  config: { policies: [], middlewares: [] } },

    // на будущее: локализации (i18n добавит нужную логику в контроллер)
    { method: 'POST',   path: '/listings/:id/localizations', handler: 'listing.createLocalization', config: { policies: [], middlewares: [] } },
  ],
};
