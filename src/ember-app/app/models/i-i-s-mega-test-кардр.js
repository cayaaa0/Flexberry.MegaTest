import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КардрMixin
} from '../mixins/regenerated/models/i-i-s-mega-test-кардр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КардрMixin, Validations, {
});

defineProjections(Model);

export default Model;
