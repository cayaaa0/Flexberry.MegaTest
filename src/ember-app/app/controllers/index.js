import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.mega-test.caption'),
          title: i18n.t('forms.application.sitemap.mega-test.title'),
          children: [{
            link: 'i-i-s-mega-test-кардр-l',
            caption: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-кардр-l.caption'),
            title: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-кардр-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-mega-test-водитель-l',
            caption: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-водитель-l.title'),
            children: null
          }, {
            link: 'i-i-s-mega-test-авто-l',
            caption: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-авто-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-mega-test-билет-l',
            caption: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-билет-l.caption'),
            title: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-билет-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-mega-test-паркомат-l',
            caption: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-паркомат-l.caption'),
            title: i18n.t('forms.application.sitemap.mega-test.i-i-s-mega-test-паркомат-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})