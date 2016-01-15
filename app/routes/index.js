import Ember from 'ember';

export default Ember.Route.extend({
  page: 1,
  model(params) {
    return this.store.findAll('asset');
  },

 actions: {
    dosomethingplz: function() {
        
      this.store.query('asset', { page: '2' } ).then((json) =>   {
        this.refresh();
        });
      }

    }
  });
