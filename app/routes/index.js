import Ember from 'ember';

export default Ember.Route.extend({
  pageNo: 2,
  model() {
    return this.store.findAll('asset');
  },
  actions: {
    dosomethingplz: function() {
      var self = this;

      this.store.query('asset', { page: self.get('pageNo') } ).then((json) =>   {
        var nextPage = this.get('pageNo');
        this.set('pageNo', nextPage + 1);
        this.refresh();
      });
    },
  }

});
