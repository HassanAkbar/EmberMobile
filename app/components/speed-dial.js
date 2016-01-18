import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var framework = this.get('framework-seven').get('framework');
    var dom7 = this.get('framework-seven').get('dom');

    // NOTE(SOHAIB): Need to figure this out...
    this.get('framework-seven').get('framework').init();

    this.$().hide();
    this.$().fadeIn('slow');
  }
});
