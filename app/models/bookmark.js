import Model, { belongsTo } from '@ember-data/model';

export default class BookmarkModel extends Model {
  @belongsTo('document') document;
}
