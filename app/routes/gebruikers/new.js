import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('gebruiker');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "gebruikers");
      }).catch( function() {
        alert("Creation of gebruiker failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "gebruikers");
      }).catch( function() {
        alert("Cancelling creation of gebruiker failed");
      });
    }
  }
});
