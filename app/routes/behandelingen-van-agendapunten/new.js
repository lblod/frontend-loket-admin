import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model() {
    return this.get('store').createRecord('behandeling-van-agendapunt');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "behandelingen-van-agendapunten");
      }).catch( function() {
        alert("Creation of behandeling-van-agendapunt failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "behandelingen-van-agendapunten");
      }).catch( function() {
        alert("Cancelling creation of behandeling-van-agendapunt failed");
      });
    }
  }
});
