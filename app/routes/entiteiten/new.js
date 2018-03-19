import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('entiteit');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "entiteiten");
      }).catch( function() {
        alert("Creation of entiteit failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "entiteiten");
      }).catch( function() {
        alert("Cancelling creation of entiteit failed");
      });
    }
  }
});
