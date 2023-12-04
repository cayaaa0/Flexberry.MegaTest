import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMega_testАвтоLForm from './forms/i-i-s-mega-test-авто-l';
import IISMega_testБилетLForm from './forms/i-i-s-mega-test-билет-l';
import IISMega_testВодительLForm from './forms/i-i-s-mega-test-водитель-l';
import IISMega_testКардрLForm from './forms/i-i-s-mega-test-кардр-l';
import IISMega_testПаркоматLForm from './forms/i-i-s-mega-test-паркомат-l';
import IISMega_testАвтоEForm from './forms/i-i-s-mega-test-авто-e';
import IISMega_testБилетEForm from './forms/i-i-s-mega-test-билет-e';
import IISMega_testВодительEForm from './forms/i-i-s-mega-test-водитель-e';
import IISMega_testКардрEForm from './forms/i-i-s-mega-test-кардр-e';
import IISMega_testПаркоматEForm from './forms/i-i-s-mega-test-паркомат-e';
import IISMega_testАвтоModel from './models/i-i-s-mega-test-авто';
import IISMega_testБилетModel from './models/i-i-s-mega-test-билет';
import IISMega_testВодительModel from './models/i-i-s-mega-test-водитель';
import IISMega_testКардрModel from './models/i-i-s-mega-test-кардр';
import IISMega_testПаркоматModel from './models/i-i-s-mega-test-паркомат';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mega-test-авто': IISMega_testАвтоModel,
    'i-i-s-mega-test-билет': IISMega_testБилетModel,
    'i-i-s-mega-test-водитель': IISMega_testВодительModel,
    'i-i-s-mega-test-кардр': IISMega_testКардрModel,
    'i-i-s-mega-test-паркомат': IISMega_testПаркоматModel
  },

  'application-name': 'Mega_test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Mega_test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mega_test',
          title: 'Mega_test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'mega-test': {
          caption: 'Mega_test',
          title: 'Mega_test',
          'i-i-s-mega-test-кардр-l': {
            caption: 'Кардр',
            title: ''
          },
          'i-i-s-mega-test-водитель-l': {
            caption: 'Водитель',
            title: ''
          },
          'i-i-s-mega-test-авто-l': {
            caption: 'Авто',
            title: ''
          },
          'i-i-s-mega-test-билет-l': {
            caption: 'Билет',
            title: ''
          },
          'i-i-s-mega-test-паркомат-l': {
            caption: 'Паркомат',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-mega-test-авто-l': IISMega_testАвтоLForm,
    'i-i-s-mega-test-билет-l': IISMega_testБилетLForm,
    'i-i-s-mega-test-водитель-l': IISMega_testВодительLForm,
    'i-i-s-mega-test-кардр-l': IISMega_testКардрLForm,
    'i-i-s-mega-test-паркомат-l': IISMega_testПаркоматLForm,
    'i-i-s-mega-test-авто-e': IISMega_testАвтоEForm,
    'i-i-s-mega-test-билет-e': IISMega_testБилетEForm,
    'i-i-s-mega-test-водитель-e': IISMega_testВодительEForm,
    'i-i-s-mega-test-кардр-e': IISMega_testКардрEForm,
    'i-i-s-mega-test-паркомат-e': IISMega_testПаркоматEForm
  },

});

export default translations;
