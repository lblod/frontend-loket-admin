import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'naam', 'werkingsgebied']),

  naam: attr(),
  werkingsgebied: attr(),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: 'bestuurseenheid' }),
  classificatie: belongsTo('bestuurseenheid-classificatie-code', { inverse: null })
});
