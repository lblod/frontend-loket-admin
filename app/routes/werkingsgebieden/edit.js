import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('werkingsgebied', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("werkingsgebieden.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("werkingsgebieden.show", model);
      }).catch( function() {
        alert("Could not save werkingsgebied");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "werkingsgebieden");
      }).catch( function() {
        alert("Deletion of werkingsgebied failed");
      });
    }
  }
});
