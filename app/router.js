import Ember from 'ember';
import config from './config/environment';

console.log('in the router');
console.log(config.APP.IS_RENTALS);

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('framework7');
});

export default Router;
