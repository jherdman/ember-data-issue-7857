import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  const finalConfig = {
    ...config,

    models: {
      ...discoverEmberDataModels(), ...config.models,
    },

    routes() {
      this.namespace = '/api';
      this.resource('documents');
      this.resource('bookmarks');
    },
  };

  return createServer(finalConfig);
}
