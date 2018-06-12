import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('fractietype');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "fractietypes");
      }).catch( function() {
        alert("Creation of fractietype failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "fractietypes");
      }).catch( function() {
        alert("Cancelling creation of fractietype failed");
      });
    }
  }
});
