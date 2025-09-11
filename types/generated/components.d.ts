import type { Attribute, Schema } from '@strapi/strapi';

export interface FeatureFeature extends Schema.Component {
  collectionName: 'components_feature_feature';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_shared_seo';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
    metaTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'feature.feature': FeatureFeature;
      'seo.seo': SeoSeo;
    }
  }
}
