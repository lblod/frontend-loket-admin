import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'voornaam', 'achternaam', 'rijksregisterNummer']),

  voornaam: attr(),
  achternaam: attr(),
  rijksregisterNummer: attr(),
  account: hasMany('account', { inverse: 'gebruiker' }),
  bestuurseenheden: hasMany('bestuurseenheid', { inverse: null })
});
