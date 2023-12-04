import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mega-test-кардр', 'Unit | Model | i-i-s-mega-test-кардр', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
