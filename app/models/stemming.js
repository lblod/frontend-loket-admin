import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'aantalOnthouders', 'aantalTegenstanders', 'aantalVoorstanders', 'geheim', 'title', 'gevolg', 'onderwerp']),

  aantalOnthouders: attr(),
  aantalTegenstanders: attr(),
  aantalVoorstanders: attr(),
  geheim: attr(),
  title: attr(),
  gevolg: attr('language-string'),
  onderwerp: attr('language-string'),
  aanwezigen: hasMany('mandataris', { inverse: null }),
  onthouders: hasMany('mandataris', { inverse: null }),
  stemmers: hasMany('mandataris', { inverse: null }),
  tegenstanders: hasMany('mandataris', { inverse: null }),
  voorstanders: hasMany('mandataris', { inverse: null })
});
