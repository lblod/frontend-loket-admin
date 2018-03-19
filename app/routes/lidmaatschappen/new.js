import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('lidmaatschap');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "lidmaatschappen");
      }).catch( function() {
        alert("Creation of lidmaatschap failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "lidmaatschappen");
      }).catch( function() {
        alert("Cancelling creation of lidmaatschap failed");
      });
    }
  }
});
