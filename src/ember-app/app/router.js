import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mega-test-авто-l');
  this.route('i-i-s-mega-test-авто-e',
  { path: 'i-i-s-mega-test-авто-e/:id' });
  this.route('i-i-s-mega-test-авто-e.new',
  { path: 'i-i-s-mega-test-авто-e/new' });
  this.route('i-i-s-mega-test-билет-l');
  this.route('i-i-s-mega-test-билет-e',
  { path: 'i-i-s-mega-test-билет-e/:id' });
  this.route('i-i-s-mega-test-билет-e.new',
  { path: 'i-i-s-mega-test-билет-e/new' });
  this.route('i-i-s-mega-test-водитель-l');
  this.route('i-i-s-mega-test-водитель-e',
  { path: 'i-i-s-mega-test-водитель-e/:id' });
  this.route('i-i-s-mega-test-водитель-e.new',
  { path: 'i-i-s-mega-test-водитель-e/new' });
  this.route('i-i-s-mega-test-кардр-l');
  this.route('i-i-s-mega-test-кардр-e',
  { path: 'i-i-s-mega-test-кардр-e/:id' });
  this.route('i-i-s-mega-test-кардр-e.new',
  { path: 'i-i-s-mega-test-кардр-e/new' });
  this.route('i-i-s-mega-test-паркомат-l');
  this.route('i-i-s-mega-test-паркомат-e',
  { path: 'i-i-s-mega-test-паркомат-e/:id' });
  this.route('i-i-s-mega-test-паркомат-e.new',
  { path: 'i-i-s-mega-test-паркомат-e/new' });
});

export default Router;
