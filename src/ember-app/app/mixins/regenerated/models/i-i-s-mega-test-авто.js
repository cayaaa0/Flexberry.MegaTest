import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string'),
  водитель: DS.belongsTo('i-i-s-mega-test-водитель', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-mega-test-авто.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  водитель: {
    descriptionKey: 'models.i-i-s-mega-test-авто.validations.водитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвтоE', 'i-i-s-mega-test-авто', {
    номер: attr('Номер', { index: 0 }),
    водитель: belongsTo('i-i-s-mega-test-водитель', 'Водитель', {
      тел: attr('Тел', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'тел' })
  });

  modelClass.defineProjection('АвтоL', 'i-i-s-mega-test-авто', {
    номер: attr('Номер', { index: 0 }),
    водитель: belongsTo('i-i-s-mega-test-водитель', 'Тел', {
      тел: attr('Тел', { index: 1 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('АвтомобильE', 'i-i-s-mega-test-авто', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('АвтомобильL', 'i-i-s-mega-test-авто', {
    номер: attr('Номер', { index: 0 })
  });
};
