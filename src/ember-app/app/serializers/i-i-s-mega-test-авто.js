import { Serializer as АвтоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mega-test-авто';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АвтоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
