import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'created', 'modified', 'sentDate', 'description', 'remark', 'temporalCoverage', 'businessIdentifier', 'businessName', 'nomenclature', 'dateOfEntryIntoForce', 'endDate', 'isModification', 'hasExtraTaxRates', 'agendaItemCount', 'sessionDate', 'title']),

  created: attr('datetime'),
  modified: attr('datetime'),
  sentDate: attr('datetime'),
  description: attr(),
  remark: attr(),
  temporalCoverage: attr(),
  businessIdentifier: attr(),
  businessName: attr(),
  nomenclature: attr(),
  dateOfEntryIntoForce: attr('date'),
  endDate: attr('date'),
  isModification: attr(),
  hasExtraTaxRates: attr(),
  agendaItemCount: attr(),
  sessionDate: attr('datetime'),
  title: attr(),
  status: belongsTo('document-status', { inverse: null }),
  lastModifier: belongsTo('gebruiker', { inverse: null }),
  bestuurseenheid: belongsTo('bestuurseenheid', { inverse: null }),
  formSolution: belongsTo('form-solution', { inverse: 'inzendingVoorToezicht' }),
  inzendingType: belongsTo('toezicht-inzending-type', { inverse: null }),
  besluitType: belongsTo('besluit-type', { inverse: null }),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: null }),
  files: hasMany('file', { inverse: null }),
  taxRates: hasMany('tax-rate', { inverse: null })
});
