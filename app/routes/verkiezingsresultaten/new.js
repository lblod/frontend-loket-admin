import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('verkiezingsresultaat');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "verkiezingsresultaten");
      }).catch( function() {
        alert("Creation of verkiezingsresultaat failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "verkiezingsresultaten");
      }).catch( function() {
        alert("Cancelling creation of verkiezingsresultaat failed");
      });
    }
  }
});
