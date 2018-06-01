import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'index', 'displayType', 'label', 'options', 'identifier']),

  index: attr(),
  displayType: attr(),
  label: attr(),
  options: attr(),
  identifier: attr(),
  dynamicSubforms: hasMany('dynamic-subform', { inverse: null })
});
