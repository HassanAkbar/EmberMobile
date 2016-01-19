import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var framework = this.get('framework-seven').get('framework');
    var dom7 = this.get('framework-seven').get('dom');
  }
});
