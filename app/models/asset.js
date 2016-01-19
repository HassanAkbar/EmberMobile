import DS from 'ember-data';

export default DS.Model.extend({
  sequenceNum:  DS.attr(),
  name: DS.attr(),
  description: DS.attr()
});
