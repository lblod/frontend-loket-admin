import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('rechtsgrond-artikel');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-artikel");
      }).catch( function() {
        alert("Creation of rechtsgrond-artikel failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-artikel");
      }).catch( function() {
        alert("Cancelling creation of rechtsgrond-artikel failed");
      });
    }
  }
});
