import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('document-status');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "document-statuses");
      }).catch( function() {
        alert("Creation of document-status failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "document-statuses");
      }).catch( function() {
        alert("Cancelling creation of document-status failed");
      });
    }
  }
});
