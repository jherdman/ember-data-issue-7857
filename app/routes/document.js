import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocumentRoute extends Route {
  @service('store') store;

  model() {
    return this.store.findAll('document');
  }
}
