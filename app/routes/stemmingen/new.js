import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('stemming');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "stemmingen");
      }).catch( function() {
        alert("Creation of stemming failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "stemmingen");
      }).catch( function() {
        alert("Cancelling creation of stemming failed");
      });
    }
  }
});
