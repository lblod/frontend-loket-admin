import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('validation-execution');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "validation-executionen");
      }).catch( function() {
        alert("Creation of validation-execution failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "validation-executionen");
      }).catch( function() {
        alert("Cancelling creation of validation-execution failed");
      });
    }
  }
});
