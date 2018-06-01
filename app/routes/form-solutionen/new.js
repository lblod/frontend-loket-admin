import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('form-solution');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "form-solutionen");
      }).catch( function() {
        alert("Creation of form-solution failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "form-solutionen");
      }).catch( function() {
        alert("Cancelling creation of form-solution failed");
      });
    }
  }
});
