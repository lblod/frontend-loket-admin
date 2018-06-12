import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'naam']),

  naam: attr(),
  werkingsgebied: belongsTo('werkingsgebied', { inverse: 'bestuurseenheid' }),
  classificatie: belongsTo('bestuurseenheid-classificatie-code', { inverse: null }),
  primaireSite: belongsTo('vestiging', { inverse: null }),
  politiezone: belongsTo('organisatie', { inverse: null }),
  contactinfo: hasMany('contact-punt', { inverse: null }),
  posities: hasMany('positie', { inverse: 'isPositieIn' }),
  bestuursorganen: hasMany('bestuursorgaan', { inverse: 'bestuurseenheid' })
});
