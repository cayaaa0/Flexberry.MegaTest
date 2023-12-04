import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  паркомат: DS.belongsTo('i-i-s-mega-test-паркомат', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-mega-test-кардр.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-mega-test-кардр.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КардрE', 'i-i-s-mega-test-кардр', {
    iD: attr('ID', { index: 0 }),
    паркомат: belongsTo('i-i-s-mega-test-паркомат', 'Паркомат', {
      статОпл: attr('Стат опл', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'статОпл' })
  });

  modelClass.defineProjection('КардрL', 'i-i-s-mega-test-кардр', {
    iD: attr('ID', { index: 0 }),
    паркомат: belongsTo('i-i-s-mega-test-паркомат', 'Стат опл', {
      статОпл: attr('Стат опл', { index: 1 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('КардридерE', 'i-i-s-mega-test-кардр', {
    iD: attr('ID', { index: 0 })
  });

  modelClass.defineProjection('КардридерL', 'i-i-s-mega-test-кардр', {
    iD: attr('ID', { index: 0 })
  });
};
