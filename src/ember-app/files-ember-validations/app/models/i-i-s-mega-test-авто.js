import {
  defineNamespace,
  defineProjections,
  Model as АвтоMixin
} from '../mixins/regenerated/models/i-i-s-mega-test-авто';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвтоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
