import Ember from 'ember';

export default Ember.Route.extend({
  page: 1,
  model(params) {
    
    return this.store.query('asset',{page: '1'});
  },

 actions: {
    dosomethingplz: function() {
        
      this.store.query('asset', { page: '2' } ).then((json) =>   {
        var assets = [];
        assets.pushObjects(json.toArray());
        assets.pushObjects(this.currentModel.toArray());
        this.set('currentModel', assets);
        //debugger;
        //this.currentModel.addObjects(json.toArray());
        });
      }

    }
  });
