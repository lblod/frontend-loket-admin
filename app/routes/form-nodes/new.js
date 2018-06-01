import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('form-node');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "form-nodes");
      }).catch( function() {
        alert("Creation of form-node failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "form-nodes");
      }).catch( function() {
        alert("Cancelling creation of form-node failed");
      });
    }
  }
});
