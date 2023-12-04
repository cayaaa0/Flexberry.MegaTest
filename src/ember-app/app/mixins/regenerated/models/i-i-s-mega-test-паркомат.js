import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD2: DS.attr('number'),
  вреОпл: DS.attr('date'),
  свМеста: DS.attr('number'),
  статОпл: DS.attr('string'),
  стоимПарк: DS.attr('number')
});

export let ValidationRules = {
  iD2: {
    descriptionKey: 'models.i-i-s-mega-test-паркомат.validations.iD2.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  вреОпл: {
    descriptionKey: 'models.i-i-s-mega-test-паркомат.validations.вреОпл.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  свМеста: {
    descriptionKey: 'models.i-i-s-mega-test-паркомат.validations.свМеста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статОпл: {
    descriptionKey: 'models.i-i-s-mega-test-паркомат.validations.статОпл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимПарк: {
    descriptionKey: 'models.i-i-s-mega-test-паркомат.validations.стоимПарк.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаркоматE', 'i-i-s-mega-test-паркомат', {
    
  });

  modelClass.defineProjection('ПаркоматL', 'i-i-s-mega-test-паркомат', {
    iD2: attr('ID', { index: 0 }),
    вреОпл: attr('Время оплаты', { index: 1 }),
    свМеста: attr('Свободные места', { index: 2 }),
    статОпл: attr('Статус оплаты', { index: 3 }),
    стоимПарк: attr('Стоимость парковки', { index: 4 })
  });
};
