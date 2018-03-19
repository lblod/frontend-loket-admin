import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('bestuursfunctie-code');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "bestuursfunctie-codes");
      }).catch( function() {
        alert("Creation of bestuursfunctie-code failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "bestuursfunctie-codes");
      }).catch( function() {
        alert("Cancelling creation of bestuursfunctie-code failed");
      });
    }
  }
});
