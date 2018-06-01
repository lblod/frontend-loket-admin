import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'geplandeStart', 'gestartOpTijdstip', 'geeindigdOpTijdstip', 'opLocatie', 'afgeleidUit']),

  geplandeStart: attr('datetime'),
  gestartOpTijdstip: attr('datetime'),
  geeindigdOpTijdstip: attr('datetime'),
  opLocatie: attr(),
  afgeleidUit: attr(),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: null }),
  secretaris: belongsTo('mandataris', { inverse: null }),
  voorzitter: belongsTo('mandataris', { inverse: null }),
  agenda: belongsTo('agenda', { inverse: 'zitting' }),
  notulen: belongsTo('editor-document', { inverse: null }),
  behandeldeAgendapunten: hasMany('behandeling-van-agendapunt', { inverse: 'zitting' }),
  aanwezigenBijStart: hasMany('mandataris', { inverse: null })
});
