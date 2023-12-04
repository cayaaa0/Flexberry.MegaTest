import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  карта: DS.attr('string'),
  тел: DS.attr('string')
});

export let ValidationRules = {
  карта: {
    descriptionKey: 'models.i-i-s-mega-test-водитель.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тел: {
    descriptionKey: 'models.i-i-s-mega-test-водитель.validations.тел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВодительE', 'i-i-s-mega-test-водитель', {
    карта: attr('Номер карты', { index: 0 }),
    тел: attr('Номер телефона', { index: 1 })
  });

  modelClass.defineProjection('ВодительL', 'i-i-s-mega-test-водитель', {
    
  });
};
