import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    return this._super(modelName, id, snapshot, requestType, query) + ".json"
  },
  host: 'http://hassan.lvh.me:3000',
  headers: {
    "token": "81ed1639d2a7cad24be17a5e0724bc39"
  }
});
