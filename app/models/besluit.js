import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'beschrijving', 'citeeropschrift', 'motivering', 'publicatiedatum', 'inhoud', 'taal', 'titel', 'score']),

  beschrijving: attr(),
  citeeropschrift: attr(),
  motivering: attr('language-string'),
  publicatiedatum: attr('date'),
  inhoud: attr(),
  taal: attr(),
  titel: attr(),
  score: attr(),
  realisatie: belongsTo('rechtsgrond-besluit', { inverse: null }),
  volgendUitBehandelingVanAgendapunt: belongsTo('behandeling-van-agendapunt', { inverse: 'besluiten' }),
  afgeleidUitNotule: belongsTo('editor-document', { inverse: null })
});
