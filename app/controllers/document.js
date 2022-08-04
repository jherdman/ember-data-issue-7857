import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DocumentController extends Controller {
  @service('store') store;

  @action
  async toggleBookmark(document) {
    if (document.belongsTo('bookmark').id()) {
      const bookmark = await document.bookmark;
      await bookmark.destroyRecord();
    } else {
      const newBookmark = this.store.createRecord('bookmark', { document });
      await newBookmark.save();
    }
  }
}
