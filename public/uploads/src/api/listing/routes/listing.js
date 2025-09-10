'use strict';

/**
 * ЯВНЫЙ формат, который ждёт Strapi + i18n:
 * объект с ключом 'content-api', внутри — { routes: [...] }
 */
module.exports = {
  'content-api': {
    routes: [
      // список
      { method: 'GET',    path: '/listings',        handler: 'listing.find',    config: { policies: [], middlewares: [] } },
      // по id
      { method: 'GET',    path: '/listings/:id',    handler: 'listing.findOne', config: { policies: [], middlewares: [] } },
      // создать
      { method: 'POST',   path: '/listings',        handler: 'listing.create',  config: { policies: [], middlewares: [] } },
      // обновить
      { method: 'PUT',    path: '/listings/:id',    handler: 'listing.update',  config: { policies: [], middlewares: [] } },
      // удалить
      { method: 'DELETE', path: '/listings/:id',    handler: 'listing.delete',  config: { policies: [], middlewares: [] } },
    ],
  },
};
