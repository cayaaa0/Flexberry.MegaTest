import {
  defineNamespace,
  defineProjections,
  Model as КардрMixin
} from '../mixins/regenerated/models/i-i-s-mega-test-кардр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КардрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
