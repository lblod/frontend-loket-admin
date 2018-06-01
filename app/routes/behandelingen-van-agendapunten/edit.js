import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('behandeling-van-agendapunt', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("behandelingen-van-agendapunten.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("behandelingen-van-agendapunten.show", model);
      }).catch( function() {
        alert("Could not save behandeling-van-agendapunt");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "behandelingen-van-agendapunten");
      }).catch( function() {
        alert("Deletion of behandeling-van-agendapunt failed");
      });
    }
  }
});
