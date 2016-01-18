import Ember from 'ember';

export default Ember.Route.extend({
  pageNo: 2,
  model(params) {
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

    yoFaizan: function() {
      alert('yo faizan');
    },
    yoHassan: function() {
      alert('yo hassan');
    },
    yoZeeshan: function() {
      alert('yo boo');
    }
  }
});
