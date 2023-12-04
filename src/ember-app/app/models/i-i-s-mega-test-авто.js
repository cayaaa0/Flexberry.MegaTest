import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АвтоMixin
} from '../mixins/regenerated/models/i-i-s-mega-test-авто';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АвтоMixin, Validations, {
});

defineProjections(Model);

export default Model;
