import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('rechtstreekse-verkiezing');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "rechtstreekse-verkiezingen");
      }).catch( function() {
        alert("Creation of rechtstreekse-verkiezing failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "rechtstreekse-verkiezingen");
      }).catch( function() {
        alert("Cancelling creation of rechtstreekse-verkiezing failed");
      });
    }
  }
});
