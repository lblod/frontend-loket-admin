import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('rechtsgrond-aanstelling');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-aanstelling");
      }).catch( function() {
        alert("Creation of rechtsgrond-aanstelling failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-aanstelling");
      }).catch( function() {
        alert("Cancelling creation of rechtsgrond-aanstelling failed");
      });
    }
  }
});
