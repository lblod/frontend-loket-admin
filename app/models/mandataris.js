import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'rangorde', 'start', 'einde']),

  rangorde: attr('language-string'),
  start: attr('datetime'),
  einde: attr('datetime'),
  bekleedt: belongsTo('mandaat', { inverse: null }),
  heeftLidmaatschap: belongsTo('lidmaatschap', { inverse: 'lid' }),
  isBestuurlijkeAliasVan: belongsTo('persoon', { inverse: 'isAangesteldAls' }),
  status: belongsTo('mandataris-status-code', { inverse: null }),
  rechtsgrondenAanstelling: hasMany('rechtsgrond-aanstelling', { inverse: 'bekrachtigtAanstellingenVan' }),
  rechtsgrondenBeeindiging: hasMany('rechtsgrond-beeindiging', { inverse: 'bekrachtigtOntslagenVan' }),
  tijdelijkeVervangingen: hasMany('mandataris', { inverse: null }),
  beleidsdomein: hasMany('beleidsdomein-code', { inverse: 'mandatarissen' })
});
