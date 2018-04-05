import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('werkingsgebied');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "werkingsgebieden");
      }).catch( function() {
        alert("Creation of werkingsgebied failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "werkingsgebieden");
      }).catch( function() {
        alert("Cancelling creation of werkingsgebied failed");
      });
    }
  }
});
