import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('bestuursorgaan-classificatie-code');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "bestuursorgaan-classificatie-codes");
      }).catch( function() {
        alert("Creation of bestuursorgaan-classificatie-code failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "bestuursorgaan-classificatie-codes");
      }).catch( function() {
        alert("Cancelling creation of bestuursorgaan-classificatie-code failed");
      });
    }
  }
});
