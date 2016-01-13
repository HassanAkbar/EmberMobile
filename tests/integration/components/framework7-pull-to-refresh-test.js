import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('framework7-pull-to-refresh', 'Integration | Component | framework7 pull to refresh', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{framework7-pull-to-refresh}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#framework7-pull-to-refresh}}
      template block text
    {{/framework7-pull-to-refresh}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
