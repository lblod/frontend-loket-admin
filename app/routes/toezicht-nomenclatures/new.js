import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('toezicht-nomenclature');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "toezicht-nomenclatures");
      }).catch( function() {
        alert("Creation of toezicht-nomenclature failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "toezicht-nomenclatures");
      }).catch( function() {
        alert("Cancelling creation of toezicht-nomenclature failed");
      });
    }
  }
});
