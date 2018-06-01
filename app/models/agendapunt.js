import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'beschrijving', 'geplandOpenbaar', 'heeftOntwerpbesluit', 'titel', 'type']),

  beschrijving: attr(),
  geplandOpenbaar: attr(),
  heeftOntwerpbesluit: attr(),
  titel: attr(),
  type: attr('uri-set'),
  vorigeAgendapunt: belongsTo('agendapunt', { inverse: null }),
  agenda: belongsTo('agenda', { inverse: 'agendapunten' }),
  referenties: hasMany('agendapunt', { inverse: null })
});
