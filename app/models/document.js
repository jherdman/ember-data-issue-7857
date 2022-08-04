import Model, { attr, belongsTo } from '@ember-data/model';

export default class DocumentModel extends Model {
  @belongsTo('bookmark') bookmark;

  @attr('string') name;
}
