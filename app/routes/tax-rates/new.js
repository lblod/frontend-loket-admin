import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('tax-rate');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "tax-rates");
      }).catch( function() {
        alert("Creation of tax-rate failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "tax-rates");
      }).catch( function() {
        alert("Cancelling creation of tax-rate failed");
      });
    }
  }
});
