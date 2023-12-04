import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mega-test-авто', 'Unit | Serializer | i-i-s-mega-test-авто', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-mega-test-авто',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-mega-test-авто',
    'model:i-i-s-mega-test-билет',
    'model:i-i-s-mega-test-водитель',
    'model:i-i-s-mega-test-кардр',
    'model:i-i-s-mega-test-паркомат',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
