import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'nummer', 'inhoud', 'taal', 'titel', 'page', 'score']),

  nummer: attr(),
  inhoud: attr(),
  taal: attr(),
  titel: attr(),
  page: attr(),
  score: attr(),
  realisatie: belongsTo('rechtsgrond-artikel', { inverse: null })
});
