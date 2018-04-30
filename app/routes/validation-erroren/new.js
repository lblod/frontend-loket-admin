import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('validation-error');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "validation-erroren");
      }).catch( function() {
        alert("Creation of validation-error failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "validation-erroren");
      }).catch( function() {
        alert("Cancelling creation of validation-error failed");
      });
    }
  }
});
