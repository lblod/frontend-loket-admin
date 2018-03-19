import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('kandidatenlijst');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "kandidatenlijsten");
      }).catch( function() {
        alert("Creation of kandidatenlijst failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "kandidatenlijsten");
      }).catch( function() {
        alert("Cancelling creation of kandidatenlijst failed");
      });
    }
  }
});
