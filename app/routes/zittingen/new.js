import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('zitting');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "zittingen");
      }).catch( function() {
        alert("Creation of zitting failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "zittingen");
      }).catch( function() {
        alert("Cancelling creation of zitting failed");
      });
    }
  }
});
