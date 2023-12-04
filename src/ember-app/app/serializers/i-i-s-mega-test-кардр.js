import { Serializer as КардрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mega-test-кардр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КардрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
