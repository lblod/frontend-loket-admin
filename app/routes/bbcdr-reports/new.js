import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('bbcdr-report');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "bbcdr-reports");
      }).catch( function() {
        alert("Creation of bbcdr-report failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "bbcdr-reports");
      }).catch( function() {
        alert("Cancelling creation of bbcdr-report failed");
      });
    }
  }
});
