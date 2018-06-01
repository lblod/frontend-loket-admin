import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('agendapunt');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "agendapunten");
      }).catch( function() {
        alert("Creation of agendapunt failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "agendapunten");
      }).catch( function() {
        alert("Cancelling creation of agendapunt failed");
      });
    }
  }
});
