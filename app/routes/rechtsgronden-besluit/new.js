import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('rechtsgrond-besluit');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-besluit");
      }).catch( function() {
        alert("Creation of rechtsgrond-besluit failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-besluit");
      }).catch( function() {
        alert("Cancelling creation of rechtsgrond-besluit failed");
      });
    }
  }
});
