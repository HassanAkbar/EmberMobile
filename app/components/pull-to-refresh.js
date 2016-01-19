import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var framework = this.get('framework-seven').get('framework');
    var dom7 = this.get('framework-seven').get('dom');

    // NOTE(SOHAIB): Need to figure this out...
    //this.get('framework-seven').get('framework').initPullToRefresh(this.$());

    this.$().addClass('pull-to-refresh-content');
    this.set('hasPullToRefresh', true);
    framework.initPullToRefresh(this.$());


    var ptrContent = dom7('.pull-to-refresh-content');
    var self = this;

    ptrContent.on('refresh', function (e) {
      self.triggerAction({action: 'refresh', target: self});
      framework.pullToRefreshDone();
    })
  },
  actions: {
    refresh: function() {
      this.sendAction('action');
    }
  }
});

