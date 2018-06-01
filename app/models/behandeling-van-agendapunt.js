import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'openbaar', 'gevolg', 'afgeleidUit']),

  openbaar: attr(),
  gevolg: attr('language-string'),
  afgeleidUit: attr(),
  zitting: belongsTo('zitting', { inverse: 'behandeldeAgendapunten' }),
  vorigeBehandelingVanAgendapunt: belongsTo('behandeling-van-agendapunt', { inverse: null }),
  onderwerp: belongsTo('agendapunt', { inverse: null }),
  secretaris: belongsTo('mandataris', { inverse: null }),
  voorzitter: belongsTo('mandataris', { inverse: null }),
  besluiten: hasMany('besluit', { inverse: 'volgendUitBehandelingVanAgendapunt' }),
  aanwezigen: hasMany('mandataris', { inverse: null }),
  stemmingen: hasMany('stemming', { inverse: null })
});
