import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('contact-punt');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "contact-punten");
      }).catch( function() {
        alert("Creation of contact-punt failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "contact-punten");
      }).catch( function() {
        alert("Cancelling creation of contact-punt failed");
      });
    }
  }
});
