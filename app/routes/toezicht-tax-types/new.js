import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('toezicht-tax-type');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "toezicht-tax-types");
      }).catch( function() {
        alert("Creation of toezicht-tax-type failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "toezicht-tax-types");
      }).catch( function() {
        alert("Cancelling creation of toezicht-tax-type failed");
      });
    }
  }
});
