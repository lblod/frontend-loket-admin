import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('bestuurseenheid-classificatie-code');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "bestuurseenheid-classificatie-codes");
      }).catch( function() {
        alert("Creation of bestuurseenheid-classificatie-code failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "bestuurseenheid-classificatie-codes");
      }).catch( function() {
        alert("Cancelling creation of bestuurseenheid-classificatie-code failed");
      });
    }
  }
});
