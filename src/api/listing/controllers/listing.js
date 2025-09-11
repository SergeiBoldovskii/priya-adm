'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::listing.listing', ({ strapi }) => ({
  async ping(ctx) {
    ctx.body = { ok: true };
  },
}));
