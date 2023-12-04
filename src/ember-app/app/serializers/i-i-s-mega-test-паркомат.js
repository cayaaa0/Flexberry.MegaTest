import { Serializer as ПаркоматSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mega-test-паркомат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПаркоматSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
