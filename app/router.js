import Ember from 'ember';
import config from './config/environment';

console.log('in the router');
console.log(config.APP.IS_RENTALS);

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('framework7');
  this.route('show', {path: '/show/:asset_id'});
});

export default Router;
