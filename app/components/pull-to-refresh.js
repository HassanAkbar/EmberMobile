import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var framework = this.get('framework-seven').get('framework');
    this.get('framework-seven').get('framework').init(); // WHY?
    var dom7 = this.get('framework-seven').get('dom');

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

