import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var framework = this.get('framework-seven').get('framework');
    this.get('framework-seven').get('framework').init(); // WHY?
    var dom7 = this.get('framework-seven').get('dom');

    var ptrContent = dom7('.pull-to-refresh-content');
    console.log('have i found the dom');
    console.log(ptrContent);
    ptrContent.on('refresh', function (e) {
      
      // var page = this.get('page');
      // console.log('am i working' + page);
      // {{debugger}}
      framework.pullToRefreshDone();
    })
  }
});

