import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('tijdsgebonden-entiteit');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "tijdsgebonden-entiteiten");
      }).catch( function() {
        alert("Creation of tijdsgebonden-entiteit failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "tijdsgebonden-entiteiten");
      }).catch( function() {
        alert("Cancelling creation of tijdsgebonden-entiteit failed");
      });
    }
  }
});
