import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('besluit-type');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "besluit-types");
      }).catch( function() {
        alert("Creation of besluit-type failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "besluit-types");
      }).catch( function() {
        alert("Cancelling creation of besluit-type failed");
      });
    }
  }
});
