import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    return this._super(modelName, id, snapshot, requestType, query) + ".json"
  },
  host: 'http://materialise.lvh.me:3000',
  headers: {
    "token": "27b148dd353b7a9693bf1d023a2fb00d"
  }
});
