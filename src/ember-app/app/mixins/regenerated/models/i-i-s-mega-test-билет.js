import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вреОконч: DS.attr('date'),
  вреПеч: DS.attr('date'),
  ном: DS.attr('number'),
  водитель: DS.belongsTo('i-i-s-mega-test-водитель', { inverse: null, async: false }),
  паркомат: DS.belongsTo('i-i-s-mega-test-паркомат', { inverse: null, async: false })
});

export let ValidationRules = {
  вреОконч: {
    descriptionKey: 'models.i-i-s-mega-test-билет.validations.вреОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  вреПеч: {
    descriptionKey: 'models.i-i-s-mega-test-билет.validations.вреПеч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  ном: {
    descriptionKey: 'models.i-i-s-mega-test-билет.validations.ном.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  водитель: {
    descriptionKey: 'models.i-i-s-mega-test-билет.validations.водитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  паркомат: {
    descriptionKey: 'models.i-i-s-mega-test-билет.validations.паркомат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БилетE', 'i-i-s-mega-test-билет', {
    
  });

  modelClass.defineProjection('БилетL', 'i-i-s-mega-test-билет', {
    
  });
};
