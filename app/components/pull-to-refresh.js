import Ember from 'ember';

export default Ember.Component.extend({
  sortProps: ['sequenceNum:desc'],
  sortedAssets: Ember.computed.sort('model', 'sortProps'),
  bhatti: Ember.computed('foo',function()
  { 
    return this.get('foo').toArray().reverse();
  }).property('model.[]'),

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
  },
  

});

