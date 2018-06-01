import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('inzending-voor-toezicht');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "inzending-voor-toezichten");
      }).catch( function() {
        alert("Creation of inzending-voor-toezicht failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "inzending-voor-toezichten");
      }).catch( function() {
        alert("Cancelling creation of inzending-voor-toezicht failed");
      });
    }
  }
});
