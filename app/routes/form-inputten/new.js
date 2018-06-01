import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('form-input');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "form-inputten");
      }).catch( function() {
        alert("Creation of form-input failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "form-inputten");
      }).catch( function() {
        alert("Cancelling creation of form-input failed");
      });
    }
  }
});
