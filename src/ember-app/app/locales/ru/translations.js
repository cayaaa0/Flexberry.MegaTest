import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Mega_test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mega_test',
          title: 'Mega_test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
